import { DashboardWrapper } from './components/DashboardWrapper';
import { Menu } from './components/Menu';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <DashboardWrapper>{children}</DashboardWrapper>
    </div>
  );
}
