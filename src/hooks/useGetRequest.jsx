import { useQuery } from "@tanstack/react-query";

const useGetRequest = (url) => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const {
    isLoading,
    error,
    data: postData,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  return { postData, isLoading, error };
};

export default useGetRequest;
