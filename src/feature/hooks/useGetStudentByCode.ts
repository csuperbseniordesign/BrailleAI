import { useQuery } from "@tanstack/react-query";
import { getStudentByCode } from "@/api/apiCalls";
import { QueryKeys } from "@/config/queryKeys";
import { access } from "fs";

export function useGetStudentByCode(codeId: string | null, accessToken: string) {
  return useQuery({
    queryKey: [QueryKeys.STUDENT_BY_CODE, accessToken],
    queryFn: () => getStudentByCode(codeId!, accessToken),
    enabled: !!codeId && codeId.length > 0,
    retry: false,
  });
}