import Image from "next/image";

import logo from "@/assets/logo-square.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center font-poppins">
      <Image src={logo} className="h-32 w-32 rounded-xl" />
      <span className="text-3xl mt-8">GirlScript Foundation</span>
      <span className="text-sm mt-2">New Website Coming Soon</span>
    </div>
  );
}
