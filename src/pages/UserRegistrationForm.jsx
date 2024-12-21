import * as React from "react";
import { InputField } from "../components/userRegistration/InputField";
import { PhoneInput } from "../components/userRegistration/PhoneInput";

export default function UserRegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex overflow-hidden flex-col pb-9 bg-neutral-50">
      <header className="flex overflow-hidden flex-wrap gap-5 justify-between px-8 py-4 w-full bg-white border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/8d02771ca438688ba9581734840efae869416cdb1221598d9d27846a4b261f97?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
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
        <nav className="flex gap-10 my-auto text-xs font-black tracking-wide max-md:max-w-full">
          <button className="overflow-hidden gap-3 self-start px-5 py-3 text-white bg-blue-900 rounded-md">
            دليل المستخدم
          </button>
          <div className="flex flex-auto gap-5 items-start">
            <button className="overflow-hidden gap-3 self-stretch px-5 py-3 text-blue-900 bg-gray-200 rounded-md">
              مستخدم جديد
            </button>
            <button className="overflow-hidden gap-3 self-stretch px-5 py-3 text-white bg-blue-900 rounded-md">
              تسجيل الدخول
            </button>
          </div>
        </nav>
      </header>

      <main className="flex flex-col self-end mt-7 mr-14 w-full font-medium max-w-[1237px] max-md:mr-2.5 max-md:max-w-full">
        <h1 className="self-center text-5xl font-extrabold leading-none text-right text-black max-md:max-w-full max-md:text-4xl">
          تسجيل مستخدم جديد
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-5 justify-between mt-10 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex flex-col self-start mt-5 max-md:max-w-full">
            <div className="flex flex-col pl-6 max-md:pl-5 max-md:max-w-full">
              <InputField
                label="تأكيد اسم الباحث :"
                placeholder="تأكيد اسم الباحث"
                id="confirmResearcherName"
              />
              <InputField
                label="تأكيد البريد الالكتروني :"
                placeholder="تأكيد البريد الالكتروني"
                type="email"
                id="confirmEmail"
              />
            </div>
            <PhoneInput
              label="تأكيد رقم الهاتف :"
              placeholder="تأكيد رقم الهاتف"
              id="confirmPhone"
            />
            <InputField
              label="تأكيد الرقم القومى :"
              placeholder="قم بتأكيد الرقم القومى"
              id="confirmNationalId"
            />
          </div>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/c74c84a1a0abe6dd87916ee83b653fd14daab8cce54497c2b7a8bfd75b768836?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            alt=""
            className="object-contain shrink-0 my-auto w-12 aspect-square"
          />

          <div className="flex flex-col max-md:max-w-full">
            <div className="flex max-md:mr-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/5d50cf218abb139b1c7a3468a3ec78a303fe99c1912ee0c65d04bad1ddb504c7?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
                alt=""
                className="object-contain shrink-0 self-end mt-64 w-6 aspect-square max-md:mt-10"
              />
              <div className="flex flex-col grow shrink-0 pb-11 basis-0 w-fit max-md:max-w-full">
                <InputField
                  label="اسم الباحث : (رباعي باللغة العربية وفى حالة ادخال اسماء مركبة يرجى ادخالها بدون مسافات)"
                  placeholder="اسم الباحث"
                  id="researcherName"
                  required
                />
                <InputField
                  label="البريد الالكتروني :"
                  placeholder="البريد الالكتروني"
                  type="email"
                  id="email"
                  required
                />
                <InputField
                  label="الجنسية :"
                  placeholder="جمهورية مصر العربية"
                  id="nationality"
                />
              </div>
            </div>

            <div className="flex flex-col pl-1.5 mt-2.5 w-full max-md:max-w-full">
              <PhoneInput
                label="رقم الهاتف :"
                placeholder="رقم الهاتف"
                id="phone"
              />
              <InputField
                label="الرقم القومى :"
                placeholder="قم بادخال الرقم القومي"
                id="nationalId"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-between items-start self-end mt-7 max-w-full text-xl leading-tight text-center text-white w-[854px]">
            <button
              type="submit"
              className="overflow-hidden gap-5 self-stretch px-5 py-2 mt-4 bg-blue-900 rounded-xl min-h-[40px]"
            >
              حفظ
            </button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/83efe7883abbba7a354611b916af61a930ae8da5b35c09685137ae102acb71d3?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
              alt=""
              className="object-contain shrink-0 aspect-[1.1] w-[57px]"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
