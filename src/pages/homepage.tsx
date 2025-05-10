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
              <CardTitle className="font-bold text-3xl">
                Student Demographic Form
              </CardTitle>
              <CardDescription className="text-2xl">
                Fill out the form to receive a personalized reading paragraph.
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
