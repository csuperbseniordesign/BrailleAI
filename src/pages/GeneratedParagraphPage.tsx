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
  const [canProceed, setCanProceed] = useState(false);
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
      setCanProceed(true);
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
    paragraph!,
  );

  // console.log(responseData);

  if (responseData) {
    sessionStorage.setItem(
      "modifiedParagraph",
      responseData.choices[0].message.content
        ?.replace(/<think>.*?<\/think>/gs, "")
        .trim(),
    );
  }

  if (!responseData) {
    return <Loader />;
  }

  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <Card className="border-2 border-gray-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold text-black mb-4">
                AI Modified Paragraph
              </CardTitle>
            </CardHeader>

            <CardContent className="px-8 py-8">
              {/* Start Button */}
              <div className="mb-8">
                <Button
                  onClick={handleStart}
                  disabled={startDisabled}
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white text-3xl font-bold py-4 px-8 h-auto"
                >
                  Start
                </Button>
              </div>

              {/* Reading Paragraph */}
              <div className="bg-gray-50 border-2 border-gray-400 rounded p-8 mb-8">
                {responseData != null && !fetching ? (
                  <p className="text-2xl leading-loose text-black text-center font-medium">
                    {responseData?.choices[0].message.content.trim()}
                  </p>
                ) : (
                  <Skeleton
                    className="h-[250px] w-full rounded-xl w-[700px]"
                    style={{ backgroundColor: "grey" }}
                  />
                )}
              </div>

              {/* Stop Button */}
              <div className="mb-6">
                <Button
                  onClick={handleStop}
                  disabled={stopDisabled}
                  size="lg"
                  className="bg-red-700 hover:bg-red-800 text-white text-3xl font-bold py-4 px-8 h-auto"
                >
                  Stop
                </Button>
              </div>
            </CardContent>
            <CardFooter className="px-8 pb-8">
              <div className="flex justify-end w-full">
                <Button
                  disabled={fetching || !canProceed}
                  onClick={() => navigate("/comprehension")}
                  size="lg"
                  className="disabled:bg-gray-400 text-white text-xl font-bold py-4 px-8 h-auto"
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
