"use client";

export default function ScrollStory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {children}
    </div>
  );
}
