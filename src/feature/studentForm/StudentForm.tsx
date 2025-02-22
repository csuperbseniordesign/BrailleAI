import { SubmitHandler, useForm } from "react-hook-form";
import { looseStudentFormSchema } from "./looseStudentFormSchema";
import { z } from "zod";
import * as F from "@/components/forms";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof looseStudentFormSchema>;
type StudentFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseStudentFormSchema>>;
};

const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseStudentFormSchema),
    defaultValues: {
      gradeLevel: "1st Grade",
      ethnicity: "Hispanic",
      gender: "male",
    },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <F.Field
        name="gradeLevel"
        control={formMethods.control}
        render={({ field }) => (
          <F.Item>
            <F.Control>
              {<Input placeholder="gradeLevel" {...field} className="w-full" />}
            </F.Control>
            <F.Message />
          </F.Item>
        )}
      />
      <F.Field
        name="gender"
        control={formMethods.control}
        render={({ field }) => (
          <F.Item>
            <F.Control>
              {
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Gender" {...field} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              }
            </F.Control>
            <F.Message />
          </F.Item>
        )}
      />
      <Button onClick={handleFormSubmit}>Submit</Button>
    </F.Root>
  );
};

export default StudentForm;
