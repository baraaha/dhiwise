import React from "react";

import { Button, Img, Text } from "components";

const Product = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="h-[274px] relative w-full">
              <Img
                className="h-[274px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle24_274x310.png"
                alt="rectangleTwentyFour_One"
              />
              <Button
                className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                color="white_A700"
                size="md"
                variant="fill"
              >
                7-9 كيلو
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-col items-end justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-right"
                  size="txtTajawalBold28"
                >
                  لحوم الضأن
                </Text>
                <Text
                  className="mr-0.5 mt-[11px] text-base text-indigo-200 text-right w-full"
                  size="txtTajawalRegular16Indigo200"
                >
                  من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في نفس وقت
                  العمل
                </Text>
                <div className="flex flex-row items-end justify-between mt-[5px] w-[98%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly mb-1 mt-3 w-[15%]">
                    <Img
                      className="h-4 rounded-[50%] w-[17px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Text
                      className="capitalize text-[13.5px] text-black-900"
                      size="txtMontserratRomanMedium135"
                    >
                      4.5
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtTajawalBlack28"
                    >
                      <span className="text-black-900 font-tajawal text-left font-black">
                        25.50{" "}
                      </span>
                      <span className="text-black-900 font-tajawal text-left text-base font-black">
                        ريال
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute bottom-[33%] flex h-[60px] items-center justify-center left-[4%] rounded-[50%] shadow-bs1 w-[60px]"
          shape="circle"
          color="pink_400"
          variant="fill"
        >
          <Img src="images/img_close_white_a700.svg" alt="close_One" />
        </Button>
      </div>
    </>
  );
};

Product.defaultProps = {};

export default Product;
