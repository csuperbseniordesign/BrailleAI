import { requestParagraph } from "@/api/apiCalls";
import { FormattedParagraphResponse, ParagraphResponse } from "@/api/type";
import { QueryKeys } from "@/config/queryKeys";
import { FIVE_MINS_IN_MILLIS } from "@/util/measurements";
import { useQuery } from "@tanstack/react-query";

export function useRequestParagraph(paragraphId: string) {
    const query = useQuery<FormattedParagraphResponse>({
        queryKey: [QueryKeys.PARAGRAPH],
        queryFn: () => requestParagraph(paragraphId),
        staleTime: FIVE_MINS_IN_MILLIS,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      
    });

    return query;
}