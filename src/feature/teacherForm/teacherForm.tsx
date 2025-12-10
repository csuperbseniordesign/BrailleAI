import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { looseTeacherFormSchema } from "./loseTeacherFormSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import * as F from "@/components/forms";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { teacherQuestions } from "./formData";
import { Textarea } from "@/components/ui/textarea";

type FormValues = z.infer<typeof looseTeacherFormSchema>;
type TeacherFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseTeacherFormSchema>>;
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

const TeacherForm = ({ onSubmit }: TeacherFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseTeacherFormSchema),
    defaultValues: { teacher_feedback: "" },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      {/** Question set 1 */}
      <div>
        <ul className="space-y-6 list-none px-0">
          {teacherQuestions.map((question, index) => (
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
          name="teacher_feedback"
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

export default TeacherForm;
