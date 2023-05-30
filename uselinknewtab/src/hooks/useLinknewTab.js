import { useEffect, useRef } from "react";

export default function useLinknewTab() {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      links.length > 0 &&
        links.forEach((link) => link.setAttribute("target", "_blank"));
    }
  }, []);
  return { contentRef };
}
