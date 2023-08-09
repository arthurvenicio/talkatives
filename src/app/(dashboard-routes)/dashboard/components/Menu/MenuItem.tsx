import Link from 'next/link';

interface MenuItemProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  hasSubmenu?: boolean;
}

export const MenuItem = ({
  name,
  url,
  icon,
  children,
  hasSubmenu = false
}: MenuItemProps) => {
  return (
    <Link
      className="flex flex-row items-center gap-1 shadow-inner w-full h-10 px-4 bg-primary-100 text-white-primary hover:bg-primary-100 hover:h-12 hover:transition-all"
      href={url}
    >
      {icon}
      {name}
      {hasSubmenu && children}
    </Link>
  );
};
