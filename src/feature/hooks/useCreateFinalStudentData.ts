import { useMutation } from "@tanstack/react-query";
import { finalUserData } from "@/api/type";
import { addFinalStudentData } from "@/api/apiCalls";

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
  });
};
