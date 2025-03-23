import { useQuery } from "@tanstack/react-query";
import { generateResponse } from "@/api/apiCalls";
import { DeepSeekResponse } from "@/api/type";
import { QueryKeys } from "@/config/queryKeys";
import { FIVE_MINS_IN_MILLIS } from "@/util/measurements";

export function useGenerateResponse(prompt: string) {
  const query = useQuery<DeepSeekResponse>({
    queryKey: [QueryKeys.RESPONSE],
    queryFn: () => generateResponse(prompt),
    staleTime: FIVE_MINS_IN_MILLIS,
    
  });

  return query;
}