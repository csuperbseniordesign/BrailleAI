import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionQuestionaireForm from "@/feature/comprehensionForm/comprehensionQuestionaireForm";
import { looseComprehensionQuestionaireFormSchema } from "@/feature/comprehensionForm/looseComprehensionQuestionaireFormSchema";
import { useRequestParagraph } from "@/feature/hooks/useRequestParagraph";
import { cleanOptions, findCorrectAnswer } from "@/util/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormValues = z.infer<typeof looseComprehensionQuestionaireFormSchema>;

const ParagraphComprehension = () => {
  const paragraphId = sessionStorage.getItem("paragraphId");
  const navigate = useNavigate();

  useEffect(() => {
    if (paragraphId == null) {
      navigate("/");
    }
  });

  const { data: paragraphData } = useRequestParagraph(
    paragraphId ? paragraphId : "1"
  );

  const questionList = paragraphData ? paragraphData.questions : [];

  const onSubmit = (data: FormValues) => {
    // add student's score in database then go to cultural-questionaire
    // if (data.answer == correctAnswer) {
    //   console.log("correct");
    // } else {
    //   console.log("incorrect");
    // }
    // navigate("/cultural-questionaire");
  };

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
              formattedPargraphQuestions={paragraphData?.questions}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParagraphComprehension;
