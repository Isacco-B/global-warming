import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title + " - Global Warming" || "Global Warming";
  }, [title]);
};

export default useTitle;
