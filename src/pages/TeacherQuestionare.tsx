import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { looseTeacherFormSchema } from "@/feature/teacherForm/loseTeacherFormSchema";
import TeacherForm from "@/feature/teacherForm/teacherForm";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCreateFinalStudentData } from "@/feature/hooks/useCreateFinalStudentData";

type FormValues = z.infer<typeof looseTeacherFormSchema>;

const TeacherQuestionare = () => {
  const navigate = useNavigate();
  const { mutate: addFinalStudentData } = useCreateFinalStudentData();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    const studentId = Number(sessionStorage.getItem("studentId"));
    console.log(studentId);
    const question1 = sessionStorage.getItem("question1") || "";
    const question2 = sessionStorage.getItem("question2") || "";
    const question3 = sessionStorage.getItem("question3") || "";
    const characterQuestion1 =
      sessionStorage.getItem("characterQuestion1") || "";
    const characterQuestion2 =
      sessionStorage.getItem("characterQuestion2") || "";
    const characterQuestion3 =
      sessionStorage.getItem("characterQuestion3") || "";
    const characterQuestion4 =
      sessionStorage.getItem("characterQuestion4") || "";
    const experienceQuestion1 =
      sessionStorage.getItem("experienceQuestion1") || "";
    const endingQuestion1 = sessionStorage.getItem("endingQuestion1") || "";
    const endingQuestion2 = sessionStorage.getItem("endingQuestion1") || "";
    const endingQuestion3 = sessionStorage.getItem("endingQuestion1") || "";
    const endingQuestion4 = sessionStorage.getItem("endingQuestion1") || "";
    const blank = sessionStorage.getItem("blank") || "";

    const teacher_question1 = data.question1;
    const teacher_question2 = data.question2;
    const teacher_question3 = data.question3;
    const teacher_question4 = data.question4;
    const teacher_question5 = data.question5;
    const teacher_question6 = data.question6;
    const teacher_question7 = data.question7;
    const teacher_blank = data.blank || "";

    const comprehension_score = Number(
      sessionStorage.getItem("comprehension_score") || 0,
    );
    const timeInSeconds = Number(sessionStorage.getItem("readingTime") || 0);
    const modified_paragraph_id = 0;
    const cr_avg = 1.0;

    const code_id = sessionStorage.getItem("student-code-id") || "";

    addFinalStudentData(
      {
        studentId,
        studentData: {
          question1: question1,
          question2: question2,
          question3: question3,
          characterQuestion1: characterQuestion1,
          characterQuestion2: characterQuestion2,
          characterQuestion3: characterQuestion3,
          characterQuestion4: characterQuestion4,
          experienceQuestion1: experienceQuestion1,
          endingQuestion1: endingQuestion1,
          endingQuestion2: endingQuestion2,
          endingQuestion3: endingQuestion3,
          endingQuestion4: endingQuestion4,
          blank: blank,
          teacher_question1: teacher_question1,
          teacher_question2: teacher_question2,
          teacher_question3: teacher_question3,
          teacher_question4: teacher_question4,
          teacher_question5: teacher_question5,
          teacher_question6: teacher_question6,
          teacher_question7: teacher_question7,
          teacher_blank: teacher_blank,
          comprehension_score: comprehension_score,
          timeInSeconds: timeInSeconds,
          modified_paragraph_id: modified_paragraph_id,
          cr_avg: cr_avg,
        },
        accessToken: code_id,
      },
      {
        onSuccess: (studentData) => {
          if (!studentData) {
            return;
          }
        },
        onError: (error: any) => {
          console.error("Update student failed:", error);

          // If using Axios or a fetch wrapper with .response:
          if (error?.response?.data) {
            console.error("422 Validation error details:", error.response.data);
          }
        },
      },
    );

    navigate("/complete");
  };
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
          <CardContent>
            <TeacherForm onSubmit={onSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherQuestionare;
