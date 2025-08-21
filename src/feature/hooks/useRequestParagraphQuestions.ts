import { requestParagraph } from "@/api/apiCalls";
import { ParagraphQuestions } from "@/api/type";
import { QueryKeys } from "@/config/queryKeys";
import { FIVE_MINS_IN_MILLIS } from "@/util/measurements";
import { useQuery } from "@tanstack/react-query";

export function useRequestParagraphQuestions(
  paragraphId: string,
  selectedName: string,
  accessToken: string,
) {
  console.log("Hook called with:", { paragraphId, selectedName, accessToken });
  const query = useQuery<ParagraphQuestions>({
    queryKey: [QueryKeys.PARAGRAPH],
    queryFn: () => requestParagraph(paragraphId, selectedName, accessToken),
    staleTime: FIVE_MINS_IN_MILLIS,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
}
