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
import { Textarea } from "@/components/ui/textarea";

type FormValues = z.infer<typeof looseCulturalFormSchema>;
type CulturalFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseCulturalFormSchema>>;
};

// Reusable radio options component
const RadioOptions = ({
  field,
  questionId,
}: {
  field: any;
  questionId: string;
}) => (
  <RadioGroup
    value={field.value}
    onValueChange={field.onChange}
    key={questionId}
  >
    <div className="flex flex-wrap items-center gap-4 py-4">
      <div className="flex flex-row items-center gap-x-2 min-w-fit">
        <RadioGroupItem value="0" id={`${questionId}-r0`} />
        <label
          htmlFor={`${questionId}-r0`}
          className="text-sm whitespace-nowrap cursor-pointer"
        >
          Does Not Apply
        </label>
      </div>

      <div className="flex flex-row items-center gap-x-2 min-w-fit">
        <RadioGroupItem value="1" id={`${questionId}-r1`} />
        <label
          htmlFor={`${questionId}-r1`}
          className="text-sm whitespace-nowrap cursor-pointer"
        >
          Strongly Disagree
        </label>
      </div>

      <div className="flex flex-row items-center gap-x-2 min-w-fit">
        <RadioGroupItem value="2" id={`${questionId}-r2`} />
        <label
          htmlFor={`${questionId}-r2`}
          className="text-sm whitespace-nowrap cursor-pointer"
        >
          Disagree
        </label>
      </div>

      <div className="flex flex-row items-center gap-x-2 min-w-fit">
        <RadioGroupItem value="3" id={`${questionId}-r3`} />
        <label
          htmlFor={`${questionId}-r3`}
          className="text-sm whitespace-nowrap cursor-pointer"
        >
          Agree
        </label>
      </div>

      <div className="flex flex-row items-center gap-x-2 min-w-fit">
        <RadioGroupItem value="4" id={`${questionId}-r4`} />
        <label
          htmlFor={`${questionId}-r4`}
          className="text-sm whitespace-nowrap cursor-pointer"
        >
          Strongly Agree
        </label>
      </div>
    </div>
  </RadioGroup>
);

const CulturalForm = ({ onSubmit }: CulturalFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseCulturalFormSchema),
    defaultValues: { feedback: "" },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      {/** Question set 1 */}
      <div className="mb-8">
        <hr className="solid mb-4" />
        <h1 className="py-[10px] text-2xl font-bold">About the Story</h1>
        <ul className="space-y-6 list-none px-0">
          {storyQuestions.map((question, index) => (
            <li key={index}>
              <h4 className="text-lg py-[5px] max-w-3xl">
                {question.question}
              </h4>
              <F.Field
                name={question.id as keyof FormValues}
                control={formMethods.control}
                render={({ field }) => (
                  <F.Item>
                    <F.Control>
                      <RadioOptions field={field} questionId={question.id} />
                    </F.Control>
                  </F.Item>
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {/** Question set 2 */}
      <div className="mb-8">
        <hr className="solid mb-4" />
        <h1 className="py-[10px] text-2xl font-bold">About the Character</h1>
        <ul className="space-y-6 list-none px-0">
          {characterQuestions.map((question, index) => (
            <li key={index}>
              <h4 className="text-lg py-[5px] max-w-3xl">
                {question.question}
              </h4>
              <F.Field
                name={question.id as keyof FormValues}
                control={formMethods.control}
                render={({ field }) => (
                  <F.Item>
                    <F.Control>
                      <RadioOptions field={field} questionId={question.id} />
                    </F.Control>
                  </F.Item>
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {/** Question set 3 */}
      <div className="mb-8">
        <hr className="solid mb-4" />
        <h1 className="py-[10px] text-2xl font-bold">Your Experience</h1>
        <ul className="space-y-6 list-none px-0">
          {experienceQuestion.map((question, index) => (
            <li key={index}>
              <h4 className="text-lg py-[5px] max-w-3xl">
                {question.question}
              </h4>
              <F.Field
                name={question.id as keyof FormValues}
                control={formMethods.control}
                render={({ field }) => (
                  <F.Item>
                    <F.Control>
                      <RadioOptions field={field} questionId={question.id} />
                    </F.Control>
                  </F.Item>
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      {/** Question set 4 */}
      <div className="mb-8">
        <hr className="solid mb-4" />
        <h1 className="py-[10px] text-2xl font-bold">Overall</h1>
        <ul className="space-y-6 list-none px-0">
          {endingQuestion.map((question, index) => (
            <li key={index}>
              <h4 className="text-lg py-[5px] max-w-3xl">
                {question.question}
              </h4>
              <F.Field
                name={question.id as keyof FormValues}
                control={formMethods.control}
                render={({ field }) => (
                  <F.Item>
                    <F.Control>
                      <RadioOptions field={field} questionId={question.id} />
                    </F.Control>
                  </F.Item>
                )}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-lg py-[5px]">
          Do you want to tell us anything more about how you felt about this
          passage?
        </h4>
        <F.Field
          name="feedback"
          control={formMethods.control}
          render={({ field }) => (
            <F.Item>
              <F.Control>
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Optional feedback…"
                  className="min-h-[120px] resize-y text-base md:text-base"
                  rows={6}
                />
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
