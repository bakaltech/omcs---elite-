export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src="/logos/Logos/Omcs-logo.jpg"
      alt="OMCS logo"
      className={`${className} object-contain`}
    />
  );
}
