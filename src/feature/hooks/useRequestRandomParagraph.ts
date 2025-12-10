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
    onError: (error: any) => {
       if (error?.response?.status === 404 || error?.status === 404) {
        toast.error(
          "No reading passage found for this interest and reading level.\nPlease try different options.",
          {
            duration: 5000, // Show for 5 seconds
          }
        );
      } 
      // Generic error for all other cases
      else {
        toast.error("Failed to fetch paragraph.\n" + (error?.message || error), {
          duration: 4000,
        });
      }
    },
  });
};
