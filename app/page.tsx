import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <h3>Welcome to My Next.js App</h3>
      
        <div>
          <p>
        <Link href="/about">Go to About Page</Link>
      </p>
        </div>
        <div>
         <p>
        <Link href="/services">Go to Services Page</Link>
      </p>
        </div>

         </div>
  );
}
