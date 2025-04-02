import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Next.js App</h1>
        <p className="mt-2 text-lg text-gray-600">Start building with Next.js</p>
      </header>

      <main className="flex flex-col items-center gap-4">
        <Link href="/about" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
          Go to About Page
        </Link>
        <Link href="/services" className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition">
          Go to Services Page
        </Link>
      </main>

      <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 text-gray-600 hover:underline"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 hover:underline"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-gray-600 hover:underline"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
