import ImageCarousel from "@/components/ImageCarousel";
import LoadingSpinner from "@/components/LoadingSpinner";
import { saira } from "@/fonts";
import { getDogImgs } from "@/services/api";
import { Suspense } from "react";

export default function DogsPage() {
  const dogImageUrls = getDogImgs();

  return (
    <main>
      <h1 className={`${saira.className} font-extrabold text-6xl mb-8 text-center`}>Dog Carousel</h1>
      
      <div className='max-w-[700px] min-w-[400px] mx-auto'>
        <Suspense fallback={<LoadingSpinner />}>
          <ImageCarousel dogImageUrls={dogImageUrls} />
        </Suspense>
      </div>
    </main>
  );
}
