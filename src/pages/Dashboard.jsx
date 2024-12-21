import * as React from "react";

import SidebarItem from "../components/dashboard/components/SidebarItem";
import PaginationButton from "../components/dashboard/components/PaginationButton";
import ActionButton from "../components/dashboard/components/ActionButton";

const sidebarItems = [
  { text: "رئيسية", isActive: true },
  { text: "عن المجلس", isActive: false },
  { text: "إدارة المجلس", isActive: false },
  { text: "الخدمات الإلكترونية", isActive: false },
  { text: "الطلاب", isActive: false },
  { text: "أعضاء هيئة التدريس", isActive: false },
  { text: "الجامعات و المؤسسات", isActive: false },
];

export default function Dashboard() {
  return (
    <div className="flex overflow-hidden flex-col bg-neutral-50">
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-9 py-4 w-full bg-white border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/409dd880904b86cf8d7f3a7119e534f94395ac0a79608e363d3cf4aae9ebf198?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            alt=""
            className="object-contain shrink-0 my-auto w-10 aspect-[1.05]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/49d61bf7bb700a9e4b1f9e88925c0c7a790e0450ff26fe9ee67feeb9424e71a7?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            alt=""
            className="object-contain grow shrink-0 aspect-[3.73] basis-0 w-fit"
          />
        </div>
        <div className="flex gap-7 items-start my-auto text-xs font-black tracking-wide text-white max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/fa02d08eba252ddc258265ce0ea470f07f194047b3bb81789eb517b6331c9ac8?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            alt=""
            className="object-contain aspect-[7.81] w-[351px]"
          />
          <div className="overflow-hidden gap-3 self-stretch px-5 py-3 my-auto bg-blue-900 rounded-md">
            دليل المستخدم
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/d8b02fcfc2c5d19e096bbca5083e94da5c66c13a24f7d481f3dc0f678d775745?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            alt=""
            className="object-contain shrink-0 aspect-[1.02] w-[45px]"
          />
        </div>
      </header>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <aside className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow pt-4 pb-36 w-full text-sm font-medium text-right text-white rounded-md bg-zinc-100 shadow-[0px_5px_5px_rgba(0,0,0,0.25)] max-md:pb-24">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/826a05bbce17a3bd27288749011ed95320509e2a636d84b3d37078fa4c80a2dc?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                alt=""
                className="object-contain self-end w-6 aspect-square max-md:mr-2.5"
              />
              <div className="flex flex-col px-6 mt-2.5 w-full max-md:px-5">
                {sidebarItems.map((item, index) => (
                  <SidebarItem key={index} {...item} />
                ))}
                <div className="overflow-hidden gap-3 self-stretch px-5 py-4 mt-5 font-extrabold tracking-wide text-center text-pink-50 bg-red-600 rounded-md min-h-[51px] w-[139px]">
                  تسجيل الخروج
                </div>
              </div>
            </div>
          </aside>
          <main className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-end mr-7 w-full max-w-[1010px] max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between max-w-full font-extrabold w-[971px]">
                  <button
                    className="flex overflow-hidden gap-3 items-center py-3 pr-2 pl-5 text-3xl tracking-wider text-center text-pink-50 bg-blue-900 rounded-md min-h-[67px]"
                    tabIndex="0"
                  >
                    <div className="self-stretch my-auto w-[185px]">
                      طلب جديد
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/3f9fe98a40a1da50be9a3e7ae1b218f577950cc268e93f003cb1940f14946130?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[43px]"
                    />
                  </button>
                  <div className="self-start text-5xl leading-none text-right text-black max-md:text-4xl">
                    الصفحه الرئيسيه
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 self-center mt-14 max-w-full w-[905px] max-md:mt-10">
                  <div className="flex flex-col my-auto text-base font-black tracking-wide text-center text-white whitespace-nowrap">
                    {[1, 2, 3].map((_, index) => (
                      <ActionButton key={index} />
                    ))}
                  </div>
                  <div className="flex flex-wrap flex-auto gap-2.5">
                    <div className="flex flex-col grow shrink-0 whitespace-nowrap basis-0 w-fit max-md:max-w-full">
                      <div className="flex relative flex-col items-start px-14 pt-28 pb-11 w-full text-xl font-semibold tracking-wide text-black rounded-lg min-h-[412px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/371a0f6a18e3102c4b03c98a4bec4fd7e488d681f5a94cbb29e36f3eb54c4375?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                          alt=""
                          className="object-cover absolute inset-0 size-full"
                        />
                        <div className="overflow-hidden relative px-2 pt-5 pb-0.5 bg-zinc-100 w-[31px]">
                          5
                        </div>
                        <div className="overflow-hidden relative z-10 px-2.5 pt-7 pb-0 mt-16 bg-white w-[31px] max-md:mt-10">
                          8
                        </div>
                        <div className="overflow-hidden relative px-3 pt-4 pb-1.5 mt-20 bg-zinc-100 w-[31px] max-md:mt-10">
                          6
                        </div>
                      </div>
                      <nav
                        className="flex gap-2 items-center self-center mt-9 ml-6 text-sm font-bold leading-none text-center text-gray-800"
                        aria-label="Pagination"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/bdf9f6bd4bf3a126480b2b416f2bae804f0e029fc07fa7b6128bfc487afce3f3?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                          alt="Previous page"
                          className="object-contain shrink-0 self-stretch my-auto w-8 rounded aspect-square"
                        />
                        <PaginationButton number="1" isActive={true} />
                        <PaginationButton number="2" isActive={false} />
                        <div className="self-stretch px-3 pt-1.5 pb-6 my-auto w-8 h-8 bg-white rounded border border-solid border-zinc-200">
                          ...
                        </div>
                        <PaginationButton number="5" isActive={false} />
                        <PaginationButton number="6" isActive={false} />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/941648c99a6609e412399d44ab19bb82bb08037cf47dafdff72df94bfd6baae4?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                          alt="Next page"
                          className="object-contain shrink-0 self-stretch my-auto w-8 rounded aspect-square"
                        />
                      </nav>
                    </div>
                    <div className="flex flex-col my-auto">
                      {[1, 2, 3].map((_, index) => (
                        <div
                          key={index}
                          className="flex gap-4 mt-20 first:mt-0 max-md:mt-10"
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/e589d5bd72800579f2d524cb89b7f70cde213bafb40ca781090aec1e26b3bf3a?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                            alt=""
                            className="object-contain shrink-0 aspect-[0.97] w-[34px]"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/1e4a3b1817fd4bc8bc2ad7d51e8d94c30021b9baef601db000034903fdc5927a?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                            alt=""
                            className="object-contain shrink-0 aspect-square w-[35px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/83efe7883abbba7a354611b916af61a930ae8da5b35c09685137ae102acb71d3?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                  alt=""
                  className="object-contain self-end mt-4 aspect-[1.1] w-[57px]"
                />
              </div>
              <footer className="flex flex-wrap gap-10 pt-4 pr-20 pb-3 pl-6 w-full text-base font-bold tracking-wide text-center whitespace-nowrap bg-red-500 text-slate-900 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2.5 self-start leading-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/c644b7391de221df72bdc275af30af10f61dedc93b0efceb5aa678777f15cf77?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                    alt=""
                    className="object-contain shrink-0 w-5 aspect-[1.18]"
                  />
                  <div>
                    scu@scu.eg
                    <br />
                  </div>
                </div>
                <div className="flex gap-2.5 leading-none">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/9ca64802a71e693701aff41582f12e1564664ae79e522686d9883d0f4be9be4e?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                    alt=""
                    className="object-contain shrink-0 aspect-square w-[23px]"
                  />
                  <div className="basis-auto">00235738583/00235716347</div>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
