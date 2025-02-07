// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

import HeroCarousel from "@/components/HeroCarousel";
import firstImage from "@/assets/images/crousel-Img.webp";
import secondImage from "@/assets/images/crousel-Img-2.webp";
import MainMenuBar from "@/components/MainMenuBar";
import MainMenuSection from "@/components/MainMenuSection";
import SubMenuBar from "@/components/SubMenuBar";

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
      <MainMenuBar />
      <MainMenuSection />
    </div>
  );
}
