import Image from "next/image";

import cover from "@/assets/blog-cover.png";

const Blogs = () => {
  return (
    <div
      id="blogs"
      className="w-full flex flex-col justify-center items-center md:p-16 p-4 py-16"
    >
      <span className="text-4xl font-bold w-full text-center">Blogs</span>
      <span className="text-[#828282] mt-4 w-full text-center">
        Check out our blogs!
      </span>

      <div className="w-full flex flex-row justify-between items-center mt-24">
        <div className="p-4 text-4xl">{"<"}</div>
        <div className="w-[480px] flex flex-col justify-between items-center">
          <Image src={cover} className="w-[480px]" />
          <span className="text-xl mt-4 font-bold w-full text-left">
            Blog Title
          </span>
          <span className="text-[#828282] mt-2 w-full text-left">
            Description Of Blog
          </span>
        </div>
        <div className="w-[480px] md:flex flex-col justify-between items-center hidden">
          <Image src={cover} className="w-[480px]" />
          <span className="text-xl mt-4 font-bold w-full text-left">
            Blog Title
          </span>
          <span className="text-[#828282] mt-2 w-full text-left">
            Description Of Blog
          </span>
        </div>
        <div className="p-4 text-4xl">{">"}</div>
      </div>
    </div>
  );
};

export default Blogs;
