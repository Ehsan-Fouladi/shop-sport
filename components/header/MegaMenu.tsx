"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <div
      className="relative w-full max-w-7xl"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className=" bg-neutral-100 rounded-[16px] py-4 px-10 flex items-center justify-between">
        <ul className="font-bold text-neutral-900 text-base flex items-center shrink-0 gap-10">
          <li
            className={`transition-colors duration-300 ${activeMenu === "man" ? "text-base-primary cursor-context-menu" : ""}`}
            onMouseEnter={() => setActiveMenu("man")}
          >
            مردانه
          </li>
          <li
            className={`transition-colors duration-300 ${activeMenu === "woman" ? "text-base-primary cursor-context-menu" : ""}`}
            onMouseEnter={() => setActiveMenu("woman")}
          >
            زنانه
          </li>
          <li
            className={`transition-colors duration-300 ${activeMenu === "children" ? "text-base-primary cursor-context-menu" : ""}`}
            onMouseEnter={() => setActiveMenu("children")}
          >
            بچگانه
          </li>
          <li
            className={`transition-colors duration-300 ${activeMenu === "equipment" ? "text-base-primary cursor-context-menu" : ""}`}
            onMouseEnter={() => setActiveMenu("equipment")}
          >
            لوازم ورزشی
          </li>
          <li
            className={`transition-colors duration-300 ${activeMenu === "accessories" ? "text-base-primary cursor-context-menu" : ""}`}
            onMouseEnter={() => setActiveMenu("accessories")}
          >
            شیکر و جاگ
          </li>
        </ul>
        <div className="flex items-center justify-end gap-10">
          <Link href="" className="flex items-center gap-1">
            <svg
              className="size-5 fill-base-primary"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2451 17.0027C12.8476 17.0027 12.3376 16.8752 11.7001 16.5002L9.45759 15.1727C9.22509 15.0377 8.77509 15.0377 8.55009 15.1727L6.30009 16.5002C4.97259 17.2877 4.19259 16.9727 3.84009 16.7177C3.49509 16.4627 2.95509 15.8102 3.30759 14.3102L3.84009 12.0077C3.90009 11.7677 3.78009 11.3552 3.60009 11.1752L1.74009 9.31524C0.810088 8.38523 0.885088 7.59023 1.01259 7.20023C1.14009 6.81024 1.54509 6.12023 2.83509 5.90273L5.22759 5.50523C5.45259 5.46773 5.77509 5.22773 5.87259 5.02523L7.20009 2.37773C7.80009 1.17023 8.58759 0.990234 9.00009 0.990234C9.41259 0.990234 10.2001 1.17023 10.8001 2.37773L12.1201 5.01773C12.2251 5.22023 12.5476 5.46023 12.7726 5.49773L15.1651 5.89523C16.4626 6.11273 16.8676 6.80273 16.9876 7.19273C17.1076 7.58273 17.1826 8.37773 16.2601 9.30773L14.4001 11.1752C14.2201 11.3552 14.1076 11.7602 14.1601 12.0077L14.6926 14.3102C15.0376 15.8102 14.5051 16.4627 14.1601 16.7177C13.9726 16.8527 13.6726 17.0027 13.2451 17.0027ZM9.00009 13.9427C9.36759 13.9427 9.73509 14.0327 10.0276 14.2052L12.2701 15.5327C12.9226 15.9227 13.3351 15.9227 13.4926 15.8102C13.6501 15.6977 13.7626 15.3002 13.5976 14.5652L13.0651 12.2627C12.9226 11.6402 13.1551 10.8377 13.6051 10.3802L15.4651 8.52023C15.8326 8.15273 15.9976 7.79274 15.9226 7.54523C15.8401 7.29773 15.4951 7.09523 14.9851 7.01273L12.5926 6.61523C12.0151 6.51773 11.3851 6.05273 11.1226 5.52773L9.80259 2.88773C9.56259 2.40773 9.26259 2.12273 9.00009 2.12273C8.73759 2.12273 8.43759 2.40773 8.20509 2.88773L6.87759 5.52773C6.61509 6.05273 5.98509 6.51773 5.40759 6.61523L3.02259 7.01273C2.51259 7.09523 2.16759 7.29773 2.08509 7.54523C2.00259 7.79274 2.17509 8.16023 2.54259 8.52023L4.40259 10.3802C4.85259 10.8302 5.08509 11.6402 4.94259 12.2627L4.41009 14.5652C4.23759 15.3077 4.35759 15.6977 4.51509 15.8102C4.67259 15.9227 5.07759 15.9152 5.73759 15.5327L7.98009 14.2052C8.26509 14.0327 8.63259 13.9427 9.00009 13.9427Z"
                fill="#FA541C"
              />
            </svg>
            <span className="text-neutral-900 font-bold text-base">
              جدید ترین محصولات
            </span>
          </Link>
          <Link href="" className="flex items-center gap-1">
            <svg
              className="size-5 fill-base-primary"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49146 17.062C7.34146 17.062 7.22146 17.032 7.13146 16.9945C6.83146 16.882 6.32146 16.5145 6.32146 15.352V10.5145H4.56646C3.56146 10.5145 3.20146 10.042 3.07396 9.76449C2.94646 9.47949 2.83396 8.90199 3.49396 8.14449L9.17146 1.69449C9.93646 0.824486 10.559 0.884486 10.859 0.996986C11.159 1.10949 11.669 1.47699 11.669 2.63949V7.47699H13.424C14.429 7.47699 14.789 7.94949 14.9165 8.22699C15.044 8.51199 15.1565 9.08949 14.4965 9.84699L8.81896 16.297C8.28646 16.9045 7.82146 17.062 7.49146 17.062ZM10.4465 2.05449C10.424 2.08449 10.2665 2.15949 10.019 2.44449L4.34146 8.89449C4.13146 9.13449 4.10146 9.28449 4.10146 9.31449C4.11646 9.32199 4.25146 9.39699 4.56646 9.39699H6.88396C7.19146 9.39699 7.44646 9.65199 7.44646 9.95949V15.3595C7.44646 15.7345 7.51396 15.8995 7.54396 15.9445C7.56646 15.9145 7.72396 15.8395 7.97146 15.5545L13.649 9.10449C13.859 8.86449 13.889 8.71449 13.889 8.68449C13.874 8.67699 13.739 8.60199 13.424 8.60199H11.1065C10.799 8.60199 10.544 8.34699 10.544 8.03949V2.63949C10.5515 2.26449 10.4765 2.10699 10.4465 2.05449Z"
                fill="#FA541C"
              />
            </svg>
            <span className="text-neutral-900 font-bold text-base">
              تخفیفات ویژه
            </span>
          </Link>
          <Link href="" className="flex items-center gap-1">
            <svg
              className="size-5 fill-base-primary"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00031 17.0624C8.55031 17.0624 8.10781 16.9574 7.74781 16.7549L4.20031 14.7074C2.73031 13.7174 2.63281 13.5374 2.63281 11.9849V8.26492C2.63281 6.71242 2.73031 6.53242 4.17031 5.56492L7.75531 3.49492C8.46781 3.08242 9.54031 3.08242 10.2528 3.49492L13.8003 5.54242C15.2703 6.53242 15.3678 6.71242 15.3678 8.26492V11.9849C15.3678 13.5374 15.2703 13.7174 13.8303 14.6849L10.2453 16.7549C9.89281 16.9649 9.44281 17.0624 9.00031 17.0624ZM9.00031 4.31242C8.74531 4.31242 8.49031 4.36492 8.31031 4.46992L4.76281 6.51742C3.75781 7.19992 3.75781 7.19992 3.75781 8.26492V11.9849C3.75781 13.0499 3.75781 13.0499 4.80031 13.7549L8.31781 15.7799C8.67781 15.9899 9.33031 15.9899 9.69031 15.7799L13.2378 13.7324C14.2428 13.0499 14.2428 13.0499 14.2428 11.9849V8.26492C14.2428 7.19992 14.2428 7.19992 13.2003 6.49492L9.68281 4.46992C9.51031 4.36492 9.25531 4.31242 9.00031 4.31242Z"
                fill="#FA541C"
              />
              <path
                d="M13.125 6.285C12.8175 6.285 12.5625 6.03 12.5625 5.7225V3.75C12.5625 2.565 12.06 2.0625 10.875 2.0625H7.125C5.94 2.0625 5.4375 2.565 5.4375 3.75V5.67C5.4375 5.9775 5.1825 6.2325 4.875 6.2325C4.5675 6.2325 4.3125 5.985 4.3125 5.67V3.75C4.3125 1.935 5.31 0.9375 7.125 0.9375H10.875C12.69 0.9375 13.6875 1.935 13.6875 3.75V5.7225C13.6875 6.03 13.4325 6.285 13.125 6.285Z"
                fill="#FA541C"
              />
              <path
                d="M10.2212 13.2223C10.0637 13.2223 9.89871 13.1923 9.73371 13.1248L8.99871 12.8398L8.26371 13.1323C7.86621 13.2898 7.46121 13.2523 7.16121 13.0348C6.86121 12.8173 6.70371 12.4423 6.72621 12.0148L6.77121 11.2273L6.26871 10.6198C5.99871 10.2823 5.90871 9.89234 6.02871 9.53234C6.14121 9.17984 6.44871 8.90984 6.86121 8.80484L7.62621 8.60984L8.05371 7.94234C8.51121 7.22234 9.49371 7.22234 9.95121 7.94234L10.3787 8.60984L11.1437 8.80484C11.5562 8.90984 11.8637 9.17984 11.9762 9.53234C12.0887 9.88484 11.9987 10.2823 11.7287 10.6123L11.2262 11.2198L11.2712 12.0073C11.2937 12.4348 11.1362 12.8023 10.8362 13.0273C10.6562 13.1548 10.4462 13.2223 10.2212 13.2223ZM7.13871 9.89984L7.64121 10.5073C7.81371 10.7098 7.91121 11.0323 7.89621 11.2948L7.85121 12.0823L8.58621 11.7898C8.83371 11.6923 9.16371 11.6923 9.41121 11.7898L10.1462 12.0823L10.1012 11.2948C10.0862 11.0323 10.1837 10.7173 10.3562 10.5073L10.8587 9.89984L10.0937 9.70484C9.83871 9.63734 9.56871 9.44234 9.42621 9.22484L9.00621 8.56484L8.57871 9.22484C8.43621 9.44984 8.16621 9.64484 7.91121 9.71234L7.13871 9.89984Z"
                fill="#FA541C"
              />
            </svg>
            <span className="text-neutral-900 font-bold text-base">
              پرفروش ترین ها
            </span>
          </Link>
        </div>
      </nav>
      {activeMenu === "man" && (
        <div
          className="absolute z-50 w-full pt-3"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="rounded-[16px] bg-base-neutral p-12 shadow-[0px_0px_50px_10px_#00000014]">
            <div className="w-full grid grid-flow-col grid-cols-3">
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  لباس ورزشی مردانه
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  ست لباس ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  تیشرت ,بلوز و استرچ ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  رکابی ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کیت ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  سویشرت
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  هودی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  مایو
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    لباس ورزشی مردانه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوار ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوارک ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    لگ و نیم لگ
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جاگر
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    اکسسوری
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جوراب ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کلاه ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    دستبند ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    هدبند
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  کفش ورزشی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کفش کوهنوردی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کفش اسکیت
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کفش بسکتبال
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کفش کشتی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کتانی رانینگ
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  استوک
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  دمبایی
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  برند بیشنهادی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  nike
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  the north face
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  under armour
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  adidas
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  fila
                </Link>
              </div>
              <Image
                className="self-end w-auto h-auto"
                src="/home/man-sitting-with-ball.webp"
                alt="man-sitting-with-ball"
                width={261}
                height={348}
                draggable="false"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
      {activeMenu === "woman" && (
        <div
          className="absolute z-50 w-full pt-3"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="rounded-[16px] bg-base-neutral p-12 shadow-[0px_0px_50px_10px_#00000014]">
            <div className="w-full grid grid-flow-col grid-cols-3">
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  لباس ورزشی زنانه
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  ست لباس ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  تیشرت ,بلوز و استرچ ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  رکابی ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کیت ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  سویشرت
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  هودی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  مایو
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    شلوار ورزشی زنانه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوار ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوارک ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    لگ و نیم لگ
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جاگر
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    اکسسوری
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جوراب ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کلاه ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    دستبند ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    هدبند
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    کفش ورزشی
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش کوهنوردی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش اسکیت
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش بسکتبال
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش کشتی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کتانی رانینگ
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    استوک
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    دمبایی
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    جوراب ورزشی
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جوراب ورزشی
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  برند بیشنهادی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  nike
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  the north face
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  under armour
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  adidas
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  fila
                </Link>
              </div>
              <Image
                className="self-end w-72 h-auto"
                src="/home/woman.webp"
                alt="woman"
                width={249}
                height={319}
                draggable="false"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
      {activeMenu === "children" && (
        <div
          className="absolute z-50 w-full pt-3"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="rounded-[16px] bg-base-neutral p-12 shadow-[0px_0px_50px_10px_#00000014]">
            <div className="w-full grid grid-flow-col grid-cols-3">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    لباس ورزشی دخترانه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    ست لباس ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    تیشرت ,بلوز و استرچ ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    رکابی ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کیت ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    سویشرت
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    هودی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    مایو
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    لباس ورزشی دخترانه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوار ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوارک ورزشی
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    لباس ورزشی بسرونه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    ست لباس ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    تیشرت ,بلوز و استرچ ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    رکابی ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کیت ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    سویشرت
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    هودی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    مایو
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    شلوار ورزشی بسرونه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوار ورزشی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    شلوارک ورزشی
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    کفش ورزشی دخترانه
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش کوهنوردی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش اسکیت
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش بسکتبال
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    استوک
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    کفش ورزشی
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش کوهنوردی
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش اسکیت
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    کفش بسکتبال
                  </Link>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    استوک
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="font-normal text-xs text-base-primary">
                    جوراب ورزشی
                  </span>
                  <Link
                    href=""
                    className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                  >
                    جوراب ورزشی
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  برند بیشنهادی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  nike
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  the north face
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  under armour
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  adidas
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  fila
                </Link>
              </div>
              <Image
                className="self-end w-72 h-auto"
                src="/home/children-sport.webp"
                alt="children-sport"
                width={283}
                height={377}
                draggable="false"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
      {activeMenu === "equipment" && (
        <div
          className="absolute z-50 w-full pt-3"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="rounded-[16px] bg-base-neutral p-12 shadow-[0px_0px_50px_10px_#00000014]">
            <div className="w-full grid grid-flow-col grid-cols-4">
              <div className="flex flex-col gap-6">
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  وزنه و دمبل
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  لوازم یوگا و بیلاتس
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  لوازم فیتنس و بدنسازی
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  مچ بند ,ساق بند ,زانو بند
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  ساک ورزشی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  وسایل شنا
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  کوله و شوزبگ
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  لوازم دیگر
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  برند بیشنهادی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  nike
                </Link>

                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  under armour
                </Link>
              </div>
              <Image
                className="w-52 h-auto"
                src="/home/accessory.webp"
                alt="accessory"
                width={204}
                height={183}
                draggable="false"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
      {activeMenu === "accessories" && (
        <div
          className="absolute z-50 w-full pt-3"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="rounded-[16px] bg-base-neutral p-12 shadow-[0px_0px_50px_10px_#00000014]">
            <div className="w-full grid grid-flow-col grid-cols-4">
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  شیکر
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  وزنه و دمبل
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  شیکر بدنسازی
                </Link>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  مخلوط کن و شیکر برقی
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  ماگ و فلاسک
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  ماگ و فلاسک
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  جا بودری و جا قرصی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  جا بودری و جا قرصی
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-normal text-xs text-base-primary">
                  قمقمه ورزشی
                </span>
                <Link
                  href=""
                  className="font-normal text-sm text-neutral-900 hover:text-base-primary"
                >
                  قمقمه ورزشی
                </Link>
              </div>
              <Image
                className="w-40 h-auto"
                src="/home/accessories.webp"
                alt="accessories"
                width={136}
                height={153}
                draggable="false"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
