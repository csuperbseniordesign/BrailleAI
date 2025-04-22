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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createContext } from "@/util/createContext";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";
import { useRequestRandomParagraph } from "@/feature/hooks/useRequestRandomParagraph";
import { atosMapper, cleanText } from "@/util/utils";
import { Ethnicity, Gender, getNamesByEthnicityAndGender } from "@/util/names";

type FormValues = z.infer<typeof looseStudentFormSchema>;

const HomePage = () => {
  const navigate = useNavigate();
  const { mutate: requestRandomParagraph } = useRequestRandomParagraph();

  const handleSubmit = async (data: FormValues) => {
    const primaryInterest = data.primaryInterest;
    const gradeLevel = data.gradeLevel;
    const ethnicityOptions = data.ethnicity as Ethnicity;
    const gender = data.gender as Gender;
    const [minAtos, maxAtos] = atosMapper(gradeLevel);

    // Request random paragraph using random paragraph api
    requestRandomParagraph(
      {
        interest: primaryInterest,
        minAtos: minAtos,
        maxAtos: maxAtos,
        accessToken: "accessToken",
      },
      {
        // redirect to response page if paragraph is received
        onSuccess: (paragraphData) => {
          if (!paragraphData) {
            return;
          }
          const paragraph = cleanText(paragraphData!.paragraph);

          const selected_name = getNamesByEthnicityAndGender(
            ethnicityOptions,
            gender
          );
          const context = createContext(selected_name, gender);

          sessionStorage.setItem("context", context);
          sessionStorage.setItem("paragraph", paragraph);
          sessionStorage.setItem("paragraphId", "" + paragraphData!.id);
          sessionStorage.setItem("name", selected_name);

          navigate("/response");
        },
      }
    );
  };

  // Clears prompt data && query cache on initial render
  useEffect(() => {
    sessionStorage.removeItem("context");
    sessionStorage.removeItem("paragraph");
    sessionStorage.removeItem("paragraphId");
    sessionStorage.removeItem("name");

    queryClient.removeQueries({
      queryKey: [QueryKeys.RESPONSE],
    });
  }, []);

  return (
    <div>
      <div className="flex justify-end py-[10px] px-[10px]">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center h-[90vh]">
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
