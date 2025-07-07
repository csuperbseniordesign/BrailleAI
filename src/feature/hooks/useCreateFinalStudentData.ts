import { useMutation } from "@tanstack/react-query";
import { finalUserData } from "@/api/type";
import { addFinalStudentData } from "@/api/apiCalls";
import toast from "react-hot-toast";

export const useCreateFinalStudentData = () => {
  return useMutation({
    mutationFn: ({
      studentId,
      studentData,
      accessToken,
    }: {
      studentId: number;
      studentData: finalUserData;
      accessToken: string;
    }) => addFinalStudentData(studentId, studentData, accessToken),
    onSuccess: (data) => {
      toast.success("Added Student Data Successfully");
      return data;
    },
    onError: (error) => {
      toast.error("Failed to add student data \n" + error);
    },
  });
};
