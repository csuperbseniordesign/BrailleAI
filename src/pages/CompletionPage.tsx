import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompletionPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex justify-center min-h-screen py-[50px]">
      <div className="max-w-screen-md">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl text-center">
              Assessment Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">Thank you for completing this Assessment</p>
            <div className="flex py-[20px] justify-center">
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back To HomePage
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompletionPage;
