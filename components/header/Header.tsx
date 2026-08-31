import Image from "next/image";
import Link from "next/link";
import SearchAutocomplete from "./SearchAutocomplete";
import CartDropdown from "./CartDropdown";
import MegaMenu from "./MegaMenu";

export default function Header() {
  return (
    <header className="w-full h-[197px] top-10 grid grid-rows-[1fr_auto]">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2">
          <Image
            className="block mx-auto w-40 h-auto"
            src="/logo-text.webp"
            alt="logo"
            draggable="false"
            width={150}
            height={150}
            loading="eager"
          />
        </div>
        <div className="w-3/4">
          <SearchAutocomplete />
        </div>
        <div className="w-1/2 flex justify-center items-center gap-2">
          <Link
            href="/auth"
            className="bg-base-neutral shadow-[0px_0px_20px_2px_#00000014] rounded-[12px] flex items-center gap-2 py-3 px-3"
          >
            <span className="font-bold text-base text-neutral-800">
              ثبت‌ نام | ورود
            </span>
            <svg
              className="size-6 fill-neutral-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                fill="#404040"
              />
              <path
                d="M20.5862 22.75C20.1762 22.75 19.8362 22.41 19.8362 22C19.8362 18.55 16.3162 15.75 11.9962 15.75C7.67625 15.75 4.15625 18.55 4.15625 22C4.15625 22.41 3.81625 22.75 3.40625 22.75C2.99625 22.75 2.65625 22.41 2.65625 22C2.65625 17.73 6.84625 14.25 11.9962 14.25C17.1462 14.25 21.3362 17.73 21.3362 22C21.3362 22.41 20.9962 22.75 20.5862 22.75Z"
                fill="#404040"
              />
            </svg>
          </Link>
          <CartDropdown />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <MegaMenu />
      </div>
    </header>
  );
}
