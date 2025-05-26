import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const TeacherQuestionare = () => {
  return (
    <div className="flex justify-center items-center overflow-y-auto max-h-90 py-[10px] w-full">
      <div className="max-w-screen-md">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl text-center">
              Exit Questionnaire - Teacher
            </CardTitle>
            <CardDescription className="space-y-2 text-card-foreground">
              <h1 className="text-xl font-bold py-[5px]">
                Instructions for Teachers/Support Staff:
              </h1>

              <p className="text-lg">
                This exit questionnaire is designed to gather your feedback on
                the reading passage the student just completed. Please consider
                the student's experience with the passage and respond honestly
                to each statement. Use the response options provided, and
                remember to reflect on the passage's accessibility, cultural and
                linguistic relevance, and engagement level for the student. If
                you have any additional comments or observations, please share
                them in the space provided.
              </p>

              <p className="text-lg">Thank you for your valuable input!</p>
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherQuestionare;
