import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Dashboard App
      </h1>

      <Link
        href="/dashboard"
        className="text-blue-600 underline"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
