import { useEffect } from "react";

interface UseObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

interface UseObserverProps {
  targetRefs: React.RefObject<Element>[];
  callback: (entries: IntersectionObserverEntry[]) => void;
  options?: UseObserverOptions;
}

const useObservers = ({
  targetRefs,
  callback,
  options = { root: null, rootMargin: "0px", threshold: 0.5 },
}: UseObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    targetRefs.forEach((targetRef) => {
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
    });

    return () => {
      targetRefs.forEach((targetRef) => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      });
    };
  }, [targetRefs, callback, options]);
};

export default useObservers;
