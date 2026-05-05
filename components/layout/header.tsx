import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { RESOURCES } from "@/lib/resources";
import Button from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4 w-full">
        <Link href="/">
          <Image src={RESOURCES.VELTRIX_LOGO} alt="Veltrix Software" width={200} height={200} className="max-[375px]:hidden" />
          <Image src={RESOURCES.VELTRIX_LOGO_SMALL} alt="Veltrix Software" width={40} height={40} className="max-[375px]:block hidden" />
        </Link>

        <Navbar className="max-[800px]:hidden" />

        <Button variant="primary" size="lg" className="text-base font-semibold font-body hover:brightness-150 max-[800px]:hidden">
          Book A Call
        </Button>

        <Menu className="max-[800px]:block hidden size-9" />
      </header>
    </>
  );
};

export default React.memo(Header);
