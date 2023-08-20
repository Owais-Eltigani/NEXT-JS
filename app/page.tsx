import Image from 'next/image';
import Link from 'next/link';
Link;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`font-semibold`}>Hello World</h1>

      <Link href="/about"> go to about </Link>
      <Link href="/users" prefetch={true}>
        {' '}
        go to users{' '}
      </Link>
    </main>
  );
}
