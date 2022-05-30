import { useState, useEffect } from 'react';
import axios from 'axios';

export function useRequest<DataType>(axiosParams, optionUpdate) {
  const [status, setStatus] = useState<{
    data: DataType | null;
    loading: boolean;
    error: any;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    setStatus({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const result = await axios.request(
        axiosParams,
      );
      setStatus({
        data: result.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setStatus({
        data: null,
        loading: false,
        error,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [optionUpdate]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!status.loading && !status.error) {
        fetchData();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [status.loading]);

  return { ...status };
}
