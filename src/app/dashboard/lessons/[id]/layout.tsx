import { ILayoutDefault } from '@/interfaces/defaults';

export default function Layout({ children }: ILayoutDefault) {
  return <div className="p-8">{children}</div>;
}
