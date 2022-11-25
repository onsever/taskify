import { useState } from 'react';
import { api } from '../api/api';

const useFetch = () => {
  const [loading, setIsLoading] = useState(false);
  const [loaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetch = async (path, headers) => {
    setIsLoading(true);
    setIsLoaded(false);
    setResult(null);
    try {
      const result = await api.get(path, {
        headers: headers
      });
      setResult(result);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      setIsLoaded(true);
    }
  }

  const resetResult = () => {
    setResult([]);
  }

  const setLoader = (flag) => {
    setIsLoading(flag);
  }

  return { loading, result, error, loaded, fetch, resetResult, setLoader }
}

export { useFetch };