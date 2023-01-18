import { useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState('');

  const fetchData = async (url, errMsg, config = {}) => {
    try {
      setIsloading(true);
      const res = await fetch(url, config);

      if (!res.ok) throw new Error(errMsg);

      if (res.status >= 400 || res === null) throw new Error(errMsg);

      const data = await res.json();

      setData(data);
    } catch (err) {
      setIsError(err.message);
    }

    setIsloading(false);
  };

  return { fetchData, data, isError, isLoading };
};

export default useHttp;
