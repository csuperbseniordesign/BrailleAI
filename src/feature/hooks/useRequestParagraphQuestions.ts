import { requestParagraph } from "@/api/apiCalls";
import { ParagraphQuestions } from "@/api/type";
import { QueryKeys } from "@/config/queryKeys";
import { FIVE_MINS_IN_MILLIS } from "@/util/measurements";
import { useQuery } from "@tanstack/react-query";

export function useRequestParagraphQuestions(paragraphId: string, selectedName: string) {
    const query = useQuery<ParagraphQuestions>({
        queryKey: [QueryKeys.PARAGRAPH],
        queryFn: () => requestParagraph(paragraphId, selectedName),
        staleTime: FIVE_MINS_IN_MILLIS,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      
    });

    return query;
}