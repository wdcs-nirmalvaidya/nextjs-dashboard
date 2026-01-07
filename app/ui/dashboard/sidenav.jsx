import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <aside className="h-full p-4 border-r">
      <h2 className="mb-6 text-xl font-bold">Dashboard</h2>
      <NavLinks />
    </aside>
  );
}
  