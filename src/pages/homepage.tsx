import { z } from "zod";
import StudentForm from "../feature/studentForm/StudentForm";
import { looseStudentFormSchema } from "@/feature/studentForm/looseStudentFormSchema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createContext } from "@/util/createContext";
import { queryClient } from "@/config/queryClient";
import { QueryKeys } from "@/config/queryKeys";

type FormValues = z.infer<typeof looseStudentFormSchema>;

const HomePage = () => {
  const navigate = useNavigate();
  const handleSubmit = (data: FormValues) => {
    const prompt =
      createContext(data.ethnicity, data.gender, data.gradeLevel) +
      "\n" +
      data.paragraph;

    const primaryInterest = data.primaryInterest;

    sessionStorage.setItem("prompt", prompt);
    sessionStorage.setItem("interest", primaryInterest);
    navigate("/response");
  };

  // Clears prompt data && query cache on initial render
  useEffect(() => {
    sessionStorage.removeItem("prompt");
    sessionStorage.removeItem("interest");
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
            <CardFooter>
              <h3 className="text-xl">
                Note: Your data is not saved and will be deleted after the
                session.
              </h3>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
