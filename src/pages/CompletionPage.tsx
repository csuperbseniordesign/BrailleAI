import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProgress,
  incrementProgress,
  clearIterationData,
} from "@/util/progressTracker";

const CompletionPage = () => {
  const navigate = useNavigate();
  // const { mutate: requestRandomParagraph, isPending } =
  //   useRequestRandomParagraph();
  //const [setIsLoadingNext] = useState(false);

  const { completed, total } = getProgress();

  // We just finished a paragraph, so the actual completed count is completed + 1
  const justCompleted = completed + 1;
  const isLastParagraph = justCompleted >= total;

  const comprehension_score = Number(
    sessionStorage.getItem("comprehension_score") || 0
  );

  useEffect(() => {
    if (isLastParagraph) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [navigate, isLastParagraph]);

  const handleContinue = () => {
    // Increment progress
    incrementProgress();

    // Clear iteration-specific data
    clearIterationData();

    sessionStorage.setItem("isReturningUser", "true");

    navigate("/demographicsurvey");

    // Get data needed for next paragraph
    // const code_id = sessionStorage.getItem("student-code-id") || "";
    // const ethnicity = sessionStorage.getItem("ethnicity") || "";
    // const gender = sessionStorage.getItem("gender") || "";
    // const primaryInterest = sessionStorage.getItem("interest") || "";
    // const mainlabel = sessionStorage.getItem("mainlabel") || "";
    // const sublabel = sessionStorage.getItem("sublabel") || "";
    // const minAtos = Number(sessionStorage.getItem("minAtos"));
    // const maxAtos = Number(sessionStorage.getItem("maxAtos"));
    // const ethnicSubgroup = ethnicity;

    // Request next paragraph
    // requestRandomParagraph(
    //   {
    //     interest: primaryInterest,
    //     mainlabel: mainlabel,
    //     sublabel: sublabel,
    //     minAtos: minAtos,
    //     maxAtos: maxAtos,
    //     ethnicity: ethnicSubgroup,
    //     gender: gender,
    //     accessToken: code_id,
    //   },
    //   {
    //     onSuccess: (paragraphData) => {
    //       if (!paragraphData) {
    //         setIsLoadingNext(false);
    //         return;
    //       }

    //       const paragraph = cleanText(paragraphData.data.paragraph);
    //       const selected_name = getNamesByEthnicityAndGender(
    //         ethnicity,
    //         gender,
    //         ethnicSubgroup
    //       );
    //       const context = createContext(selected_name, gender);

    //       sessionStorage.setItem("context", context);
    //       sessionStorage.setItem("name", selected_name);
    //       sessionStorage.setItem("paragraph", paragraph);
    //       sessionStorage.setItem("paragraphId", String(paragraphData.data.id));

    //       // Navigate to read the next paragraph
    //       navigate("/response");
    //     },
    //     onError: (error) => {
    //       console.error("Failed to fetch next paragraph:", error);
    //       setIsLoadingNext(false);
    //       alert("Could not load the next paragraph. Please try again.");
    //     },
    //   }
    // );
  };

  const handleFinish = () => {
    sessionStorage.clear();
    navigate("/code-entry");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-gray-300">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-black mb-4">
              {isLastParagraph
                ? "All Paragraphs Completed!"
                : "Paragraph Complete"}
            </CardTitle>

            {/* Progress Indicator */}
            {!isLastParagraph && (
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-gray-600">
                  Progress: {justCompleted} of {total} completed
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  {Array.from({ length: total }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-12 rounded-full ${
                        index < justCompleted ? "bg-green-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <p className="text-xl text-gray-800">
              {isLastParagraph
                ? "Thank you for completing all paragraphs!"
                : "Great job on this paragraph!"}
            </p>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className="inline-block border-2 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Your Comprehension Score
                </h2>
                <div className="text-6xl font-bold mb-4 text-black">
                  {comprehension_score}/2
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 items-center">
              {!isLastParagraph ? (
                <>
                  <Button
                    onClick={handleContinue}
                    size="lg"
                    className="bg-green-700 hover:bg-green-800 text-white text-xl font-bold py-6 px-12 h-auto"
                  >
                    Continue
                  </Button>
                  <p className="text-gray-600 text-sm mt-2">
                    You'll review your information before the next paragraph
                  </p>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleFinish}
                    size="lg"
                    className="text-white text-xl font-bold py-6 px-12 h-auto"
                  >
                    Finish and Return to Home
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompletionPage;
