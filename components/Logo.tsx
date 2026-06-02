import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/app/Logo.svg";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"  
                        strokeLinejoin="round"  
                        strokeWidth="2"         
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            <Link href="/" className="flex items-center gap-1">
                <Image src={LogoImg} alt="logo" className="h-12" />
                <span className="text-xl font-medium hidden sm:inline">
                    CoderFlix
                </span>
            </Link>
        </div>
    );
}