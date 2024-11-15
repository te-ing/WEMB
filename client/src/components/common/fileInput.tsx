import * as React from "react";

import { cn } from "@/lib/utils";

const FileInput = React.forwardRef<HTMLInputElement, Omit<React.ComponentProps<"input">, "type">>(
  ({ className, value, placeholder, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    return (
      <div ref={ref}>
        <button
          className={cn(
            "flex items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          onClick={handleButtonClick}
        >
          {value || placeholder || "클릭하여 파일 선택"}
        </button>
        <input ref={inputRef} type={"file"} {...props} className="hidden" />
      </div>
    );
  },
);
FileInput.displayName = "FileInput";

export { FileInput };
