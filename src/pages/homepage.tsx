import { z } from "zod";
import StudentForm from "../feature/studentForm/StudentForm";
import { looseStudentFormSchema } from "@/feature/studentForm/looseStudentFormSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect } from "react";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";
import { AtosMapper } from "@/util/utils";

// temporarily for test deployment

// import { getNamesByEthnicityAndGender } from "@/util/preselectNames";
// import { useRequestRandomParagraph } from "@/feature/hooks/useRequestRandomParagraph";
// import { createContext } from "@/util/createContext";
// import { useNavigate } from "react-router-dom";

type FormValues = z.infer<typeof looseStudentFormSchema>;

const HomePage = () => {
  //const navigate = useNavigate();
  //const { mutate: requestRandomParagraph } = useRequestRandomParagraph();

  const handleSubmit = async (data: FormValues) => {
    console.log("submit");
    // Retrieve necesary data from the form
    const primaryInterest = data.primaryInterest;
    const gradeLevel = data.gradeLevel;
    const ethnicityOptions = data.ethnicity;
    const gender = data.gender;
    const ethnicSubgroup = data.ethnicSubgroup;
    const readingLevel = data.readingLevel;
    const familyBackground = data.familyBackground;
    const birthPlace = data.birthPlace;

    // convert grade level into ATOS range for paragraph request
    const [minAtos, maxAtos] = AtosMapper(readingLevel);

    // temporarily for test deployment
    console.log(primaryInterest);
    console.log(gradeLevel);
    console.log(ethnicityOptions);
    console.log(gender);
    console.log(ethnicSubgroup);
    console.log(readingLevel);
    console.log(familyBackground);
    console.log(birthPlace);
    console.log(minAtos, maxAtos);

    // Request random paragraph using random paragraph api
    // requestRandomParagraph(
    //   {
    //     interest: primaryInterest,
    //     minAtos: minAtos,
    //     maxAtos: maxAtos,
    //     accessToken: "accessToken",
    //   },
    //   {
    //     // redirect to response page if paragraph is received
    //     onSuccess: (paragraphData) => {
    //       if (!paragraphData) {
    //         return;
    //       }

    //       // clean paragraph text to make it readable
    //       const paragraph = cleanText(paragraphData!.paragraph);

    //       // get preselected name based on ethnicity and gender
    //       const selected_name = getNamesByEthnicityAndGender(
    //         ethnicityOptions,
    //         gender,
    //         ethnicSubgroup
    //       );

    //       // creating instruction for the model when editing paragraph
    //       const context = createContext(selected_name, gender);

    //       // temporarily store user data in session storage, later stored in database after questionaire
    //       sessionStorage.setItem("context", context);
    //       sessionStorage.setItem("name", selected_name);
    //       sessionStorage.setItem("paragraph", paragraph);
    //       sessionStorage.setItem("paragraphId", "" + paragraphData!.id);

    //       navigate("/response");
    //     },
    //   }
    // );
  };

  // Clears prompt data && query cache on initial render
  useEffect(() => {
    sessionStorage.removeItem("context");
    sessionStorage.removeItem("paragraph");
    sessionStorage.removeItem("paragraphId");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("modifiedParagraph");

    queryClient.removeQueries({
      queryKey: [QueryKeys.RESPONSE],
    });
  }, []);

  return (
    <div>
      <div className="flex justify-end py-[5px] px-[5px]">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center overflow-y-auto py-[25px]">
        <div className="max-w-screen-md">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-3xl text-center underline">
                Student Demographic Survey
              </CardTitle>
              <CardDescription className="space-y-2 text-card-foreground">
                <h1 className="text-xl font-bold mt-[8px]">
                  Instruction for Teachers/Support Staff:
                </h1>

                <p className="text-lg">
                  This questionnaire is part of a reading assessment to help us
                  understand students' backgrounds, reading experiences and
                  interests. The answers will help us choose the right reading
                  materials for each student.
                </p>

                <ul className="list-disc list-outside pl-6 text-lg">
                  <li>
                    Please read each question out loud to the student clearly
                    and slowly
                  </li>
                  <li>
                    If the student needs help understanding a question, you may
                    explain it using simple, age-appropriate words, but do not
                    guide them to any specific answer.
                  </li>
                  <li>
                    If the student prefers to respond verbally, you may select
                    or enter the answer on their behalf.
                  </li>
                  <li>
                    Ensure the student knows there are no “right” or “wrong”
                    answers—just honest ones.
                  </li>
                  <li>
                    Take breaks as needed. Some students may need more time.
                  </li>
                </ul>

                <p className="text-lg">
                  Thank you so much for your kind support!
                </p>

                <h1 className="text-xl font-bold py-[5px]">
                  Instruction for students:
                </h1>

                <p className="text-lg">
                  Hi! We want to learn more about you so we can pick the best
                  reading for you. This is not a test. There are no right or
                  wrong answers. Just tell us what's true for you. If you don't
                  know an answer or don't want to answer, that's okay—just say
                  so. You can ask your teacher or helper to read the questions
                  out loud or help you answer them.
                </p>

                <p className="text-lg ">Let's get started when you're ready!</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StudentForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
