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
  const navigate = useNavigate();

  useEffect(() => {
    if (paragraphId == null) {
      navigate("/cultural-questionaire");
    }
  });

  const { data: paragraphData } = useRequestParagraphQuestions(
    paragraphId ? paragraphId : "1",
    selectedName!
  );

  const questionList = paragraphData ? paragraphData.questions : [];

  const onSubmit = (data: FormValues) => {
    console.log(data[0]);
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
              formattedPargraphQuestions={questionList}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParagraphComprehension;
