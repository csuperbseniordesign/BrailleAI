import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import * as F from "@/components/forms";
import { looseCulturalFormSchema } from "./looseCulturalFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  storyQuestions,
  characterQuestions,
  experienceQuestion,
  endingQuestion,
} from "./formData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormValues = z.infer<typeof looseCulturalFormSchema>;
type CulturalFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseCulturalFormSchema>>;
};

const CulturalForm = ({ onSubmit }: CulturalFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseCulturalFormSchema),
    defaultValues: { feedback: "" },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      {/** Question set 1 */}
      <div>
        <hr className="solid" />
        <h1 className="py-[10px] text-2xl font-bold">About the Story </h1>
        <ul className="space-y-3 list-disc list-outside px-[10px]">
          {storyQuestions.map((question, index) => (
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

      {/** Question set 2 */}
      <div>
        <hr className="solid" />
        <h1 className="py-[10px] text-2xl font-bold">About the Character </h1>
        <ul className="space-y-3 list-disc list-outside">
          {characterQuestions.map((question, index) => (
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

      {/** Question set 3 */}
      <div>
        <ul className="space-y-3 list-disc list-outside">
          <hr className="solid" />
          <h1 className="py-[10px] text-2xl font-bold">Your Experience </h1>
          {experienceQuestion.map((question, index) => (
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

      {/** Question set 4 */}
      <div>
        <hr className="solid" />
        <h1 className="py-[10px] text-2xl font-bold">Overall</h1>
        <ul className="space-y-3 list-disc list-outside">
          {endingQuestion.map((question, index) => (
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
          name="feedback"
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

export default CulturalForm;
