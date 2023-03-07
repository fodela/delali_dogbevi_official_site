import Image from "next/image";

const ComingSoon = ({ pageName }: { pageName: string }) => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <Image
        src="/logo/logo_icon_double_dark.svg"
        alt="icon of delali's logo"
        height={80}
        width={80}
      />
      <h2 className="uppercase text-2xl sm:text-4xl  border-b p-6 font-bold text-center text-black dark:text-white">
        {pageName} Comming soon
      </h2>
    </div>
  );
};

export default ComingSoon;
