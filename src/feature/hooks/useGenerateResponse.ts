import { useQuery } from "@tanstack/react-query";
import { generateResponse } from "@/api/apiCalls";
import { DeepSeekResponse } from "@/api/type";
import { QueryKeys } from "@/config/queryKeys";
import { FIVE_MINS_IN_MILLIS } from "@/util/measurements";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthHeader } from "@/api/type";

export function useGenerateResponse(context: string, paragraph: string, accessToken: string) {
  // const apiKey = import.meta.env.VITE_API_KEY;

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  });

  const query = useQuery<DeepSeekResponse>({
    queryKey: [QueryKeys.RESPONSE],
    queryFn: () => generateResponse(context, paragraph, accessToken),
    staleTime: FIVE_MINS_IN_MILLIS,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    gcTime: 0,
  });

  return query;
}
