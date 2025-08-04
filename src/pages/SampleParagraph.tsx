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
import IrbFooter from "@/components/IrbFooter";

const SampleParagraphPage = () => {
  const navigate = useNavigate();
  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const [canProceed, setCanProceed] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const startTime = useRef<number | null>(null);
  const elapsedTime = useRef<number>(0);

  const handleStart = () => {
    if (!startTime.current) {
      startTime.current = Date.now();
      setStartDisabled(true);
      setStopDisabled(false);
      setShowParagraph(true);
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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <Card className="border-2 border bg-card text-card-foreground">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold mb-4">
                Practice Reading
              </CardTitle>
            </CardHeader>

            <div className="px-8 pb-6">
              {/* Instructions */}
              <div className="bg-muted border-2 border rounded p-6 mb-8">
                <h2 className="text-3xl font-bold mb-4">Instructions</h2>
                <div className="space-y-3 text-2xl">
                  <p>
                    This practice will show you how to use the test. Read the
                    paragraph below.
                  </p>
                  <p>
                    When you're ready to read, click <strong>Start</strong>— a
                    timer will start and the paragraph will appear.
                  </p>
                  <p>
                    When you're done reading, click <strong>Stop</strong>— the
                    timer will stop.
                  </p>
                  <p>
                    Then click <strong>Next</strong> to do the real test.
                  </p>
                  <p>
                    After you finish reading, you will answer some questions
                    about what you read.
                  </p>
                </div>
              </div>
            </div>

            <CardContent className="px-8 py-8">
              {/* Start Button */}
              <div className="mb-8">
                {!startDisabled && (
                  <p className="text-2xl text-muted-foreground mt-3">
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
              <div className="bg-card border-2 border rounded p-8 mb-8 min-h-[200px] flex items-center justify-center">
                {showParagraph ? (
                  <p className="text-2xl leading-loose text-center font-medium">
                    The puppy ran in the yard. It saw a cat! The dog barked at
                    the cat.
                  </p>
                ) : (
                  <p className="text-muted-foreground text-xl italic text-center"></p>
                )}
              </div>

              {/* Stop Button */}
              <div className="mb-6">
                {!stopDisabled && (
                  <p className="text-2xl text-muted-foreground mt-3">
                    Click the button below when you finish reading the
                    paragraph.
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
      </main>

      {/* Footer outside main content */}
      <IrbFooter />
    </div>
  );
};

export default SampleParagraphPage;
