import { useMutation } from "@tanstack/react-query";
import { ModifiedParagraphCreate, ModifiedParagraphResponse } from "@/api/type";
import { createModifiedParagraph } from "@/api/apiCalls";
import toast from "react-hot-toast";

export const useCreateModifiedParagraph = () => {
  return useMutation({
    mutationFn: ({
      modifiedParagraph,
      accessToken,
    }: {
      modifiedParagraph: ModifiedParagraphCreate;
      accessToken: string;
    }) => createModifiedParagraph(modifiedParagraph, accessToken),
    onSuccess: (data: ModifiedParagraphResponse) => {
      toast.success("Saved modified paragraph successfully");
      return data;
    },
    onError: (error) => {
      toast.error("Failed to save modified paragraph\n" + error);
    },
  });
};
