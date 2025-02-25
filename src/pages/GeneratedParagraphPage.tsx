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
import { useState } from "react";

const GeneratedParagraphPage = () => {
  const [response] = useState<string>("");
  const storedData = sessionStorage.getItem("prompt");

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
              {storedData !== "" ? (
                <h3 className="font-bold text-lg break-words">{storedData}</h3>
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
                  {" "}
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
                <Button>
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
