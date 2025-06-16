import { useMutation } from "@tanstack/react-query";
import { initialUserData } from "@/api/type";
import { createStudentData } from "@/api/apiCalls";
import toast from "react-hot-toast";

export const useCreateInitialStudentData = () => {
  return useMutation({
    mutationFn: ({ studentData }: { studentData: initialUserData }) =>
      createStudentData(studentData),
    onSuccess: (data) => {
      toast.success("Created Student Data Successfully");
      return data;
    },
    onError: (error) => {
      toast.error("Failed to create student data \n" + error);
    },
  });
};
