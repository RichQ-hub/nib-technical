import { saira } from "@/fronts";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <section className='flex flex-col items-center min-w-2xl'>
        <h1 className={`${saira.className} font-extrabold text-6xl mb-8`}>Welcome!</h1>
        <p>View our cats by clicking the button below!</p>
        <Link
          className='text-black font-semibold bg-amber-600 flex items-center gap-2 mt-4 px-4 py-1 rounded-3xl hover:bg-amber-300'
          href='/cats'
        >
          <svg className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
          <p>See Cats</p>
        </Link>
      </section>
    </main>
  );
}
