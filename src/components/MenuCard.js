import img from "@/assets/images/crousel-Img-2.webp";
import Image from "next/image";

const MenuCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image className="w-full" src={img} alt="Card image" />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-xs sm:text-base ">From Rs : 320</p>
        <button className="bg-customGreen text-white rounded px-4 py-2 text-xs sm:text-base">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
