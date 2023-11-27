import { DashboardWrapper } from '../components/DashboardWrapper';

export default async function DashboardLayout({
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
