"use client";

import { useState, useEffect, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface CurvedTextProps extends PropsWithChildren {
  fontSize?: number;
  arcHeight: number;
  width?: number;
  letterSpacing?: number;
  className?: string;
}

export default function CurvedText({
  fontSize = 36,
  arcHeight,
  width = 500,
  letterSpacing = 2,
  className,
  children,
}: CurvedTextProps) {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    setId(`curved-text-path-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  const height = fontSize * 2 + arcHeight;
  const marginTop = arcHeight / 32;
  const marginBottom = arcHeight / 72;
  return (
    <div
      className="overflow-hidden"
      style={{
        marginTop: `-${marginTop}rem`,
        marginBottom: `-${marginBottom}rem`,
      }}
    >
      <div
        className={cn(
          "font-rye flex h-min w-full items-center justify-center",
          className,
        )}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <path
              id={id}
              d={`M 0,${height / 2 + arcHeight / 2} 
                Q ${width / 2},${height / 2 - arcHeight / 2} 
                  ${width},${height / 2 + arcHeight / 2}`}
              fill="transparent"
            />
          </defs>
          <text
            dy={fontSize / 3}
            style={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
            }}
            className="fill-foreground"
          >
            <textPath href={`#${id}`} textAnchor="middle" startOffset="50%">
              {children}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
