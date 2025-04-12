import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RotateCcw } from "lucide-react";
import { useGenerateResponse } from "@/feature/hooks/useGenerateResponse";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GeneratedParagraphPage = () => {
  const context = sessionStorage.getItem("context");
  const paragraph = sessionStorage.getItem("paragraph");

  const navigate = useNavigate();

  useEffect(() => {
    if (prompt == null) {
      navigate("/");
    }
  });

  const { data: responseData, isFetching: fetching } = useGenerateResponse(
    context!,
    paragraph!
  );
  console.log(responseData);

  if (responseData) {
    sessionStorage.setItem(
      "modifiedParagraph",
      responseData.choices[0].message.content
        ?.replace(/<think>.*?<\/think>/gs, "")
        .trim()
    );
  }

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <div className="flex space-x-6">
                  <h2>AI Modified Paragraph</h2>
                  <Button disabled={fetching}>
                    <RotateCcw className="w-2 h-2" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="w-[800px]">
              {responseData != null && !fetching ? (
                <p className="font-bold text-lg break-words w-[700px]">
                  {responseData?.choices[0].message.content.trim()}
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
                <Button
                  disabled={fetching}
                  onClick={() => navigate("/comprehension")}
                >
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
