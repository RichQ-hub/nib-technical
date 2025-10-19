import ImageCarousel from "@/components/ImageCarousel";
import { saira } from "@/fronts";
import { getDogImgs } from "@/services/api";
import { Suspense } from "react";

export default function DogsPage() {
  const dogImageUrls = getDogImgs();

  return (
    <main>
      <h1 className={`${saira.className} font-extrabold text-6xl mb-8 text-center`}>Dog Carousel</h1>
      
      <Suspense fallback={<p>Loading Dog Images...</p>}>
        <ImageCarousel dogImageUrls={dogImageUrls} />
      </Suspense>
    </main>
  );
}
