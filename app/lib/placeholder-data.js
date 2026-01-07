export const customers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    image_url: '/customers/john.png',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    image_url: '/customers/jane.png',
  },
];

export const invoices = [
  {
    customer_id: '1',
    amount: 5000,
    status: 'paid',
    date: '2023-10-01',
  },
  {
    customer_id: '2',
    amount: 3000,
    status: 'pending',
    date: '2023-10-05',
  },
];

export const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 4000 },
];
