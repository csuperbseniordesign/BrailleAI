import { z } from "zod";
import * as F from "@/components/forms";
import { looseComprehensionQuestionaireFormSchema } from "./looseComprehensionQuestionaireFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Skeleton } from "@/components/ui/skeleton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormValues = z.infer<typeof looseComprehensionQuestionaireFormSchema>;
type ComprehensionFormProps = {
  onSubmit: SubmitHandler<
    z.infer<typeof looseComprehensionQuestionaireFormSchema>
  >;
  question1?: string;
  options1?: string[];
  question2?: string;
  options2?: string[];
};

const ComprehensionQuestionaireForm = ({
  onSubmit,
  question1,
  options1,
  question2,
  options2,
}: ComprehensionFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseComprehensionQuestionaireFormSchema),
    defaultValues: {
      answer: "",
    },
  });

  const handleSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <div className="space-y-5">
        <div>
          <div className="text-2xl font-bold">
            {question1 ? question1 : <Skeleton className="h-4 w-[200px]" />}
          </div>
          <F.Field
            name="answer"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {options1 ? (
                        options1.map((option, index) => (
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

        <div>
          <div className="text-2xl font-bold">
            {question2 ? question2 : <Skeleton className="h-4 w-[200px]" />}
          </div>
          <F.Field
            name="answer"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {options2 ? (
                        options2.map((option, index) => (
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
      </div>
      <div className="flex justify-end py-[15px]">
        <Button onClick={handleSubmit}>Next {">"}</Button>
      </div>
    </F.Root>
  );
};

export default ComprehensionQuestionaireForm;
