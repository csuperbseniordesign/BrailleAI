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
import {
  ethnicityOptions,
  genderOptions,
  gradeLevelOptions,
  primaryInterestOptions,
} from "./studentFormOptions";

type FormValues = z.infer<typeof looseStudentFormSchema>;
type StudentFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseStudentFormSchema>>;
};

const StudentForm = ({ onSubmit }: StudentFormProps) => {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseStudentFormSchema),
    defaultValues: {
      gradeLevel: gradeLevelOptions[0],
      ethnicity: ethnicityOptions[0],
      gender: genderOptions[0],
      primaryInterest: primaryInterestOptions[0],
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
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder={field.value} />
                      </SelectTrigger>
                      <SelectContent>
                        {gradeLevelOptions.map((gradeLevel, index) => (
                          <SelectItem value={gradeLevel} key={index}>
                            {gradeLevel}
                          </SelectItem>
                        ))}
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
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder={field.value} />
                      </SelectTrigger>
                      <SelectContent>
                        {genderOptions.map((gender, index) => (
                          <SelectItem value={gender} key={index}>
                            {gender}
                          </SelectItem>
                        ))}
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
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder={field.value} />
                      </SelectTrigger>
                      <SelectContent>
                        {ethnicityOptions.map((ethnicity, index) => (
                          <SelectItem value={ethnicity} key={index}>
                            {ethnicity}
                          </SelectItem>
                        ))}
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
          <h4 className="text-lg py-[5px]">Interest</h4>
          <F.Field
            name="primaryInterest"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder={field.value} />
                      </SelectTrigger>
                      <SelectContent>
                        {primaryInterestOptions.map((interest, index) => (
                          <SelectItem value={interest} key={index}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
