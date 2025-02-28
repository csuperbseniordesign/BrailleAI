import { useState, useCallback, useRef } from "react";
import { generateResponse } from "@/api/apiCalls";

const useGenerateResponse = (prompt: string | null, ref: boolean) => {
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(ref); // Prevents double fetching in Strict Mode

    const fetchResponse = useCallback(async () => {
        if (!prompt) {
            setError("Invalid Prompt");
            return;
        }

        if (hasFetched.current) return; // Prevent duplicate request
        hasFetched.current = true;

        setLoading(true);
        setResponse(null); // Reset previous response
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

    return { response, loading, error, fetchResponse };
};

export default useGenerateResponse;
