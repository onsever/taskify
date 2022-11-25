import { useState } from 'react';
import { api } from '../api/api';

const useDelete = () => {
  const [loading, setIsLoading] = useState < boolean > (false);
  const [loaded, setIsLoaded] = useState < boolean > (false);
  const [result, setResult] = useState < any > (null);
  const [error, setError] = useState < any > (null);

  const doDelete = async (path, body, headers) => {
    setIsLoading(true);
    setIsLoaded(false);
    setResult(null);
    try {
      const result = await api.delete(path, body, {
        headers: headers
      });
      setIsLoading(false);
      setResult(result);
      setIsLoaded(true);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      setIsLoaded(true);
    }
  }
  return { loading, result, error, loaded, doDelete }
}

export { useDelete };