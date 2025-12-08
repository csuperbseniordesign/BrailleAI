import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetStudentByCode } from "@/feature/hooks/useGetStudentByCode";
import { Loader } from "@/components/loader/Loader";
import { initializeProgress, resetProgress } from "@/util/progressTracker";

const CodeVerificationPage = () => {
  const [codeId, setCodeId] = useState("");
  const [shouldVerify, setShouldVerify] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetStudentByCode(
    shouldVerify ? codeId : null,
    codeId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (codeId.trim()) {
      setShouldVerify(true);
    }
  };

  useEffect(() => {
    if (shouldVerify && !isLoading) {
      if (isError) {
        // Invalid code
        alert("Invalid code ID. Please check and try again.");
        setShouldVerify(false);
        return;
      }

      if (data) {
        // Store the code ID
        sessionStorage.setItem("student-code-id", codeId);

        if (data.exists && data.student) {
          // Pre-fill the form data from the most recent entry
          const student = data.student;

          sessionStorage.setItem("year", student.year?.toString() || "");
          sessionStorage.setItem("gender", student.gender || "");
          sessionStorage.setItem("ethnicity", student.ethnicity || "");
          sessionStorage.setItem(
            "primaryInterest",
            student.primaryInterest || ""
          );
          sessionStorage.setItem("gradeLevel", student.gradeLevel || "");
          sessionStorage.setItem("readingLevel", student.readingLevel || "");
          sessionStorage.setItem(
            "familyBackground",
            student.familyBackground || ""
          );
          sessionStorage.setItem("birthPlace", student.birthPlace || "");
          sessionStorage.setItem("region", student.region || "");
          sessionStorage.setItem("languages", student.languages || "");
          sessionStorage.setItem("country", student.country || "");
          sessionStorage.setItem("vision", student.vision || "");
          sessionStorage.setItem(
            "preferredMedia",
            student.preferredMedia || ""
          );
          sessionStorage.setItem("appAccess", student.appAccess || "");
          sessionStorage.setItem(
            "digitalTextAccess",
            student.digitalTextAccess || ""
          );
          sessionStorage.setItem("isReturningUser", "true");

          // Navigate to the form (it will auto-fill from sessionStorage)
          navigate("/demographicsurvey");
          resetProgress();
          initializeProgress();
        } else {
          // First time user - go to empty form
          sessionStorage.setItem("isReturningUser", "false");
          resetProgress();
          initializeProgress();
          navigate("/demographicsurvey");
        }
      }
    }
  }, [shouldVerify, isLoading, isError, data, codeId, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="border-2 border-gray-300">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-black mb-4">
              Welcome
            </CardTitle>
          </CardHeader>

          <CardContent className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="codeId"
                  className="block text-2xl font-bold text-black mb-4"
                >
                  Please enter your Code ID:
                </label>
                <Input
                  id="codeId"
                  type="text"
                  value={codeId}
                  onChange={(e) => setCodeId(e.target.value)}
                  placeholder="Enter your code"
                  className="text-xl p-6 border-2 border-gray-400"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-2xl font-bold py-6"
                disabled={!codeId.trim()}
              >
                Continue
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600">
                Don't have a code? Please contact your teacher.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CodeVerificationPage;
