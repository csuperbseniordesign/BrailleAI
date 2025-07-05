import { useMutation } from "@tanstack/react-query";
import { finalUserData } from "@/api/type";
import { addFinalStudentData } from "@/api/apiCalls";
import toast from "react-hot-toast";

export const useCreateFinalStudentData = () => {
  return useMutation({
    mutationFn: ({
      studentId,
      studentData,
    }: {
      studentId: number;
      studentData: finalUserData;
    }) => addFinalStudentData(studentId, studentData),
    onSuccess: (data) => {
      toast.success("Added Student Data Successfully");
      return data;
    },
    onError: (error) => {
      toast.error("Failed to add student data \n" + error);
    },
  });
};
