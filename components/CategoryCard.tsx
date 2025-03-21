import React from "react";
import Image from "next/image";

interface Props {
  icon: React.ElementType;
  image: string;
  label: string;
}

const CategoryCard = ({ icon: Icon, image, label }: Props) => {
  return (
    <div className="lg:h-[300px] sm:h-[190px] flex flex-col bg-litee rounded-[20px] overflow-hidden h-[209px]">
      <div className="relative h-[68%] w-full overflow-hidden flex items-center justify-center rounded-t-[20px]">
        <Image
          className="object-cover filter blur-lg z-0"
          src={image}
          fill
          alt="placeholder"
        />
        <Icon className="text-[80px] z-40 absolute" />
      </div>
      <div className="lg:px-6 flex items-center h-[32%] px-4">
        <p className="lg:text-[20px] text-[16px] font-semibold leading-[140%]">{label}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
