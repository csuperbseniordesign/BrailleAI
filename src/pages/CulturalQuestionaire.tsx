import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CulturalForm from "@/feature/culturalForm/culturalForm";
import { looseCulturalFormSchema } from "@/feature/culturalForm/looseCulturalFormSchema";
import { calculateCulturalRelevanceScore } from "@/util/calculateScore";
import { z } from "zod";

type FormValues = z.infer<typeof looseCulturalFormSchema>;

// make it require passage as the context

const CulturalQuestionaire = () => {
  const onSubmit = (data: FormValues) => {
    const score = calculateCulturalRelevanceScore(data);
    console.log(score);
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto max-h-90">
      <div className="max-w-screen-md">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl text-center">
              Cultural Relevance Questionaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CulturalForm onSubmit={onSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CulturalQuestionaire;
