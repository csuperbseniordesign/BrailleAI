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
  console.log(paragraphData);
  const options = paragraphData
    ? [
        paragraphData.q1a1,
        paragraphData.q1a2,
        paragraphData.q1a3,
        paragraphData.q1a4,
      ]
    : [];

  const options2 = paragraphData
    ? [
        paragraphData.q2a1,
        paragraphData.q2a2,
        paragraphData.q2a3,
        paragraphData.q2a4,
      ]
    : [];
  const question1 = paragraphData?.q1;
  const refinedOptions = paragraphData ? cleanOptions(options) : [];
  const correctAnswer = paragraphData ? findCorrectAnswer(options) : "";
  const question2 = paragraphData?.q2;
  const refinedOption2 = paragraphData ? cleanOptions(options2) : [];
  const correctAnswer2 = paragraphData ? findCorrectAnswer(options2) : "";

  const onSubmit = (data: FormValues) => {
    // add student's score in database then go to cultural-questionaire
    if (data.answer == correctAnswer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    navigate("/cultural-questionaire");
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
              question1={question1}
              options1={refinedOptions}
              question2={question2}
              options2={refinedOption2}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParagraphComprehension;
