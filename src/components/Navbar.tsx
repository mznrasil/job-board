import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={logo} alt="Job Board logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Job Board</span>
        </Link>
        <Button asChild>
          <Link href={"/jobs/new"}>Post a Job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
