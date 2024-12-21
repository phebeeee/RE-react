import * as React from "react";
import { InputField } from "../components/auth/InputField";
import { Button } from "../components/auth/Button";

export default function LoginPage() {
  return (
    <div className="flex overflow-hidden relative flex-col items-center bg-neutral-50">
      <nav className="overflow-hidden z-0 py-11 pr-6 pl-20 w-full bg-white border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden gap-3 self-stretch px-5 py-3 w-full text-xs font-black tracking-wide text-white bg-blue-900 rounded-md max-md:mt-10">
              دليل المستخدم
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-4 w-full text-xs font-black tracking-wide max-md:mt-10">
              <div className="overflow-hidden gap-3 self-stretch px-5 py-3 text-white bg-blue-900 rounded-md">
                مستخدم جديد
              </div>
              <div className="overflow-hidden gap-3 self-stretch px-5 py-3 text-blue-900 bg-gray-200 rounded-md">
                تسجيل الدخول
              </div>
            </div>
          </div>
        </div>
      </nav>

      <h1 className="z-0 mt-12 text-5xl font-extrabold leading-4 text-black max-md:mt-10 max-md:text-4xl max-md:leading-4">
        تسجيل الدخول
      </h1>

      <form className="flex z-0 flex-col justify-center mt-12 max-w-full font-medium rounded-lg min-h-[437px] w-[444px] max-md:mt-10">
        <div className="flex flex-col justify-between w-full min-h-[314px] max-md:max-w-full">
          <InputField
            label="البريد الالكتروني او الرقم القومي"
            placeholder="أدخل البريد الللكتروني او الرقم القومي"
          />

          <div className="mt-7">
            <InputField
              label="كود تأكيد"
              placeholder="كود التاكيد"
              type="password"
            />
          </div>

          <div className="flex mt-7 w-full min-h-[64px] max-md:max-w-full" />

          <Button>تسجيل دخول</Button>
        </div>

        <Button variant="secondary" className="mt-8">
          نسيت الكود؟
        </Button>
      </form>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/628173ef65e71c37e73afd5c8961603b64bed2110266c67f49969ff4977867cc?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
        alt=""
        className="object-contain z-0 mt-12 aspect-[1.1] w-[57px] max-md:mt-10"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/8d02771ca438688ba9581734840efae869416cdb1221598d9d27846a4b261f97?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
        alt=""
        className="object-contain absolute z-0 self-start w-10 aspect-[1.05] h-[38px] left-[33px] top-[42px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/49d61bf7bb700a9e4b1f9e88925c0c7a790e0450ff26fe9ee67feeb9424e71a7?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
        alt=""
        className="object-contain absolute z-0 self-start max-w-full aspect-[3.73] h-[91px] left-[813px] top-[27px] w-[340px]"
      />
    </div>
  );
}
