import Link from "next/link";
import ClientComponent from "@/components/ClientComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/test">Test</Link>
      <Link href="/form">Form</Link>
      <Link href="/products">Products</Link>

      <ClientComponent />
    </main>
  );
}
