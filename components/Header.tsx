import Logo from "./Logo";
import RightSection from "./RightSection";
import SearchBar from "./SearchBar";

export default function Header() {
    return <>
     <header className="sticky top-0 z-50 bg-[#141414] border-b border-[#262626]">
        <div className="flex items-center justify-between px-4 py-2 md:px-6">
            <Logo/>
            <SearchBar/>
            <RightSection/>
        </div>
     </header>
    </>
}