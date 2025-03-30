import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import * as F from "@/components/forms";
import { looseCulturalFormSchema } from "./looseCulturalFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { questions } from "./formData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type FormValues = z.infer<typeof looseCulturalFormSchema>;
type CulturalFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseCulturalFormSchema>>;
};

const CulturalForm = ({ onSubmit }: CulturalFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseCulturalFormSchema),
    defaultValues: {
      question1: "2",
      question2: "2",
      question3: "2",
      question4: "2",
      question5: "2",
      question6: "2",
      question7: "2",
      question8: "2",
    },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <div className="space-y-5">
        {questions.map((question, index) => (
          <div>
            <h4 className="text-lg py-[5px] w-[600px]">
              {index + 1 + ". " + question.question}
            </h4>
            <F.Field
              name={question.id as keyof FormValues}
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    {
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <div className="flex item-center space-x-20 py-[15px] text-center">
                          <div className="flex flex-col items-center w-20">
                            <RadioGroupItem value="4" id="r1" />
                            <p>{question.bestOption}</p>
                          </div>

                          <div className="flex flex-col items-center w-20">
                            <RadioGroupItem value="3" id="r2" />
                          </div>

                          <div className="flex flex-col items-center w-20">
                            <RadioGroupItem value="2" id="r3" />
                          </div>

                          <div className="flex flex-col items-center w-20">
                            <RadioGroupItem value="1" id="r4" />
                            <p>{question.worseOption}</p>
                          </div>
                        </div>
                      </RadioGroup>
                    }
                  </F.Control>
                </F.Item>
              )}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end py-[15px]">
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </F.Root>
  );
};

export default CulturalForm;
