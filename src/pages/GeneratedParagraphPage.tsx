import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const GeneratedParagraphPage = () => {
  const [response, setResponse] = useState<string>("");

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
              {response !== "" ? (
                <h3 className="font-bold text-lg break-words">{response}</h3>
              ) : (
                <Skeleton
                  className="h-[250px] w-full rounded-xl"
                  style={{ backgroundColor: "grey" }}
                />
              )}
            </CardContent>
            <CardFooter>
              <h3 className="text-xl">
                Note: Your data is not saved and will be deleted after the
                session.
              </h3>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeneratedParagraphPage;
