import Image from "next/image";
import gift from "@/assets/images/gift.gif";

const MenuAds = () => {
  return (
    <div className="flex justify-center mb-4 mt-[30px]">
      <Image src={gift} width="100%" height={224} className="rounded-[17px]" />
    </div>
  );
};

export default MenuAds;
