import Link from 'next/link';

interface MenuItemProps {
  name: string;
  url: string;
  currentPath: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isLast?: boolean;
  hasSubmenu?: boolean;
}

export const MenuItem = ({
  name,
  url,
  icon,
  children,
  currentPath,
  isLast = false,
  hasSubmenu = false
}: MenuItemProps) => {
  const isCurrentPage = url === currentPath;
  return (
    <Link
      className={`flex flex-row items-center gap-2 w-full h-12 px-4 text-white-primary font-semibold hover:h-14 hover:transition-all ${
        isCurrentPage ? 'bg-primary-100' : ''
      }`}
      href={url}
    >
      {icon}
      {name}
      {hasSubmenu && children}
    </Link>
  );
};
