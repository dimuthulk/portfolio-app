import { Icon } from "@iconify/react";

const TechBadge = ({
  icon,
  name,
  colorClass,
}: {
  icon: string;
  name: string;
  colorClass?: string;
}) => (
  <span className="inline-flex items-center gap-1.5 px-1 py-0.5 rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-zinc-900/50 text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm transition-all hover:scale-105 hover:bg-gray-100 dark:hover:bg-zinc-800">
    <Icon icon={icon} className={`text-base ${colorClass || ""}`} />
    {name}
  </span>
);

export default TechBadge;
