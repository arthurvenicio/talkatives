import { Menu } from './components/Menu'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <Menu />
      </div>
      <div className="flex-[8] bg-[#f2f2f2]">{children}</div>
    </div>
  )
}
