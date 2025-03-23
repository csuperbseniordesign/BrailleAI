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
import { useNavigate } from "react-router-dom";
import { useGenerateResponse } from "@/feature/hooks/useGenerateResponse";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";

const GeneratedParagraphPage = () => {
  const navigate = useNavigate();
  const prompt = sessionStorage.getItem("prompt");
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

  console.log(prompt);

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                AI Modified Paragraph
              </CardTitle>
            </CardHeader>
            <CardContent>
              {responseData != null && !fetching ? (
                <h3 className="font-bold text-lg break-words">
                  {responseData?.response
                    .replace(/<think>.*?<\/think>/gs, "")
                    .trim()}
                </h3>
              ) : (
                <Skeleton
                  className="h-[250px] w-full rounded-xl"
                  style={{ backgroundColor: "grey" }}
                />
              )}
            </CardContent>
            <CardFooter>
              <div className="flex justify-end w-full gap-x-4 mt-[25px]">
                <Button disabled={fetching}>
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
                <Button onClick={handleReGenerate} disabled={fetching}>
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Re-generate
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
