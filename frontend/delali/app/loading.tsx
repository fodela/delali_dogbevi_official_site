import Image from "next/image";

export default function loading() {
  return (
    <>
      <Image
        src="/logo/logo_icon_double_dark.svg"
        alt="logo icon"
        height={150}
        width={150}
        className="absolute top-1/2 left-1/2 -translate-x-1/2"
      />
      <div>
        {" "}
        <div className="loading-color"></div>
        <div className="loading-border"></div>
        <div className="loading-circle"></div>
      </div>
    </>
  );
}
