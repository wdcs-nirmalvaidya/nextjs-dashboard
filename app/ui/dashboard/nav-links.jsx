'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="space-y-2">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium',
            'hover:bg-blue-100 hover:text-blue-600',
            {
              'bg-blue-100 text-blue-600': pathname === link.href,
              'text-gray-700': pathname !== link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
