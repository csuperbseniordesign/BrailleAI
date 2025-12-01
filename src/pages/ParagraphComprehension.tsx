import Loader from "@/components/loader/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComprehensionQuestionaireForm from "@/feature/comprehensionForm/comprehensionQuestionaireForm";
import { looseComprehensionQuestionaireFormSchema } from "@/feature/comprehensionForm/looseComprehensionQuestionaireFormSchema";
import { useRequestParagraphQuestions } from "@/feature/hooks/useRequestParagraphQuestions";
import { ModifiedParagraphCreate } from "@/api/type";
import { useCreateModifiedParagraph } from "@/feature/hooks/useCreateModifiedParagraph";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormValues = z.infer<typeof looseComprehensionQuestionaireFormSchema>;

const ParagraphComprehension = () => {
  const paragraphId = sessionStorage.getItem("paragraphId");
  const selectedName = sessionStorage.getItem("name");
  const code_id = String(sessionStorage.getItem("student-code-id"));
  const navigate = useNavigate();

  useEffect(() => {
    if (paragraphId == null) {
      navigate("/cultural-questionaire");
    }
  });

  const { data: paragraphData } = useRequestParagraphQuestions(
    paragraphId ? paragraphId : "1",
    selectedName!,
    code_id
  );

  const { mutate: createModifiedParagraph } = useCreateModifiedParagraph();
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
    const ethnicity = sessionStorage.getItem("ethnicity") || undefined;
    const gender = sessionStorage.getItem("gender") || undefined;
    const interest = sessionStorage.getItem("interest") || undefined;
    const modifiedParagraph = sessionStorage.getItem("modifiedParagraph");

    const q1 = questionList[0]?.question;
    const q1Options = questionList[0]?.options || [];
    const q2 = questionList[1]?.question;
    const q2Options = questionList[1]?.options || [];

    const modifiedParagraphData: ModifiedParagraphCreate = {
      paragraph: modifiedParagraph || "",
      ethnicity,
      gender,
      interest,
      q1,
      q1a1: q1Options[0],
      q1a2: q1Options[1],
      q1a3: q1Options[2],
      q1a4: q1Options[3],
      q2,
      q2a1: q2Options[0],
      q2a2: q2Options[1],
      q2a3: q2Options[2],
      q2a4: q2Options[3],
      used: 1,
      cr_avg: 0,
      code_id,
      minAtos: Number(sessionStorage.getItem("minAtos")) || undefined,
      maxAtos: Number(sessionStorage.getItem("maxAtos")) || undefined,
      original_paragraph_id: Number(paragraphId),
    };

    console.log("Modified Paragraph Data:", modifiedParagraphData);
    console.log("Session Storage Check:", {
      paragraphId,
      modifiedParagraph,
      ethnicity,
      gender,
      interest,
      minAtos: sessionStorage.getItem("minAtos"),
      maxAtos: sessionStorage.getItem("maxAtos"),
    });

    createModifiedParagraph(
      {
        modifiedParagraph: modifiedParagraphData,
        accessToken: code_id,
      },
      {
        onSuccess: (response) => {
          sessionStorage.setItem("modified_paragraph_id", response.id);
          navigate("/cultural-questionaire");
        },
      }
    );
  };

  if (!paragraphData) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Card className="border-2 border-gray-300">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-black mb-4">
              Paragraph Comprehension
            </CardTitle>
          </CardHeader>

          <div className="px-8 pb-6">
            {/* Instructions */}
            <div className="bg-gray-100 border-2 border-gray-400 rounded p-6 mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                Instructions
              </h2>
              <div className="space-y-3 text-2xl text-black">
                <p>Now we will ask some questions about what you just read.</p>
                <p>When you're ready, choose the answer you think is best!</p>
              </div>
            </div>
          </div>

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
