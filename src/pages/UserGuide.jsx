import * as React from "react";
import { Header } from "../components/userGuide/components/Header";
import { VideoGuide } from "../components/userGuide/components/VideoGuide";
import { StepsList } from "../components/userGuide/components/StepsList";
import {
  videoGuides,
  registrationSteps,
  basicDataSteps,
  acceptedRequestSteps,
  rejectedRequestSteps,
} from "../components/userGuide/data/guideData";

export default function UserGuide() {
  return (
    <div className="flex overflow-hidden flex-col pb-10 bg-neutral-50">
      <Header />
      <div className="self-center mt-16 text-5xl font-extrabold leading-none text-black max-md:mt-10 max-md:text-4xl">
        دليل المستخدم
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-end mt-11 w-full max-w-[1330px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col self-start text-xs font-black tracking-wide text-blue-900">
          {videoGuides.map((guide, index) => (
            <div
              key={guide.id}
              className={index > 0 ? "mt-32 max-md:mt-10" : ""}
            >
              <VideoGuide text={guide.text} />
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-1.5 text-5xl font-extrabold leading-4 text-right text-black max-md:max-w-full max-md:text-4xl max-md:leading-4">
          <div className="max-md:max-w-full max-md:text-4xl max-md:leading-4">
            <span className="text-xl font-medium">
              التقدم للحصول على تقرير معامل التأثير و تقرير فحص الاقتباس
            </span>
            <br />
            <StepsList steps={registrationSteps} />
            <br />
            <br />
            <span className="text-xl font-medium">
              كيفية استكمال البيانات الأساسية للطلب
            </span>
            <br />
            <StepsList steps={basicDataSteps} />
            <br />
            <br />
            <span className="text-xl font-medium">
              استكمال مرفقات الطلب - حالة قبول الطلب
            </span>
            <br />
            <br />
            <StepsList steps={acceptedRequestSteps} />
            <br />
            <br />
            <br />
            <span className="text-xl font-medium">
              استكمال مرفقات الطلب - حالة رفض الطلب
            </span>
            <br />
            <br />
            <StepsList steps={rejectedRequestSteps} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/acbb047086fd17bb48573e5b03f3115a36aa7f67e24f5ffec8a472c29309695c?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
            className="object-contain self-end mt-3 mr-9 aspect-[1.1] w-[57px] max-md:mr-2.5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
