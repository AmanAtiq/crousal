import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RichTextContentProps = {
  content: string;
  className?: string;
  style?: CSSProperties;
};

export default function RichTextContent({
  content,
  className,
  style,
}: RichTextContentProps) {
  return (
    <div
      className={cn(
        "[&_p]:m-0 [&_ul]:m-0 [&_ul]:pl-5 [&_li]:m-0",
        className,
      )}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}