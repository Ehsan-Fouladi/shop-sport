"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Products {
  id: number;
  name: string;
  image: string;
  price: number;
  colorName: string;
  count: number;
}

const productData: Products[] = [
  {
    id: 1,
    name: "ست ورزشی نایک 2009",
    image: "/products/product1.webp",
    price: 4800000,
    colorName: "سرمه ای",
    count: 1,
  },
  {
    id: 2,
    name: "ست ورزشی نایک",
    image: "/products/product2.webp",
    price: 4800000,
    colorName: "سرمه ای",
    count: 1,
  },
];

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className="relative rounded-[12px] size-12 bg-base-primary flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute bg-base-secondary text-neutral-50 rounded-full size-4 -top-1 -left-1 font-bold text-xs flex justify-center items-center">
          0
        </div>
        <svg
          className="size-6 fill-neutral-50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.6303C16.09 8.6303 15.75 8.2903 15.75 7.8803V6.5003C15.75 5.4503 15.3 4.4303 14.52 3.7203C13.73 3.0003 12.71 2.6703 11.63 2.7703C9.83 2.9403 8.25 4.7803 8.25 6.7003V7.6703C8.25 8.0803 7.91 8.4203 7.5 8.4203C7.09 8.4203 6.75 8.0803 6.75 7.6703V6.6903C6.75 4.0003 8.92 1.5203 11.49 1.2703C12.99 1.1303 14.43 1.6003 15.53 2.6103C16.62 3.6003 17.25 5.0203 17.25 6.5003V7.8803C17.25 8.2903 16.91 8.6303 16.5 8.6303Z"
            fill="white"
          />
          <path
            d="M15.0037 22.75H9.00372C4.38372 22.75 3.52372 20.6 3.30372 18.51L2.55372 12.52C2.44372 11.44 2.40372 9.89 3.45372 8.73C4.35372 7.73 5.84372 7.25 8.00372 7.25H16.0037C18.1737 7.25 19.6637 7.74 20.5537 8.73C21.5937 9.89 21.5637 11.44 21.4537 12.5L20.7037 18.51C20.4837 20.6 19.6237 22.75 15.0037 22.75ZM8.00372 8.75C6.31372 8.75 5.15372 9.08 4.56372 9.74C4.07372 10.28 3.91372 11.11 4.04372 12.35L4.79372 18.34C4.96372 19.94 5.40372 21.26 9.00372 21.26H15.0037C18.6037 21.26 19.0437 19.95 19.2137 18.36L19.9637 12.35C20.0937 11.13 19.9337 10.3 19.4437 9.75C18.8537 9.08 17.6937 8.75 16.0037 8.75H8.00372Z"
            fill="white"
          />
          <path
            d="M15.4163 13.1504C14.8563 13.1504 14.4062 12.7004 14.4062 12.1504C14.4062 11.6004 14.8562 11.1504 15.4062 11.1504C15.9562 11.1504 16.4062 11.6004 16.4062 12.1504C16.4062 12.7004 15.9663 13.1504 15.4163 13.1504Z"
            fill="white"
          />
          <path
            d="M8.41625 13.1504C7.85625 13.1504 7.40625 12.7004 7.40625 12.1504C7.40625 11.6004 7.85625 11.1504 8.40625 11.1504C8.95625 11.1504 9.40625 11.6004 9.40625 12.1504C9.40625 12.7004 8.96625 13.1504 8.41625 13.1504Z"
            fill="white"
          />
        </svg>
      </div>
      {isOpen && (
        <>
          <svg
            className="absolute top-14 left-4 z-50"
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.46717 1C6.23697 -0.333332 8.16147 -0.333334 8.93127 0.999999L14.1274 10C14.8972 11.3333 13.935 13 12.3954 13H2.00307C0.463467 13 -0.498785 11.3333 0.271015 10L5.46717 1Z"
              fill="#021526"
            />
          </svg>
          <div className="absolute bg-base-neutral shadow-[0px_4px_10px_10px_#00000014] rounded-[16px] left-0 top-16 w-80 h-[25rem] z-50 flex flex-col overflow-hidden">
            {productData.length > 1 ? (
              <>
                <div className="w-full h-full overflow-y-auto">
                  <div className="divide-y divide-neutral-400">
                    {productData.map((product) => (
                      <div className="w-full flex gap-4 p-5" key={product.id}>
                        <Image
                          className="rounded-[8px] object-cover border border-neutral-400"
                          src={product.image}
                          alt={
                            product.image
                              .split("/")
                              .pop()
                              ?.replace(/\.[^/.]+$/, "") ?? "عکسی وجود ندارد"
                          }
                          draggable="false"
                          width={73}
                          height={73}
                        />
                        <div className="flex flex-col gap-2">
                          <span className="font-medium text-sm text-black">
                            {product.name}
                          </span>
                          <span className="font-normal text-xs text-neutral-600">
                            {product.price.toLocaleString("fa-IR")} تومان
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="size-3 rounded-full bg-base-secondary" />
                            <span className="font-normal text-xs text-neutral-600">
                              {product.colorName}
                            </span>
                          </div>
                          <span className="font-normal text-xs text-neutral-600">
                            {product.count} عدد
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary-700 w-full h-2/4 mt-auto flex flex-col justify-evenly gap-2">
                  <div className="flex items-center-safe gap-2.5 pr-3">
                    <span className="text-base-neutral text-xs font-normal">
                      جمع کل:
                    </span>
                    <span className="text-base-neutral text-sm font-medium">
                      9,600,000 تومان
                    </span>
                  </div>
                  <div className="px-5">
                    <Link
                      href=""
                      className="bg-base-primary rounded-lg px-2 py-3 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="size-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.4998 15.7498C15.3198 15.7498 15.1198 15.7398 14.9398 15.7298C14.5698 15.7098 14.2697 15.4098 14.2397 15.0398C14.0197 12.2498 11.7498 9.98975 8.96976 9.76974C8.59976 9.73975 8.29975 9.43976 8.27975 9.06976C8.26975 8.88976 8.25977 8.68977 8.25977 8.50977C8.25977 4.50977 11.5098 1.25977 15.5098 1.25977C19.5098 1.25977 22.7598 4.50977 22.7598 8.50977C22.7598 12.5098 19.4998 15.7498 15.4998 15.7498ZM9.74976 8.35974C12.7298 8.88974 15.1198 11.2698 15.6398 14.2498C18.7498 14.1698 21.2498 11.6298 21.2498 8.49976C21.2498 5.32976 18.6698 2.74976 15.4998 2.74976C12.3798 2.74976 9.82976 5.24974 9.74976 8.35974Z"
                          fill="white"
                        />
                        <path
                          d="M8.5 22.75C4.5 22.75 1.25 19.5 1.25 15.5C1.25 11.5 4.5 8.25 8.5 8.25C8.68 8.25 8.88 8.25999 9.06 8.26999C12.59 8.54999 15.45 11.41 15.72 14.92C15.73 15.12 15.74 15.32 15.74 15.5C15.75 19.5 12.5 22.75 8.5 22.75ZM8.5 9.75C5.33 9.75 2.75 12.33 2.75 15.5C2.75 18.67 5.33 21.25 8.5 21.25C11.67 21.25 14.25 18.67 14.25 15.5C14.25 15.34 14.24 15.18 14.23 15.02C14.01 12.25 11.74 9.98001 8.95999 9.76001C8.81999 9.76001 8.66 9.75 8.5 9.75Z"
                          fill="white"
                        />
                        <path
                          d="M8.5 18.7503C8.23 18.7503 7.97 18.6002 7.84 18.3602L7.06 16.9403L5.64001 16.1603C5.40001 16.0303 5.25 15.7803 5.25 15.5003C5.25 15.2203 5.40001 14.9703 5.64001 14.8403L7.06 14.0603L7.84 12.6403C8.1 12.1603 8.89 12.1603 9.16 12.6403L9.94 14.0603L11.36 14.8403C11.6 14.9703 11.75 15.2203 11.75 15.5003C11.75 15.7803 11.6 16.0303 11.36 16.1603L9.94 16.9403L9.16 18.3602C9.03 18.6002 8.77 18.7503 8.5 18.7503ZM7.56 15.5003L7.97 15.7303C8.1 15.8003 8.19999 15.9003 8.26999 16.0303L8.5 16.4403L8.73001 16.0303C8.80001 15.9003 8.9 15.8003 9.03 15.7303L9.44 15.5003L9.03 15.2702C8.9 15.2002 8.80001 15.1003 8.73001 14.9703L8.5 14.5603L8.26999 14.9703C8.19999 15.1003 8.1 15.2002 7.97 15.2702L7.56 15.5003Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-base-neutral font-medium text-sm">
                        نهایی کردن خرید
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-5 w-full h-full flex flex-col items-center justify-center gap-5 ">
                <svg
                  width="65"
                  height="67"
                  viewBox="0 0 65 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7334 62.4966C26.7334 64.7966 24.8667 66.6633 22.5667 66.6633C20.2701 66.6633 18.3834 64.7966 18.3834 62.4966C18.3834 60.1966 20.2334 58.33 22.5334 58.33H22.5667C24.8667 58.33 26.7334 60.1966 26.7334 62.4966ZM49.2334 58.33H49.2C46.9 58.33 45.0501 60.1966 45.0501 62.4966C45.0501 64.7966 46.9334 66.6633 49.2334 66.6633C51.5334 66.6633 53.4001 64.7966 53.4001 62.4966C53.4001 60.1966 51.5334 58.33 49.2334 58.33ZM64.8499 20.8033L61.4701 41.3567C60.5935 46.1767 58.4133 51.6633 49.1667 51.6633H21.6134C17.0834 51.6633 13.1799 48.28 12.5399 43.7933L7.50651 8.57666C7.21318 6.53666 5.44338 5 3.38338 5H2.5C1.12 5 0 3.88 0 2.5C0 1.12 1.12 0 2.5 0H3.38664C7.91664 0 11.8201 3.38331 12.4601 7.86997L12.7665 10H55.8333C58.56 10 61.1269 11.2 62.8735 13.2933C64.6169 15.3833 65.3399 18.1233 64.8499 20.8033ZM59.03 16.4933C58.2366 15.5433 57.0701 14.9966 55.8301 14.9966H13.4766L17.4898 43.0866C17.7832 45.1266 19.5534 46.6633 21.6134 46.6633H49.1667C54.49 46.6633 55.7867 44.6766 56.5434 40.5066L59.9235 19.95C60.1535 18.69 59.8233 17.4433 59.03 16.4933ZM43.4334 24.0633C42.4568 23.0866 40.8733 23.0866 39.8966 24.0633L36.6634 27.2967L33.4302 24.0633C32.4535 23.0866 30.8701 23.0866 29.8934 24.0633C28.9167 25.04 28.9167 26.6233 29.8934 27.6L33.1266 30.8333L29.8934 34.0666C28.9167 35.0433 28.9167 36.6266 29.8934 37.6033C30.3801 38.09 31.0202 38.3366 31.6602 38.3366C32.3002 38.3366 32.9398 38.0933 33.4265 37.6033L36.6602 34.37L39.8934 37.6033C40.3801 38.09 41.0202 38.3366 41.6602 38.3366C42.3002 38.3366 42.9398 38.0933 43.4265 37.6033C44.4032 36.6266 44.4032 35.0433 43.4265 34.0666L40.1933 30.8333L43.4265 27.6C44.4098 26.62 44.4101 25.04 43.4334 24.0633Z"
                    fill="#606060"
                  />
                </svg>
                <span className="font-medium text-sm text-neutral-700">
                  سبد خرید شما در حال حاضر خالی است!
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
