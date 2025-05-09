import { CategoriesGetManyOutput } from "@/modules/categories/types";
import Link from "next/link";

type Props = {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
};

const SubCategoryMenu = ({ category, isOpen }: Props) => {
  if (!isOpen || !category.subcategories || category.subcategories.length === 0)
    return null;
  const backgroundColor = category.color || "#f5f5f5";
  return (
    <div className="absolute z-50" style={{ top: "100%", left: 0 }}>
      {/* Invisble brigdge */}
      <div className="h-3 w-60" />
      <div
        className="w-60 text-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px] overflow-hidden border"
        style={{ backgroundColor: backgroundColor }}
      >
        {category.subcategories?.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/${category.slug}/${subcategory.slug}`}
            className="w-full text-left p-4  hover:bg-black hover:text-white flex items-center "
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryMenu;
