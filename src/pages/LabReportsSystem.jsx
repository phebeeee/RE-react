// import * as React from "react";
// import NavButton from "../components/NavButton";
// import ContactInfo from "../components/ContactInfo";

// export default function LabReportsSystem() {
//   const navButtons = ["دليل المستخدم", "مستخدم جديد", "تسجيل الدخول"];

//   const contactInfo = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14e866b3e4c68c93656ffc5bc930ca7f2bd15ebc29153452ad9a08f0e876802?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea",
//       text: "scu@scu.eg",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/009fee590df77adfc5a93dc3a4014c57a9a18791ab19d71666052249a777213c?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea",
//       text: "00235738583/00235716347",
//     },
//   ];

//   return (
//     <div className="flex overflow-hidden flex-col bg-neutral-50">
//       <header className="flex overflow-hidden z-10 flex-wrap gap-5 justify-between py-4 pr-3 pl-8 w-full bg-white border border-gray-200 border-solid max-md:pl-5 max-md:max-w-full">
//         <div className="flex gap-7">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d02771ca438688ba9581734840efae869416cdb1221598d9d27846a4b261f97?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
//             alt="Lab Reports System Logo"
//             className="object-contain shrink-0 my-auto w-10 aspect-[1.05]"
//           />
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d61bf7bb700a9e4b1f9e88925c0c7a790e0450ff26fe9ee67feeb9424e71a7?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
//             alt="System Banner"
//             className="object-contain grow shrink-0 aspect-[3.73] basis-0 w-fit"
//           />
//         </div>
//         <nav className="flex gap-10 my-auto text-xs font-black tracking-wide text-white max-md:max-w-full">
//           <NavButton>{navButtons[0]}</NavButton>
//           <div className="flex flex-auto gap-3">
//             {navButtons.slice(1).map((text, index) => (
//               <NavButton key={index}>{text}</NavButton>
//             ))}
//           </div>
//         </nav>
//       </header>

//       <main className="flex relative flex-col px-px pt-32 -mt-1 w-full font-black text-black min-h-[781px] max-md:pt-24 max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c93f9b55edb62b73588112327cdc83b1f8846befd0d737482ad721621e2d56?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
//           alt=""
//           className="object-cover absolute inset-0 size-full"
//         />
//         <h1 className="relative self-center text-6xl tracking-wider text-center max-md:max-w-full max-md:text-4xl">
//           <span className="text-7xl">نظام اداره تقارير معامل</span>
//           <br /> التأثير بالمكتبة الرقمية
//         </h1>
//         <h2 className="relative self-end mt-7 mr-8 text-4xl tracking-wider max-md:mr-2.5">
//           رؤيتنا
//         </h2>
//         <p className="relative self-center mt-3.5 text-xl font-bold tracking-wide text-right max-md:max-w-full">
//           تم تصميم نظام إدارة تقارير معامل التأثير بالتعاون بين وحدة المكتبات
//           الرقمية ووحدة نظم المعلومات الإدارية ودعم اتخاذ القرار بالمجلس الأعلى
//           للجامعات، بهدف خدمة اللجان العلمية وأعضاء هيئة التدريس المتقدمين
//           للترقية إلى درجتي أستاذ وأستاذ مساعد.
//           <br />
//           <br />
//           يسهل النظام على أعضاء هيئة التدريس التقديم للحصول على تقارير معامل
//           التأثير إلكترونيًا، مما يوفر الوقت والجهد ويساهم في تسريع إجراءات
//           الترقية.
//         </p>

//         <footer className="flex relative flex-wrap gap-5 justify-between px-11 py-2 mt-2.5 w-full text-lg font-bold tracking-wide text-center whitespace-nowrap bg-red-500 text-slate-900 max-md:px-5 max-md:max-w-full">
//           <div className="flex gap-10 my-auto max-md:max-w-full">
//             {contactInfo.map((info, index) => (
//               <ContactInfo key={index} icon={info.icon} text={info.text} />
//             ))}
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/83efe7883abbba7a354611b916af61a930ae8da5b35c09685137ae102acb71d3?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
//             alt=""
//             className="object-contain shrink-0 aspect-[1.1] w-[57px]"
//           />
//         </footer>
//       </main>
//     </div>
//   );
// }
// import React from "react";
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton";
import ContactInfo from "../components/ContactInfo";

