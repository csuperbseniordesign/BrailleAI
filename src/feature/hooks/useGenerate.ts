
import { generateResponse } from '@/api/apiCalls'
import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

export const useGenerate = () => {
   return useMutation({
    mutationFn: (prompt : string) => generateResponse(prompt),
    onSuccess: (data) => {
        toast.success('Reloading paragraph...')
        return data.response
    },
    onError: (error) => {
        toast.error('Failed to reload \n' + error)
    }
   })
}

