import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, highlight, className, alignment = "left" }: SectionHeadingProps) {
  return (
    <h2 className={cn(
      "text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-10 uppercase",
      alignment === "center" && "text-center",
      className
    )}>
      {title} <span className="text-gradient">{highlight}</span>
    </h2>
  );
}