export default function LabReportsSystem() {
  const navButtons = ["دليل المستخدم", "مستخدم جديد", "تسجيل الدخول"];

  const contactInfo = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14e866b3e4c68c93656ffc5bc930ca7f2bd15ebc29153452ad9a08f0e876802?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea",
      text: "scu@scu.eg",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/009fee590df77adfc5a93dc3a4014c57a9a18791ab19d71666052249a777213c?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea",
      text: "00235738583/00235716347",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-neutral-50">
      <header className="flex overflow-hidden z-10 flex-wrap gap-5 justify-between py-4 pr-3 pl-8 w-full bg-white border border-gray-200 border-solid max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d02771ca438688ba9581734840efae869416cdb1221598d9d27846a4b261f97?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
            alt="Lab Reports System Logo"
            className="object-contain shrink-0 my-auto w-10 aspect-[1.05]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d61bf7bb700a9e4b1f9e88925c0c7a790e0450ff26fe9ee67feeb9424e71a7?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
            alt="System Banner"
            className="object-contain grow shrink-0 aspect-[3.73] basis-0 w-fit"
          />
        </div>
        <nav className="flex gap-10 my-auto text-xs font-black tracking-wide text-white max-md:max-w-full">
          <NavButton>{navButtons[0]}</NavButton>
          <div className="flex flex-auto gap-3">
            <NavButton>{navButtons[1]}</NavButton>
            <Link to="/login">
              <button className="overflow-hidden gap-3 self-stretch px-5 py-3 text-white bg-blue-900 rounded-md">
                تسجيل الدخول
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex relative flex-col px-px pt-32 -mt-1 w-full font-black text-black min-h-[781px] max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c93f9b55edb62b73588112327cdc83b1f8846befd0d737482ad721621e2d56?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <h1 className="relative self-center text-6xl tracking-wider text-center max-md:max-w-full max-md:text-4xl">
          <span className="text-7xl">نظام اداره تقارير معامل</span>
          <br /> التأثير بالمكتبة الرقمية
        </h1>
        <h2 className="relative self-end mt-7 mr-8 text-4xl tracking-wider max-md:mr-2.5">
          رؤيتنا
        </h2>
        <p className="relative self-center mt-3.5 text-xl font-bold tracking-wide text-right max-md:max-w-full">
          تم تصميم نظام إدارة تقارير معامل التأثير بالتعاون بين وحدة المكتبات
          الرقمية ووحدة نظم المعلومات الإدارية ودعم اتخاذ القرار بالمجلس الأعلى
          للجامعات، بهدف خدمة اللجان العلمية وأعضاء هيئة التدريس المتقدمين
          للترقية إلى درجتي أستاذ وأستاذ مساعد.
          <br />
          <br />
          يسهل النظام على أعضاء هيئة التدريس التقديم للحصول على تقارير معامل
          التأثير إلكترونيًا، مما يوفر الوقت والجهد ويساهم في تسريع إجراءات
          الترقية.
        </p>

        <footer className="flex relative flex-wrap gap-5 justify-between px-11 py-2 mt-2.5 w-full text-lg font-bold tracking-wide text-center whitespace-nowrap bg-red-500 text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-10 my-auto max-md:max-w-full">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} icon={info.icon} text={info.text} />
            ))}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83efe7883abbba7a354611b916af61a930ae8da5b35c09685137ae102acb71d3?placeholderIfAbsent=true&apiKey=bd6ea1ec780e47e38741d359bb1fedea"
            alt="Footer Image"
            className="object-contain shrink-0 aspect-[1.1] w-[57px]"
          />
        </footer>
      </main>
    </div>
  );
}
