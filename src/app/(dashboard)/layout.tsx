export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Sidebar and header now live in root layout; just render children
  return <>{children}</>;
}


