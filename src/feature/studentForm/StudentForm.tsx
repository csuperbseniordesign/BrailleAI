import { SubmitHandler, useForm } from "react-hook-form";
import { looseStudentFormSchema } from "./looseStudentFormSchema";
import { z } from "zod";
import * as F from "@/components/forms";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

type FormValues = z.infer<typeof looseStudentFormSchema>;
type StudentFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseStudentFormSchema>>;
};

const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseStudentFormSchema),
    defaultValues: {
      gradeLevel: "Grade 1",
      ethnicity: "Hispanic",
      gender: "male",
      paragraph: "",
    },
  });

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <div className="space-y-3">
        <div>
          <h4 className="text-lg py-[5px]">Grade Level</h4>
          <F.Field
            name="gradeLevel"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Grade 1" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grade 1">Grade 1</SelectItem>
                        <SelectItem value="Grade 2">Grade 2</SelectItem>
                        <SelectItem value="Grade 3">Grade 3</SelectItem>
                        <SelectItem value="Grade 4">Grade 4</SelectItem>
                        <SelectItem value="Grade 5">Grade 5</SelectItem>
                        <SelectItem value="Grade 6">Grade 6</SelectItem>
                        <SelectItem value="Grade 7">Grade 7</SelectItem>
                        <SelectItem value="Grade 8">Grade 8</SelectItem>
                        <SelectItem value="Grade 9">Grade 9</SelectItem>
                        <SelectItem value="Grade 10">Grade 10</SelectItem>
                        <SelectItem value="Grade 11">Grade 11</SelectItem>
                        <SelectItem value="Grade 12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <div>
          <h4 className="text-lg py-[5px]">Gender</h4>
          <F.Field
            name="gender"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Male" {...field} />
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
        </div>

        <div>
          <h4 className="text-lg py-[5px]">Ethnicity</h4>
          <F.Field
            name="ethnicity"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Hispanic" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hispanic">Hispanic</SelectItem>
                        <SelectItem value="non-hispanic">
                          Non-Hispanic
                        </SelectItem>
                        <SelectItem value="white">White</SelectItem>
                        <SelectItem value="black">
                          Black or African American
                        </SelectItem>
                        <SelectItem value="asian">Asian</SelectItem>
                        <SelectItem value="native-american">
                          Native American
                        </SelectItem>
                        <SelectItem value="pacific-islander">
                          Pacific Islander
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  }
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <div>
          <h4 className="text-lg py-[5px]">Copy/Paste Paragraph</h4>
          <F.Field
            name="paragraph"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Textarea
                      placeholder="paragraph"
                      {...field}
                      className="w-full"
                    />
                  }
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <Button onClick={handleFormSubmit}>Generate Paragraph</Button>
      </div>
    </F.Root>
  );
};

export default StudentForm;
