import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center select-none">
      <Image
        src="/images/logo-ana-casarotti.svg"
        alt="Ana Casarotti Logo"
        width={180}
        height={180}
        priority
        className="floaty"
      />
    </div>
  );
}
