import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Download, RotateCcw } from "lucide-react";
import { useGenerateResponse } from "@/feature/hooks/useGenerateResponse";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GeneratedParagraphPage = () => {
  const prompt = sessionStorage.getItem("prompt");
  const primaryInterest = sessionStorage.getItem("interest");
  const gradeLevel = sessionStorage.getItem("gradeLevel");
  const navigate = useNavigate();

  useEffect(() => {
    if (prompt == null || primaryInterest == null || gradeLevel == null) {
      navigate("/");
    }
  });

  const {
    data: responseData,
    refetch: refetch,
    isFetching: fetching,
  } = useGenerateResponse(prompt!);
  console.log(responseData);

  const handleReGenerate = () => {
    console.log("Regenerating...");
    refetch();
  };

  const handleSave = () => {
    console.log(primaryInterest);
  };

  console.log(prompt);

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <div className="flex space-x-6">
                  <h2>AI Modified Paragraph</h2>
                  <Button onClick={handleReGenerate} disabled={fetching}>
                    <RotateCcw className="w-2 h-2" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="w-[800px]">
              {responseData != null && !fetching ? (
                <p className="font-bold text-lg break-words w-[700px]">
                  {responseData?.response
                    .replace(/<think>.*?<\/think>/gs, "")
                    .trim()}
                </p>
              ) : (
                <Skeleton
                  className="h-[250px] w-full rounded-xl w-[700px]"
                  style={{ backgroundColor: "grey" }}
                />
              )}
            </CardContent>
            <CardFooter>
              <div className="flex justify-end w-full gap-x-4 mt-[25px]">
                <Button disabled={fetching} onClick={handleSave}>
                  Next {" >"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeneratedParagraphPage;
