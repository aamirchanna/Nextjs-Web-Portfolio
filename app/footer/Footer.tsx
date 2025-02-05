import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='pt-16 px-3 lg:px-4 pb-10 bg-[#0f0e0f]'>
      <div className="ml-[1rem] lg:ml-[2rem]">
        <Image src="/images/logo1.png" width={90} height={90} alt="logo" className="w-[80px] h-[80px]"/>
      </div>

      <div className="flex justify-center px-2 text-[14px] lg:text-[18px] items-center flex-wrap space-x-10 space-y-4 text-white font-bold">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
      
      <p className="text-white text-opacity-60 text-center mt-6 text-[13px] lg:text-[18px]">
        © 2025 All Rights Reserved ARK
      </p>
    </div>
  );
};

export default Footer;