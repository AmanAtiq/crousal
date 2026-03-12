import { useEffect, useState } from "react";

type ContentMap = Record<string, string>;

const cache: Record<string, ContentMap> = {};

export function useContent(page: string): ContentMap {
  const [content, setContent] = useState<ContentMap>(cache[page] ?? {});

  useEffect(() => {
    if (cache[page]) {
      setContent(cache[page]);
      return;
    }
    fetch(`/api/content/${page}`)
      .then((r) => r.json())
      .then((data: ContentMap) => {
        cache[page] = data;
        setContent(data);
      })
      .catch(() => {/* use defaults on failure */});
  }, [page]);

  return content;
}
