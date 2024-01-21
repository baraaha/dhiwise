import React from "react";

import { Img, Text } from "components";

const Section = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-end justify-start w-[48%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
              size="txtTajawalBold40"
            >
              تقنيات التقطيع
            </Text>
          </div>
          <Text
            className="capitalize leading-[50.00px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl w-full"
            size="txtTajawalRegular24Black900"
          >
            أدوات التقطيع: يستخدم الجزارون والطهاة أدوات مختلفة لتقطيع اللحم،
            مثل السكين والمبردة والمقص والمنشار. يعتمد نوع الأداة على نوع اللحم
            والقطعة المراد تقطيعها.
          </Text>
        </div>
        <Img
          className="h-[525px] sm:h-auto object-cover rounded-[20px] w-[46%] md:w-full"
          src="images/img_rectangle3467545.png"
          alt="rectangle346754_Two"
        />
      </div>
    </>
  );
};

Section.defaultProps = {};

export default Section;
