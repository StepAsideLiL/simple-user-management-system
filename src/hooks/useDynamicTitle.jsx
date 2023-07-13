import { useEffect } from "react";

const useDynamicTitle = (dynamicTitle) => {
  useEffect(() => {
    document.title = dynamicTitle;
  }, [dynamicTitle]);
};

export default useDynamicTitle;
