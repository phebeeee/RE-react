import * as React from "react";

export function Header() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 justify-end px-7 py-4 w-full bg-white border border-gray-200 border-solid max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-7">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/8d02771ca438688ba9581734840efae869416cdb1221598d9d27846a4b261f97?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
          className="object-contain shrink-0 my-auto w-10 aspect-[1.05]"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/49d61bf7bb700a9e4b1f9e88925c0c7a790e0450ff26fe9ee67feeb9424e71a7?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
          className="object-contain grow shrink-0 aspect-[3.73] basis-0 w-fit"
          alt=""
        />
      </div>
      <div className="flex gap-10 my-auto text-xs font-black tracking-wide max-md:max-w-full">
        <div className="overflow-hidden gap-3 self-stretch px-5 py-3 text-blue-900 bg-gray-200 rounded-md">
          دليل المستخدم
        </div>
        <div className="flex gap-1.5 text-white">
          <button className="overflow-hidden gap-3 self-stretch px-5 py-3 bg-blue-900 rounded-md">
            مستخدم جديد
          </button>
          <button className="overflow-hidden gap-3 self-stretch px-5 py-3 bg-blue-900 rounded-md">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
}
