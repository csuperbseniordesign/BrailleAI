import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useGenerateResponse from "@/feature/hooks/useGenerateResponse";
import { Download, RotateCcw } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const GeneratedParagraphPage = () => {
  const navigate = useNavigate();
  const prompt = sessionStorage.getItem("prompt");
  const ref = useRef(false);

  const handleReload = async () => {
    console.log("reload");
    await fetchResponse();
  };

  useEffect(() => {
    if (!prompt) {
      navigate("/");
    }
  }, []);

  const { response, loading, fetchResponse } = useGenerateResponse(
    prompt,
    false
  );

  useEffect(() => {
    if (!ref.current) {
      fetchResponse();
      ref.current = false;
    }
  }, []);

  console.log(response);

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
              {!loading && response ? (
                <h3 className="font-bold text-lg break-words">
                  {response.replace(/<think>.*?<\/think>/gs, "").trim()}
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
                <Button>
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
                <Button onClick={handleReload} disabled={loading}>
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
