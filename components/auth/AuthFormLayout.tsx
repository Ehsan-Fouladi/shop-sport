import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type AuthLayoutProps = {
  children: React.ReactNode;
  heroImage: string;
  onBack?: () => void;
};

export default function AuthFormLayout({
  children,
  heroImage,
  onBack,
}: AuthLayoutProps) {
  return (
    <main className="w-full h-dvh flex">
      <div className="relative w-full lg:w-1/2 h-full overflow-hidden">
        <div className="absolute top-11 w-full flex items-center justify-between px-6 lg:hidden">
          {onBack && (
            <Button
              type="button"
              variant="destructive"
              onClick={onBack}
              aria-label="صفحه قبلی"
            >
              <svg
                className="size-7"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.65354 21.5316C9.44771 21.5316 9.24188 21.4587 9.07938 21.3024C8.76521 21.0003 8.76521 20.5003 9.07938 20.1982L16.1427 13.4066C16.6627 12.9066 16.6627 12.0941 16.1427 11.5941L9.07938 4.80241C8.76521 4.50033 8.76521 4.00033 9.07938 3.69824C9.39354 3.39616 9.91354 3.39616 10.2277 3.69824L17.291 10.4899C17.8435 11.0212 18.1577 11.7399 18.1577 12.5003C18.1577 13.2607 17.8544 13.9795 17.291 14.5107L10.2277 21.3024C10.0652 21.4482 9.85937 21.5316 9.65354 21.5316Z"
                  fill="#717171"
                />
              </svg>
            </Button>
          )}
          <Link href="/" aria-label="بازگشت به صفحه اصلی">
            <svg
              className="size-7"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                width="2.23708"
                height="17.8967"
                rx="1.11854"
                transform="matrix(0.731504 -0.681837 0.731504 0.681837 5.3125 7.52539)"
                fill="#717171"
              />
              <rect
                width="2.23708"
                height="17.8967"
                rx="1.11854"
                transform="matrix(0.731504 0.681837 -0.731504 0.681837 18.0938 6)"
                fill="#717171"
              />
            </svg>
          </Link>
        </div>
        <div className="absolute -top-20 -left-30 opacity-15 size-[23rem] md:size-[25rem] -z-50">
          <Image
            className="object-contain"
            src="/auth/vector1-auth.avif"
            alt="vector1"
            draggable="false"
            sizes="460px"
            fill
            loading="eager"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 max-md:p-3">
          <Image
            className="min-lg:hidden w-[150px] h-auto"
            src="/logo-text.webp"
            alt="logo"
            draggable="false"
            width={150}
            height={58}
          />
          {children}
        </div>
        <div className="absolute -bottom-60 -right-60 opacity-15 size-[40rem] -z-50">
          <Image
            className="object-contain"
            src="/auth/vector2-auth.avif"
            alt="vector2"
            draggable="false"
            sizes="800px"
            fill
          />
        </div>
      </div>
      <div className="relative w-1/2 h-full hidden lg:flex justify-center items-center">
        <Image
          className="object-cover object-top"
          src={heroImage}
          alt={
            heroImage
              .split("/")
              .pop()
              ?.replace(/\.[^/.]+$/, "") ?? "عکسی وجود ندارد"
          }
          draggable="false"
          sizes="50vw"
          fill
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute bg-black/90 backdrop-blur-xs w-full h-full flex flex-col justify-center items-center gap-6">
          <Image
            className="w-auto h-14"
            src="/logo.webp"
            alt="logo"
            draggable="false"
            width={230}
            height={230}
          />
          <div className="flex items-center gap-2">
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                fill="white"
              />
              <path
                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                fill="white"
              />
            </svg>
            <Link href="/" className="text-white text-sm font-medium">
              برگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
