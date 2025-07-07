'use client';

import { useState, FormEvent } from "react";
import axios from "axios";

export const useFakeCheck = (onResults: (result: any) => void) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        const response = await axios.post(
            process.env.NEXT_PUBLIC_ENDPOINT_CHECK as string, 
            { url }
        );
        onResults(response.data);
    } catch (err: any) {
        setError(err.response?.data?.error || 'Erro ao verificar a notícia');
    } finally {
        setLoading(false);
    }
  };

  return {
    url,
    setUrl,
    loading,
    error,
    handleSubmit,
  };
};
