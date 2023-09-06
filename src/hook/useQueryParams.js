import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getTitle = () => {
    return searchParams.get("title") || "";
  };

  const setTitle = (title) => {
    setSearchParams({ title });
  };

  return { getTitle, setTitle };
};
