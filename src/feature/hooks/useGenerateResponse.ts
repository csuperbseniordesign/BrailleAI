import { useState, useCallback } from "react";
import { generateResponse } from "@/api/apiCalls";

const useGenerateResponse = (prompt: string | null) => {
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchResponse = useCallback(async () => {
        if (!prompt) {
            setError("Invalid Prompt"); // Instead of returning a string, we just set an error
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const result = await generateResponse(prompt);
            setResponse(result.response);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    }, [prompt]);

   


    return { response, loading, error, fetchResponse};
};

export default useGenerateResponse;
