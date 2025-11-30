import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center select-none">
      <Image
        src="/images/ana-logo-wordmark.png"
        alt="Ana Casarotti Logo"
        width={180}
        height={180}
        priority
        className="floaty"
      />
    </div>
  );
}
