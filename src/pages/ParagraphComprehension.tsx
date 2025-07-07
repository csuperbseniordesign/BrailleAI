import Loader from "@/components/loader/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionQuestionaireForm from "@/feature/comprehensionForm/comprehensionQuestionaireForm";
import { looseComprehensionQuestionaireFormSchema } from "@/feature/comprehensionForm/looseComprehensionQuestionaireFormSchema";
import { useRequestParagraphQuestions } from "@/feature/hooks/useRequestParagraphQuestions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormValues = z.infer<typeof looseComprehensionQuestionaireFormSchema>;

const ParagraphComprehension = () => {
  const paragraphId = sessionStorage.getItem("paragraphId");
  const selectedName = sessionStorage.getItem("name");
  const code_id = sessionStorage.getItem("student-code-id");
  const navigate = useNavigate();

  useEffect(() => {
    if (paragraphId == null) {
      navigate("/cultural-questionaire");
    }
  });

  const { data: paragraphData } = useRequestParagraphQuestions(
    paragraphId ? paragraphId : "1",
    selectedName!,
    code_id,
  );

  const questionList = paragraphData ? paragraphData.questions : [];

  const onSubmit = (data: FormValues) => {
    let score = 0;

    questionList.forEach((question, index) => {
      const userAnswer = data[index.toString() as "0" | "1"];
      const correctAnswer = question.answer;

      if (userAnswer === correctAnswer) {
        score += 1;
      }
    });

    console.log("User answers:", data);
    console.log("Score:", score);
    sessionStorage.setItem("comprehension_score", score.toString());
    navigate("/cultural-questionaire");
  };

  if (!paragraphData) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center min-h-screen py-[50px]">
      <div className="max-w-screen-md">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl text-center">
              Paragraph Comprehension Questionaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ComprehensionQuestionaireForm
              onSubmit={onSubmit}
              formattedPargraphQuestions={questionList}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParagraphComprehension;
