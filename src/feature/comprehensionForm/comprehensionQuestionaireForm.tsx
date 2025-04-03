import { z } from "zod";
import * as F from "@/components/forms";
import { looseComprehensionQuestionaireFormSchema } from "./looseComprehensionQuestionaireFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ParagraphQuestions } from "@/api/type";

type FormValues = z.infer<typeof looseComprehensionQuestionaireFormSchema>;
type ComprehensionFormProps = {
  onSubmit: SubmitHandler<
    z.infer<typeof looseComprehensionQuestionaireFormSchema>
  >;
  formattedPargraphQuestions?: ParagraphQuestions[];
};

const ComprehensionQuestionaireForm = ({
  onSubmit,
  formattedPargraphQuestions,
}: ComprehensionFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseComprehensionQuestionaireFormSchema),
    defaultValues: {
      "0": "",
      "1": "",
    },
  });

  const handleSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <div className="space-y-5">
        {formattedPargraphQuestions?.map((questions, index) => (
          <div key={index}>
            <div className="text-2xl font-bold">
              {questions ? (
                questions.question
              ) : (
                <Skeleton className="h-4 w-[200px]" />
              )}
            </div>
            <F.Field
              name={("" + index) as keyof FormValues}
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    {
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        {questions ? (
                          questions.options.map((option, index) => (
                            <div
                              className="flex item-center space-x-2 space-y-3"
                              key={index}
                            >
                              <RadioGroupItem
                                className="w-7 h-7 mt-3"
                                value={option}
                                id={"" + index}
                              />
                              <Label className="text-lg" htmlFor={"" + index}>
                                {option}
                              </Label>
                            </div>
                          ))
                        ) : (
                          <Skeleton className="h-20 w-[200px]" />
                        )}
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
        <Button onClick={handleSubmit}>Next {">"}</Button>
      </div>
    </F.Root>
  );
};

export default ComprehensionQuestionaireForm;
