const FAQ = () => {
  return (
    <div
      id="faq"
      className="bg-[#F8D39D] w-full flex flex-col justify-center items-center md:p-16 p-4 py-16"
    >
      <span className="text-4xl font-bold w-full text-center">FAQ</span>
      <span className="text-[#828282] mt-4 w-full text-center">
        Frequently Asked Questions
      </span>

      <div className="w-full flex flex-col justify-between items-center mt-24">
        <div className="w-full p-8 flex flex-col justify-between items-center bg-white rounded-xl">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="text-md w-full text-left">What is GirlScript</span>
            <div className="flex flex-col justify-center items-center w-12 h-12 text-2xl text-[#4a3aff] rounded-full shadow-custom-shadow">
              {">"}
            </div>
          </div>
          <span className="text-[#828282] mt-2 w-full text-left hidden">
            Description Of Blog
          </span>
        </div>

        <div className="w-full p-8 flex flex-col justify-between items-center bg-white rounded-xl mt-8">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="text-md w-full text-left">
              Is this program only for girls?
            </span>
            <div className="flex flex-col justify-center items-center w-12 h-12 text-2xl text-[#4a3aff] rounded-full shadow-custom-shadow">
              {">"}
            </div>
          </div>
          <span className="text-[#828282] mt-2 w-full text-left hidden">
            Description Of Blog
          </span>
        </div>

        <div className="w-full p-8 flex flex-col justify-between items-center bg-white rounded-xl mt-8">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="text-md w-full text-left">
              How I can contribute to the team as Volunteer?
            </span>
            <div className="flex flex-col justify-center items-center w-12 h-12 text-2xl text-[#4a3aff] rounded-full shadow-custom-shadow">
              {">"}
            </div>
          </div>
          <span className="text-[#828282] mt-2 w-full text-left hidden">
            Description Of Blog
          </span>
        </div>

        <div className="w-full p-8 flex flex-col justify-between items-center bg-white rounded-xl mt-8">
          <div className="w-full flex flex-row justify-between items-center">
            <span className="text-md w-full text-left">
              How I can join in other programs of Girlscript?
            </span>
            <div className="flex flex-col justify-center items-center w-12 h-12 text-2xl text-[#4a3aff] rounded-full shadow-custom-shadow">
              {">"}
            </div>
          </div>
          <span className="text-[#828282] mt-2 w-full text-left hidden">
            Description Of Blog
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
