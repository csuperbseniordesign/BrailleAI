import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGenerateResponse } from "@/feature/hooks/useGenerateResponse";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Loader } from "@/components/loader/Loader";

const GeneratedParagraphPage = () => {
  const context = sessionStorage.getItem("context");
  const paragraph = sessionStorage.getItem("paragraph");

  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const startTime = useRef<number | null>(null);
  const elapsedTime = useRef<number>(0);

  const handleStart = () => {
    if (!startTime.current) {
      startTime.current = Date.now();
      setStartDisabled(true);
      setStopDisabled(false);
    }
  };

  const handleStop = () => {
    if (startTime.current && !stopDisabled) {
      const timeInMs = Date.now() - startTime.current;
      const timeInSec = Math.floor(timeInMs / 1000);
      elapsedTime.current = timeInSec;
      sessionStorage.setItem("readTime", timeInSec.toString());
      console.log("Time (seconds):", timeInSec);
      setStopDisabled(true);
    }
  };

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

  // console.log(responseData);

  if (responseData) {
    sessionStorage.setItem(
      "modifiedParagraph",
      responseData.choices[0].message.content
        ?.replace(/<think>.*?<\/think>/gs, "")
        .trim()
    );
  }

  if (!responseData) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl">
                <div className="flex space-x-6 space-y-3">
                  <h2>AI Modified Paragraph</h2>
                </div>
              </CardTitle>
            </CardHeader>
            <div className="px-6 py-6">
              <Button
                onClick={handleStart}
                disabled={startDisabled}
                size="lg"
                className="text-2xl"
              >
                Start
              </Button>
            </div>
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
            <div className="px-6 py-3">
              <Button
                onClick={handleStop}
                disabled={stopDisabled}
                size="lg"
                className="text-2xl"
              >
                Stop
              </Button>
            </div>
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
