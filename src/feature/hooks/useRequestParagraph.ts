import { requestParagraph } from "@/api/apiCalls"
import { AccessToken } from "@/api/type"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useRequestParagraph = () => {
    return useMutation({
        mutationFn: ({ interest, minAtos, maxAtos, accessToken }: { interest: string; minAtos: number; maxAtos: number; accessToken?: AccessToken }) => 
            requestParagraph(interest, minAtos, maxAtos, accessToken),
        onSuccess: (data) => {
            toast.success('Paragraph Fetched Successfully')
            return data
        },
        onError: (error) => {
            toast.error('Failed to fetch paragraph \n' + error)
        }
        
    })
}