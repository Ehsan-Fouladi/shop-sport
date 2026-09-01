"use client";

import { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import Image from "next/image";
import { Button } from "../ui/button";

interface Tags {
  id: number;
  name: string;
}

interface CartProduct {
  id: number;
  name: string;
  code: string;
  image: string;
}

// const lastSearches: Tags[] = [
//   {
//     id: 1,
//     name: "هودی",
//   },
//   {
//     id: 2,
//     name: "کفش کوهنوردی",
//   },
// ];

const popularSearches: Tags[] = [
  {
    id: 1,
    name: "شیکر بدنسازی",
  },
  {
    id: 2,
    name: "کفش کوهنوردی",
  },
  {
    id: 3,
    name: "ست ورزشی",
  },
  {
    id: 4,
    name: "استوک",
  },
];

const productCartSearch: CartProduct[] = [
  {
    id: 1,
    name: "کیت ورزشی مردانه",
    code: "مردانه کد 13",
    image: "/products/product3.webp",
  },
  {
    id: 2,
    name: "کیت ورزشی مردانه",
    code: "مردانه کد 14",
    image: "/products/product4.webp",
  },
  {
    id: 3,
    name: "کیت ورزشی مردانه",
    code: "مردانه کد 15",
    image: "/products/product5.webp",
  },
];

export default function SearchAutocomplete() {
  const [search, setSearch] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const normalizedSearch = search.trim();
  const showDefaultSearch = isSearch && !normalizedSearch;
  const showSearchResults = isSearch && !!normalizedSearch;

  const clearSearch = () => {
    localStorage.removeItem("recent-searches");
    setRecentSearches([]);
  };

  useEffect(() => {
    const query = search.trim();

    if (!query) return;

    const searchTimer = setTimeout(() => {
      setRecentSearches((prev) =>
        [query, ...prev.filter((item) => item !== query)].slice(0, 10),
      );
    }, 1000);

    return () => clearTimeout(searchTimer);
  }, [search]);

  useEffect(() => {
    const saved = localStorage.getItem("recent-searches");

    if (saved) {
      try {
        const parsed: unknown = JSON.parse(saved);

        if (
          Array.isArray(parsed) &&
          parsed.every((item) => typeof item === "string")
        ) {
          setRecentSearches(parsed);
        }
      } catch {
        localStorage.removeItem("recent-searches");
      }
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem("recent-searches", JSON.stringify(recentSearches));
  }, [recentSearches, isInitialized]);

  return (
    <div
      className="relative w-full"
      onMouseLeave={() => setIsSearch(false)}
      onMouseEnter={() => setIsSearch(true)}
    >
      <InputGroup
        className={`${isSearch ? "rounded-t-[16px]" : "rounded-[16px]"} border border-neutral-400 bg-base-neutral placeholder:text-neutral-600 py-5 xl:py-7 px-1 xl:px-2`}
      >
        <InputGroupInput
          type="search"
          placeholder="جستجو"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onFocus={() => setIsSearch(true)}
        />
        <InputGroupAddon>
          <svg
            className="size-6 fill-base-primary"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
              fill="#FA541C"
            />
            <path
              d="M21.9975 22.7504C21.8075 22.7504 21.6175 22.6804 21.4675 22.5304L19.4675 20.5304C19.1775 20.2404 19.1775 19.7604 19.4675 19.4704C19.7575 19.1804 20.2375 19.1804 20.5275 19.4704L22.5275 21.4704C22.8175 21.7604 22.8175 22.2404 22.5275 22.5304C22.3775 22.6804 22.1875 22.7504 21.9975 22.7504Z"
              fill="#FA541C"
            />
          </svg>
        </InputGroupAddon>
      </InputGroup>
      {showDefaultSearch && (
        <div className="absolute z-50 w-full rounded-b-[16px] p-4 bg-base-neutral border border-neutral-400 flex flex-col gap-8">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z"
                    fill="#FA541C"
                  />
                  <path
                    d="M11.783 11.9476C11.6855 11.9476 11.588 11.9251 11.498 11.8651L9.17297 10.4776C8.59547 10.1326 8.16797 9.37507 8.16797 8.70757V5.63257C8.16797 5.32507 8.42297 5.07007 8.73047 5.07007C9.03797 5.07007 9.29297 5.32507 9.29297 5.63257V8.70757C9.29297 8.97757 9.51797 9.37507 9.75047 9.51007L12.0755 10.8976C12.3455 11.0551 12.428 11.4001 12.2705 11.6701C12.158 11.8501 11.9705 11.9476 11.783 11.9476Z"
                    fill="#FA541C"
                  />
                </svg>
                <span className="font-medium text-sm text-neutral-800">
                  جستجو های اخیر
                </span>
              </div>
              <svg
                onClick={clearSearch}
                className="cursor-pointer"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7507 5.04785C15.7357 5.04785 15.7132 5.04785 15.6907 5.04785C11.7232 4.65035 7.76323 4.50035 3.84073 4.89785L2.31073 5.04785C1.99573 5.07785 1.71823 4.85285 1.68823 4.53785C1.65823 4.22285 1.88323 3.95285 2.19073 3.92285L3.72073 3.77285C7.71073 3.36785 11.7532 3.52535 15.8032 3.92285C16.1107 3.95285 16.3357 4.23035 16.3057 4.53785C16.2832 4.83035 16.0357 5.04785 15.7507 5.04785Z"
                  fill="#E53935"
                />
                <path
                  d="M15.7507 5.04785C15.7357 5.04785 15.7132 5.04785 15.6907 5.04785C11.7232 4.65035 7.76323 4.50035 3.84073 4.89785L2.31073 5.04785C1.99573 5.07785 1.71823 4.85285 1.68823 4.53785C1.65823 4.22285 1.88323 3.95285 2.19073 3.92285L3.72073 3.77285C7.71073 3.36785 11.7532 3.52535 15.8032 3.92285C16.1107 3.95285 16.3357 4.23035 16.3057 4.53785C16.2832 4.83035 16.0357 5.04785 15.7507 5.04785Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M6.37556 4.29C6.34556 4.29 6.31556 4.29 6.27806 4.2825C5.97806 4.23 5.76806 3.9375 5.82056 3.6375L5.98556 2.655C6.10556 1.935 6.27056 0.9375 8.01806 0.9375H9.98306C11.7381 0.9375 11.9031 1.9725 12.0156 2.6625L12.1806 3.6375C12.2331 3.945 12.0231 4.2375 11.7231 4.2825C11.4156 4.335 11.1231 4.125 11.0781 3.825L10.9131 2.85C10.8081 2.1975 10.7856 2.07 9.99056 2.07H8.02556C7.23056 2.07 7.21556 2.175 7.10306 2.8425L6.93056 3.8175C6.88556 4.095 6.64556 4.29 6.37556 4.29Z"
                  fill="#E53935"
                />
                <path
                  d="M6.37556 4.29C6.34556 4.29 6.31556 4.29 6.27806 4.2825C5.97806 4.23 5.76806 3.9375 5.82056 3.6375L5.98556 2.655C6.10556 1.935 6.27056 0.9375 8.01806 0.9375H9.98306C11.7381 0.9375 11.9031 1.9725 12.0156 2.6625L12.1806 3.6375C12.2331 3.945 12.0231 4.2375 11.7231 4.2825C11.4156 4.335 11.1231 4.125 11.0781 3.825L10.9131 2.85C10.8081 2.1975 10.7856 2.07 9.99056 2.07H8.02556C7.23056 2.07 7.21556 2.175 7.10306 2.8425L6.93056 3.8175C6.88556 4.095 6.64556 4.29 6.37556 4.29Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M11.4078 17.0622H6.59279C3.97529 17.0622 3.87029 15.6147 3.78779 14.4447L3.30029 6.89219C3.27779 6.58469 3.51779 6.31469 3.82529 6.29219C4.14029 6.27719 4.40279 6.50969 4.42529 6.81719L4.91279 14.3697C4.99529 15.5097 5.02529 15.9372 6.59279 15.9372H11.4078C12.9828 15.9372 13.0128 15.5097 13.0878 14.3697L13.5753 6.81719C13.5978 6.50969 13.8678 6.27719 14.1753 6.29219C14.4828 6.31469 14.7228 6.57719 14.7003 6.89219L14.2128 14.4447C14.1303 15.6147 14.0253 17.0622 11.4078 17.0622Z"
                  fill="#E53935"
                />
                <path
                  d="M11.4078 17.0622H6.59279C3.97529 17.0622 3.87029 15.6147 3.78779 14.4447L3.30029 6.89219C3.27779 6.58469 3.51779 6.31469 3.82529 6.29219C4.14029 6.27719 4.40279 6.50969 4.42529 6.81719L4.91279 14.3697C4.99529 15.5097 5.02529 15.9372 6.59279 15.9372H11.4078C12.9828 15.9372 13.0128 15.5097 13.0878 14.3697L13.5753 6.81719C13.5978 6.50969 13.8678 6.27719 14.1753 6.29219C14.4828 6.31469 14.7228 6.57719 14.7003 6.89219L14.2128 14.4447C14.1303 15.6147 14.0253 17.0622 11.4078 17.0622Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M10.2455 12.9375H7.74805C7.44055 12.9375 7.18555 12.6825 7.18555 12.375C7.18555 12.0675 7.44055 11.8125 7.74805 11.8125H10.2455C10.553 11.8125 10.808 12.0675 10.808 12.375C10.808 12.6825 10.553 12.9375 10.2455 12.9375Z"
                  fill="#E53935"
                />
                <path
                  d="M10.2455 12.9375H7.74805C7.44055 12.9375 7.18555 12.6825 7.18555 12.375C7.18555 12.0675 7.44055 11.8125 7.74805 11.8125H10.2455C10.553 11.8125 10.808 12.0675 10.808 12.375C10.808 12.6825 10.553 12.9375 10.2455 12.9375Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  d="M10.875 9.9375H7.125C6.8175 9.9375 6.5625 9.6825 6.5625 9.375C6.5625 9.0675 6.8175 8.8125 7.125 8.8125H10.875C11.1825 8.8125 11.4375 9.0675 11.4375 9.375C11.4375 9.6825 11.1825 9.9375 10.875 9.9375Z"
                  fill="#E53935"
                />
                <path
                  d="M10.875 9.9375H7.125C6.8175 9.9375 6.5625 9.6825 6.5625 9.375C6.5625 9.0675 6.8175 8.8125 7.125 8.8125H10.875C11.1825 8.8125 11.4375 9.0675 11.4375 9.375C11.4375 9.6825 11.1825 9.9375 10.875 9.9375Z"
                  fill="black"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
            <div className="w-full flex flex-wrap gap-2">
              {/* {lastSearches.map((search) => (
                <div
                  className="bg-neutral-200 px-8 py-1.5 rounded-[10px]"
                  key={search.id}
                >
                  <span className="font-normal text-xs text-neutral-900">
                    {search.name}
                  </span>
                </div>
              ))} */}
              {recentSearches.map((item) => (
                <Button
                  type="button"
                  className="bg-neutral-200 hover:bg-neutral-300 px-8 py-5 rounded-[10px]"
                  key={item}
                  onMouseDown={() => {
                    setSearch(item);
                  }}
                >
                  <span className="font-normal text-xs text-neutral-900">
                    {item}
                  </span>
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.62508 11.4378C5.48258 11.4378 5.34008 11.3853 5.22758 11.2728C5.01008 11.0553 5.01008 10.6953 5.22758 10.4778L7.62758 8.07782C7.74758 7.95782 7.90508 7.89782 8.07758 7.91282C8.24258 7.92782 8.39258 8.01782 8.49008 8.16032L9.30758 9.39032L11.9701 6.72782C12.1876 6.51032 12.5476 6.51032 12.7651 6.72782C12.9826 6.94532 12.9826 7.30532 12.7651 7.52282L9.61508 10.6728C9.49508 10.7928 9.33758 10.8528 9.16508 10.8378C9.00008 10.8228 8.85008 10.7328 8.75258 10.5903L7.93508 9.36032L6.02258 11.2728C5.91008 11.3853 5.76758 11.4378 5.62508 11.4378Z"
                  fill="#FA541C"
                />
                <path
                  d="M12.375 9.1875C12.0675 9.1875 11.8125 8.9325 11.8125 8.625V7.6875H10.875C10.5675 7.6875 10.3125 7.4325 10.3125 7.125C10.3125 6.8175 10.5675 6.5625 10.875 6.5625H12.375C12.6825 6.5625 12.9375 6.8175 12.9375 7.125V8.625C12.9375 8.9325 12.6825 9.1875 12.375 9.1875Z"
                  fill="#FA541C"
                />
                <path
                  d="M11.25 17.0625H6.75C2.6775 17.0625 0.9375 15.3225 0.9375 11.25V6.75C0.9375 2.6775 2.6775 0.9375 6.75 0.9375H11.25C15.3225 0.9375 17.0625 2.6775 17.0625 6.75V11.25C17.0625 15.3225 15.3225 17.0625 11.25 17.0625ZM6.75 2.0625C3.2925 2.0625 2.0625 3.2925 2.0625 6.75V11.25C2.0625 14.7075 3.2925 15.9375 6.75 15.9375H11.25C14.7075 15.9375 15.9375 14.7075 15.9375 11.25V6.75C15.9375 3.2925 14.7075 2.0625 11.25 2.0625H6.75Z"
                  fill="#FA541C"
                />
              </svg>
              <span className="font-medium text-sm text-neutral-800">
                جستجو های پرطرفدار
              </span>
            </div>
            <div className="w-full flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <div
                  className="bg-neutral-200 px-8 py-1.5 rounded-[10px]"
                  key={search.id}
                >
                  <span className="font-normal text-xs text-neutral-900">
                    {search.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {showSearchResults && (
        <div className="absolute z-50 w-full rounded-b-[16px] p-4 bg-base-neutral border border-neutral-400 flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full max-w-[39rem] flex gap-5 overflow-x-auto">
              {productCartSearch.map((cart) => (
                <div
                  className="w-[233px] h-[100px] rounded-lg bg-neutral-200 border border-neutral-400 flex shrink-0 overflow-hidden"
                  key={cart.id}
                >
                  <div className="w-1/2 shrink-0">
                    <Image
                      src={cart.image}
                      alt={
                        cart.image
                          .split("/")
                          .pop()
                          ?.replace(/\.[^/.]+$/, "") ?? "عکسی وجود ندارد"
                      }
                      draggable="false"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center items-center gap-2">
                    <span className="font-medium text-xs text-neutral-900">
                      {cart.name}
                    </span>
                    <span className="font-medium text-xs text-neutral-800">
                      {cart.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-4">
              <span className="font-medium text-sm text-neutral-900">
                همه‌ی کالا های مربوط به{" "}
                <span className="text-base-primary">{normalizedSearch}</span>
              </span>
              <div className="flex flex-col gap-6">
                <div className="flex gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
                      fill="#868686"
                    />
                    <path
                      d="M14.6676 15.1671C14.5409 15.1671 14.4143 15.1205 14.3143 15.0205L12.9809 13.6871C12.7876 13.4938 12.7876 13.1738 12.9809 12.9804C13.1743 12.7871 13.4943 12.7871 13.6876 12.9804L15.0209 14.3138C15.2143 14.5071 15.2143 14.8271 15.0209 15.0205C14.9209 15.1205 14.7943 15.1671 14.6676 15.1671Z"
                      fill="#868686"
                    />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xs text-neutral-900">
                      <span className="text-base-primary">
                        {normalizedSearch}
                      </span>{" "}
                      ورزشی مردانه
                    </span>
                    <span className="font-medium text-xs text-neutral-700">
                      در دسته بندی مردانه
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
                      fill="#868686"
                    />
                    <path
                      d="M14.6676 15.1671C14.5409 15.1671 14.4143 15.1205 14.3143 15.0205L12.9809 13.6871C12.7876 13.4938 12.7876 13.1738 12.9809 12.9804C13.1743 12.7871 13.4943 12.7871 13.6876 12.9804L15.0209 14.3138C15.2143 14.5071 15.2143 14.8271 15.0209 15.0205C14.9209 15.1205 14.7943 15.1671 14.6676 15.1671Z"
                      fill="#868686"
                    />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xs text-neutral-900">
                      <span className="text-base-primary">
                        {normalizedSearch}
                      </span>{" "}
                      ورزشی زنانه
                    </span>
                    <span className="font-medium text-xs text-neutral-700">
                      در دسته بندی زنانه
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
                      fill="#868686"
                    />
                    <path
                      d="M14.6676 15.1671C14.5409 15.1671 14.4143 15.1205 14.3143 15.0205L12.9809 13.6871C12.7876 13.4938 12.7876 13.1738 12.9809 12.9804C13.1743 12.7871 13.4943 12.7871 13.6876 12.9804L15.0209 14.3138C15.2143 14.5071 15.2143 14.8271 15.0209 15.0205C14.9209 15.1205 14.7943 15.1671 14.6676 15.1671Z"
                      fill="#868686"
                    />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xs text-neutral-900">
                      <span className="text-base-primary">
                        {normalizedSearch}
                      </span>{" "}
                      ورزشی دخترانه
                    </span>
                    <span className="font-medium text-xs text-neutral-700">
                      در دسته بندی بچگانه
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66732 14.5002C3.90065 14.5002 0.833984 11.4335 0.833984 7.66683C0.833984 3.90016 3.90065 0.833496 7.66732 0.833496C11.434 0.833496 14.5007 3.90016 14.5007 7.66683C14.5007 11.4335 11.434 14.5002 7.66732 14.5002ZM7.66732 1.8335C4.44732 1.8335 1.83398 4.4535 1.83398 7.66683C1.83398 10.8802 4.44732 13.5002 7.66732 13.5002C10.8873 13.5002 13.5007 10.8802 13.5007 7.66683C13.5007 4.4535 10.8873 1.8335 7.66732 1.8335Z"
                      fill="#868686"
                    />
                    <path
                      d="M14.6676 15.1671C14.5409 15.1671 14.4143 15.1205 14.3143 15.0205L12.9809 13.6871C12.7876 13.4938 12.7876 13.1738 12.9809 12.9804C13.1743 12.7871 13.4943 12.7871 13.6876 12.9804L15.0209 14.3138C15.2143 14.5071 15.2143 14.8271 15.0209 15.0205C14.9209 15.1205 14.7943 15.1671 14.6676 15.1671Z"
                      fill="#868686"
                    />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xs text-neutral-900">
                      <span className="text-base-primary">
                        {normalizedSearch}
                      </span>{" "}
                      ورزشی پسرانه
                    </span>
                    <span className="font-medium text-xs text-neutral-700">
                      در دسته بندی بچگانه
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-neutral-400" />
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.24987 12.7085C6.09154 12.7085 5.9332 12.6502 5.8082 12.5252C5.56654 12.2835 5.56654 11.8835 5.8082 11.6419L8.47487 8.9752C8.6082 8.84186 8.7832 8.7752 8.97487 8.79186C9.1582 8.80853 9.32487 8.90853 9.4332 9.06686L10.3415 10.4335L13.2999 7.4752C13.5415 7.23353 13.9415 7.23353 14.1832 7.4752C14.4249 7.71686 14.4249 8.11686 14.1832 8.35853L10.6832 11.8585C10.5499 11.9919 10.3749 12.0585 10.1832 12.0419C9.99987 12.0252 9.8332 11.9252 9.72487 11.7669L8.81654 10.4002L6.69154 12.5252C6.56654 12.6502 6.4082 12.7085 6.24987 12.7085Z"
                  fill="#FA541C"
                />
                <path
                  d="M13.7507 10.2082C13.409 10.2082 13.1257 9.92484 13.1257 9.58317V8.5415H12.084C11.7423 8.5415 11.459 8.25817 11.459 7.9165C11.459 7.57484 11.7423 7.2915 12.084 7.2915H13.7507C14.0923 7.2915 14.3757 7.57484 14.3757 7.9165V9.58317C14.3757 9.92484 14.0923 10.2082 13.7507 10.2082Z"
                  fill="#FA541C"
                />
                <path
                  d="M12.4993 18.9582H7.49935C2.97435 18.9582 1.04102 17.0248 1.04102 12.4998V7.49984C1.04102 2.97484 2.97435 1.0415 7.49935 1.0415H12.4993C17.0243 1.0415 18.9577 2.97484 18.9577 7.49984V12.4998C18.9577 17.0248 17.0243 18.9582 12.4993 18.9582ZM7.49935 2.2915C3.65768 2.2915 2.29102 3.65817 2.29102 7.49984V12.4998C2.29102 16.3415 3.65768 17.7082 7.49935 17.7082H12.4993C16.341 17.7082 17.7077 16.3415 17.7077 12.4998V7.49984C17.7077 3.65817 16.341 2.2915 12.4993 2.2915H7.49935Z"
                  fill="#FA541C"
                />
              </svg>
              <span className="font-medium text-sm text-neutral-800">
                جستجو های پرطرفدار
              </span>
            </div>
            <div className="w-full flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <div
                  className="bg-neutral-200 px-8 py-1.5 rounded-[10px]"
                  key={search.id}
                >
                  <span className="font-normal text-xs text-neutral-900">
                    {search.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
