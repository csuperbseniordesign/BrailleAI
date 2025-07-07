import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const SampleParagraphPage = () => {
  const navigate = useNavigate();
  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const startTime = useRef<number | null>(null);
  const elapsedTime = useRef<number>(0);
  const [canProceed, setCanProceed] = useState(false);

  const handleStart = () => {
    if (!startTime.current) {
      startTime.current = Date.now();
      setStartDisabled(true);
      setStopDisabled(false);
    }
  };

  const handleStop = () => {
    if (startTime.current && !stopDisabled) {
      const timeInSec = Math.floor((Date.now() - startTime.current) / 1000);
      elapsedTime.current = timeInSec;
      setStopDisabled(true);
      setCanProceed(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-gray-300">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-black mb-4">
              Practice Reading
            </CardTitle>
          </CardHeader>

          <div className="px-8 pb-6">
            {/* Instructions */}
            <div className="bg-gray-100 border-2 border-gray-400 rounded p-6 mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                Instructions
              </h2>
              <div className="space-y-3 text-2xl text-black">
                <p>
                  This is just for practice. Try reading the paragraph below.
                </p>
                <p>
                  When you're ready to read, click <strong>Start</strong>.
                </p>
                <p>
                  When you're done reading, click <strong>Stop</strong>.
                </p>
                <p>
                  Then click <strong>Next</strong> to begin the real assessment.
                </p>
              </div>
            </div>
          </div>

          <CardContent className="px-8 py-8">
            {/* Start Button */}
            <div className="mb-8">
              {!startDisabled && (
                <p className="text-2xl text-gray-700 mt-3">
                  Click the button below when you want to start reading the
                  paragraph.
                </p>
              )}
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
              <p className="text-2xl leading-loose text-black text-center font-medium">
                The puppy ran across the yard. It saw a butterfly. Then it
                barked!
              </p>
            </div>

            {/* Stop Button */}
            <div className="mb-6">
              {!stopDisabled && (
                <p className="text-2xl text-gray-700 mt-3">
                  Click the button below when you finish reading the paragraph.
                </p>
              )}
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
                disabled={!canProceed}
                onClick={() => navigate("/response")}
                size="lg"
                className="disabled:bg-gray-400 text-white text-xl font-bold py-4 px-8 h-auto"
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SampleParagraphPage;
