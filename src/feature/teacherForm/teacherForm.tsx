import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { looseTeacherFormSchema } from "./loseTeacherFormSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import * as F from "@/components/forms";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { teacherQuestions } from "./formData";
import { Input } from "@/components/ui/input";

type FormValues = z.infer<typeof looseTeacherFormSchema>;
type TeacherFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseTeacherFormSchema>>;
};

const TeacherForm = ({ onSubmit }: TeacherFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseTeacherFormSchema),
    defaultValues: { blank: "" },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      {/** Question set 1 */}
      <div>
        <ul className="space-y-3 list-disc list-outside px-[10px]">
          {teacherQuestions.map((question, index) => (
            <li key={index}>
              <h4 className="text-lg py-[5px] w-[600px]">
                {question.question}
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
                          key={question.id}
                        >
                          <div className="flex item-center space-x-20 py-[15px] text-center">
                            <div className="flex flex-row items-center gap-x-2">
                              <RadioGroupItem value="1" id="r1" />
                              <p>Strongly Disagree</p>
                            </div>

                            <div className="flex flex-row items-center gap-x-2">
                              <RadioGroupItem value="2" id="r2" />
                              <p>Disagree</p>
                            </div>

                            <div className="flex flex-row items-center gap-x-2">
                              <RadioGroupItem value="3" id="r3" />
                              <p>Agree</p>
                            </div>

                            <div className="flex flex-row items-center gap-x-2">
                              <RadioGroupItem value="4" id="r4" />
                              <p>Strongly Agree</p>
                            </div>
                          </div>
                        </RadioGroup>
                      }
                    </F.Control>
                  </F.Item>
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg py-[5px]">
          Do you want to tell use anything more about how you felt about this
          passage?
        </h4>
        <F.Field
          name="blank"
          control={formMethods.control}
          render={({ field }) => (
            <F.Item>
              <F.Control>
                {<Input value={field.value} onChange={field.onChange} />}
              </F.Control>
              <F.Message />
            </F.Item>
          )}
        />
      </div>

      <div className="flex justify-end py-[15px]">
        <Button onClick={handleFormSubmit}>Submit</Button>
      </div>
    </F.Root>
  );
};

export default TeacherForm;
