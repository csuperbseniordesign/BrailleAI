import { requestRandomParagraph } from "@/api/apiCalls";
import { AccessToken } from "@/api/type";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useRequestRandomParagraph = () => {
  return useMutation({
    mutationFn: ({
      interest,
      mainlabel,
      sublabel,
      minAtos,
      maxAtos,
      ethnicity,
      gender,
      accessToken,
    }: {
      interest: string;
      mainlabel: string;  
      sublabel: string;
      minAtos: number;
      maxAtos: number;
      ethnicity: string;
      gender: string;
      accessToken: AccessToken;
    }) =>
      requestRandomParagraph(
        interest,
        mainlabel,
        sublabel,
        minAtos,
        maxAtos,
        ethnicity,
        gender,
        accessToken,
      ),
    onSuccess: (data) => {
      toast.success("Paragraph Fetched Successfully");
      return data;
    },
    onError: (error) => {
      toast.error("Failed to fetch paragraph \n" + error);
    },
  });
};
