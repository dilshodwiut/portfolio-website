// import { useCallback, useRef } from "react";

// export default function useIntersectionObserver() {
//   const ref = useRef(null);

//   return [
//     ref,
//     useCallback(
//       (
//         ref: React.RefObject<HTMLElement>,
//         callback: IntersectionObserverCallback
//       ) => {
//         const observer = new IntersectionObserver(callback, {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         });
//         observer.observe(ref.current);
//         return () => observer.unobserve(ref.current);
//       },
//       []
//     ),
//   ];
// }

// import { useCallback } from "react";

// export default function useIntersectionObserver(
//   ref: React.RefObject<HTMLElement>,
//   callback: () => void
// ) {

//   return useCallback(
//     (
//       ref: React.RefObject<HTMLElement>,
//       callback: IntersectionObserverCallback
//     ) => {
//       const observer = new IntersectionObserver(callback, {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5,
//       });
//       observer.observe(ref.current);
//       return () => observer.unobserve(ref.current);
//     },
//     []
//   );
// }

import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver;
