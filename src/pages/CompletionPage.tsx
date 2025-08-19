import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompletionPage = () => {
  const navigate = useNavigate();
  const comprehension_score = Number(
    sessionStorage.getItem("comprehension_score") || 0
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-gray-300">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-black mb-4">
              Assessment Completed
            </CardTitle>
            <p className="text-xl text-gray-800">
              Thank you for your participation
            </p>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className={`inline-block border-2 rounded-lg p-8`}>
                <h2 className="text-2xl font-bold mb-4">
                  Your Comprehension Score
                </h2>
                <div className="text-6xl font-bold mb-4">
                  {comprehension_score}/2
                </div>
              </div>
            </div>

            {/* Manual navigation button */}
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  navigate("/");
                }}
                size="lg"
                className="text-white text-xl font-bold py-4 px-8 h-auto"
              >
                Go Back To Homepage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompletionPage;
