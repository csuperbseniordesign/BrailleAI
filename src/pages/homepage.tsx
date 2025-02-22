import { z } from "zod";
import StudentForm from "../feature/studentForm/StudentForm";
import { looseStudentFormSchema } from "@/feature/studentForm/looseStudentFormSchema";

type FormValues = z.infer<typeof looseStudentFormSchema>;

const HomePage = () => {
  const handleSubmit = (data: FormValues) => {
    console.log(data);
  };
  return <StudentForm onSubmit={handleSubmit} />;
};

export default HomePage;
