import React from "react";

import { Img, Text } from "components";

const CustomerOpinions = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
          <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
            <Img
              className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
              src="images/img_ellipse10_100x100.png"
              alt="ellipseTen"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start">
          <Text
            className="capitalize text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtTajawalBold24"
          >
            إبراهيم محمد
          </Text>
          <Text
            className="leading-[29.00px] text-black-900 text-center text-lg w-full"
            size="txtTajawalRegular18Black900"
          >
            ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة
          </Text>
        </div>
      </div>
    </>
  );
};

CustomerOpinions.defaultProps = {};

export default CustomerOpinions;
