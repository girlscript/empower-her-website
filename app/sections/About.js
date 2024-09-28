import Image from "next/image";

import logo from "@/assets/logo-square.png";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#F8D39D] w-full flex flex-row justify-between items-center md:p-16 p-4 py-16"
    >
      <div className="md:w-1/2 w-full flex flex-col justify-start items-center">
        <span className="text-4xl font-bold w-full text-left">
          About The Program
        </span>
        <span className="mt-6 w-full text-left">
          We at GirlScript are excited to partner with Masai School, along with
          KSIF (Korean Social Investment Foundation) and AVPN (Asian Venture
          Philanthropy Network), to bring you the EmpowerHER program. This
          initiative offers 100% scholarships for women, designed to help launch
          or relaunch tech careers through tailored courses, job placement
          assistance, internships, and continuous support.
        </span>
        <span className="mt-6 w-full text-left">
          <b>Who Is This Program For?</b>
        </span>
        <ul className="mt-6 w-full text-left list-disc list-inside">
          <li>
            <b>Freshers:</b> Gain job-ready skills. 
          </li>
          <li>
            <b>Career Returners:</b> Re-enter the workforce.
          </li>
          <li>
            <b>Tech Aspirants:</b> Break into the tech industry.
          </li>
        </ul>
        <span className="mt-6 w-full text-left">
          <b>Start Registering Today!</b>
        </span>
      </div>

      <Image src={logo} className="w-1/3 hidden md:block" />
    </div>
  );
};

export default About;
