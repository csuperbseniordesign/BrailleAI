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
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  birthPlace,
  ethnicityOptions,
  ethnicSubgroupOptions,
  hispanicLatinoOptions,
  genderOptions,
  gradeLevelOptions,
  languages,
  primaryInterestOptions,
  getMainLabels,
  getSubLabels,
  regionOptions,
  vision,
  preferredMedia,
  appAccess,
  digitalTextAccess,
} from "./studentFormOptions";
import { Input } from "@/components/ui/input";

type FormValues = z.infer<typeof looseStudentFormSchema>;
type StudentFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof looseStudentFormSchema>>;
  defaultValues?: Partial<FormValues>; // Add this line
};

/**
 * StudentForm Component
 * This component renders a student demographic form that collects information
 * about a student's grade level, gender, ethnicity, and primary interest.
 * The collected data is used to determine the appropriate paragraph to
 * generate for a specific student.
 */
const StudentForm = ({ onSubmit, defaultValues }: StudentFormProps) => {
  // Add defaultValues here
  // Create the base default values
  const baseDefaults: FormValues = {
    code_id: "",
    gradeLevel: gradeLevelOptions[0],
    readingLevel: gradeLevelOptions[0],
    ethnicity: ethnicityOptions[0],
    ethnicSubgroup: ethnicSubgroupOptions[0],
    gender: genderOptions[0],
    birthPlace: birthPlace[0],
    region: regionOptions[1],
    year: "",
    country: "",
    languages: languages[1],
    otherLanguage: "",
    primaryInterest: primaryInterestOptions[0],
    mainlabel: getMainLabels(primaryInterestOptions[0])[0],
    sublabel: getSubLabels(
      primaryInterestOptions[0],
      getMainLabels(primaryInterestOptions[0])[0]
    )[0],
    hispanicLatino: hispanicLatinoOptions[0],
    vision: vision[0],
    preferredMedia: preferredMedia[0],
    appAccess: appAccess[0],
    digitalTextAccess: digitalTextAccess[1],
    otherAppAccess: "",
    otherDigitalAccess: "",
  };

  // Merge base defaults with provided defaults
  const mergedDefaults: FormValues = {
    ...baseDefaults,
    ...defaultValues, // This will override base defaults with any provided values
  };

  const formMethods = useForm<FormValues>({
    resolver: zodResolver(looseStudentFormSchema),
    defaultValues: mergedDefaults, // Use merged defaults instead of baseDefaults
  });

  const interest = formMethods.watch("primaryInterest");
  const mainlabel = formMethods.watch("mainlabel");

  const mainLabelOptions = getMainLabels(interest as any);
  const subLabelOptions = getSubLabels(
    interest as any,
    mainlabel || mainLabelOptions[0]
  );

  useEffect(() => {
    const nextMain = mainLabelOptions[0];
    formMethods.setValue("mainlabel", nextMain);
    formMethods.setValue(
      "sublabel",
      getSubLabels(interest as any, nextMain)[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interest]);

  useEffect(() => {
    const nextSub = getSubLabels(
      interest as any,
      mainlabel || mainLabelOptions[0]
    )[0];
    formMethods.setValue("sublabel", nextSub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainlabel]);

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <F.Root formMethods={formMethods}>
      <div className="space-y-3">
        <div>
          <h4 className="text-lg py-[5px]">Please enter your ID</h4>
          <F.Field
            name="code_id"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      type="string"
                    />
                  }
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <div>
          <h4 className="text-lg py-[5px]">What grade are you in now?</h4>
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
          <h4 className="text-lg py-[5px]">What is your reading level?</h4>
          <F.Field
            name="readingLevel"
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
          <h4 className="text-lg py-[5px]">
            What year were you born? Please type the year using the keyboard.
          </h4>
          <F.Field
            name="year"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  {
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      type="number"
                    />
                  }
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <div>
          <h4 className="text-lg py-[5px]">What is your gender?</h4>
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
          <h4 className="text-lg py-[5px]">
            Do you identify as Hispanic, Latino or of Spanish origin?
          </h4>
          <F.Field
            name="hispanicLatino"
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
                        {hispanicLatinoOptions.map((background, index) => (
                          <SelectItem value={background} key={index}>
                            {background}
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
          <h4 className="text-lg py-[5px]">
            Which race or background feels most like you?
          </h4>
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

        {formMethods.watch("ethnicity") == "Asian" && (
          <div>
            <h4 className="text-lg py-[5px]">What is your ethnic subgroup?</h4>
            <F.Field
              name="ethnicSubgroup"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    {
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent>
                          {ethnicSubgroupOptions.map(
                            (ethnicSubgroup, index) => (
                              <SelectItem value={ethnicSubgroup} key={index}>
                                {ethnicSubgroup}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    }
                  </F.Control>
                  <F.Message />
                </F.Item>
              )}
            />
          </div>
        )}

        <div>
          <h4 className="text-lg py-[5px]">Where did you grow up?</h4>
          <F.Field
            name="birthPlace"
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
                        {birthPlace.map((birthPlace, index) => (
                          <SelectItem value={birthPlace} key={index}>
                            {birthPlace}
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

        {formMethods.watch("birthPlace") == "United States" && (
          <div>
            <h4 className="text-lg py-[5px]">
              What state or place in the U.S. did you grow up in most of the
              time?{" "}
              {/* <a
                href="https://www.aph.org/educational-resources/outreach/regional-support/"
                className="text-blue-500 underline"
              >
                Learn More
              </a> */}
            </h4>

            {/* <img
              src="/outreach-map-all.jpg"
              className="flex w-[700px] h-[400px] justify-center mb-[10px]"
              alt="Map of the United State with regions by the American Printing House"
            /> */}

            <F.Field
              name="region"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    {
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                        <SelectContent>
                          {regionOptions.map((region, index) => (
                            <SelectItem value={region} key={index}>
                              {region}
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
        )}

        {formMethods.watch("birthPlace") == "Outside of the United States" && (
          <div>
            <h4 className="text-lg py-[5px]">
              What country did you grow up in most of the time?
            </h4>
            <F.Field
              name="country"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    <Input value={field.value} onChange={field.onChange} />
                  </F.Control>
                  <F.Message />
                </F.Item>
              )}
            />
          </div>
        )}

        <div>
          <h4 className="text-lg py-[5px]">
            What language do you speak or understand at home?
          </h4>
          <F.Field
            name="languages"
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
                        {languages.map((language, index) => (
                          <SelectItem value={language} key={index}>
                            {language}
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

        {formMethods.watch("languages") == "Other (please specify)" && (
          <div>
            <h4 className="text-lg py-[5px]">
              What language do you speak or understand at home?
            </h4>
            <F.Field
              name="otherLanguage"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    <Input value={field.value} onChange={field.onChange} />
                  </F.Control>
                  <F.Message />
                </F.Item>
              )}
            />
          </div>
        )}

        <div>
          <h4 className="text-lg py-[5px]">
            How would you describe your vision?
          </h4>
          <F.Field
            name="vision"
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
                        {vision.map((vision, index) => (
                          <SelectItem value={vision} key={index}>
                            {vision}
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
          <h4 className="text-lg py-[5px]">
            Tell us about your preferred learning media.
          </h4>
          <F.Field
            name="preferredMedia"
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
                        {preferredMedia.map((preferredMedia, index) => (
                          <SelectItem value={preferredMedia} key={index}>
                            {preferredMedia}
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
          <h4 className="text-lg py-[5px]">
            Tell us about how you are accessing the web-app.
          </h4>
          <F.Field
            name="appAccess"
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
                        {appAccess.map((appAccess, index) => (
                          <SelectItem value={appAccess} key={index}>
                            {appAccess}
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

        {formMethods.watch("appAccess") == "Other (please specify)" && (
          <div>
            <h4 className="text-lg py-[5px]">
              Tell us about how you are accessing the web-app.
            </h4>
            <F.Field
              name="otherAppAccess"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    <Input value={field.value} onChange={field.onChange} />
                  </F.Control>
                  <F.Message />
                </F.Item>
              )}
            />
          </div>
        )}

        <div>
          <h4 className="text-lg py-[5px]">
            Tell us about any access technology you use to access digital text.
          </h4>
          <F.Field
            name="digitalTextAccess"
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
                        {digitalTextAccess.map((digitalTextAccess, index) => (
                          <SelectItem value={digitalTextAccess} key={index}>
                            {digitalTextAccess}
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

        {formMethods.watch("digitalTextAccess") == "Other (please specify)" && (
          <div>
            <h4 className="text-lg py-[5px]">
              Tell us about any access technology you use to access digital
              text.
            </h4>
            <F.Field
              name="otherDigitalAccess"
              control={formMethods.control}
              render={({ field }) => (
                <F.Item>
                  <F.Control>
                    <Input value={field.value} onChange={field.onChange} />
                  </F.Control>
                  <F.Message />
                </F.Item>
              )}
            />
          </div>
        )}

        <div>
          <h4 className="text-lg py-[5px]">
            What category are you interested in?
          </h4>
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
        {/* Main label (dependent on primaryInterest) */}
        <div>
          <h4 className="text-lg py-[5px]">Pick a main label</h4>
          <F.Field
            name="mainlabel"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder={field.value} />
                    </SelectTrigger>
                    <SelectContent>
                      {mainLabelOptions.map((label) => (
                        <SelectItem value={label} key={label}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        {/* Sub label (dependent on primaryInterest + mainlabel) */}
        <div>
          <h4 className="text-lg py-[5px]">Pick a sub label</h4>
          <F.Field
            name="sublabel"
            control={formMethods.control}
            render={({ field }) => (
              <F.Item>
                <F.Control>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder={field.value} />
                    </SelectTrigger>
                    <SelectContent>
                      {subLabelOptions.map((label) => (
                        <SelectItem value={label} key={label}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </F.Control>
                <F.Message />
              </F.Item>
            )}
          />
        </div>

        <div className="flex justify-end w-full">
          <Button
            onClick={handleFormSubmit}
            className="disabled:bg-gray-400 text-white text-xl font-bold py-4 px-8 h-auto"
          >
            Submit
          </Button>{" "}
        </div>
      </div>
    </F.Root>
  );
};

export default StudentForm;
