// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

import HeroCarousel from "@/components/HeroCarousel";
import firstImage from "@/assets/images/crousel-Img.webp";
import secondImage from "@/assets/images/crousel-Img-2.webp";

export default function Home() {
  let images = [{ image: firstImage }, { image: secondImage }];
  // const router = useRouter();
  // useEffect(() => {
  //   router.push("/auth/login");
  //   // changeTheme("theme2");
  // }, []);
  return (
    <div>
      <HeroCarousel images={images} />
    </div>
  );
}
