import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <Header2 className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full" />
        </header>
        <div className="flex flex-col font-tajawal items-center justify-start w-full">
          <div className="h-64 md:px-5 relative w-full">
            <div className="absolute h-64 inset-[0] justify-center m-auto w-full">
              <Img
                className="h-64 m-auto object-cover w-full"
                src="images/img_rectangle36.png"
                alt="rectangleThirtySix"
              />
              <div className="absolute bottom-[17%] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto w-1/5">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-center w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_frame_white_a700.svg"
                      alt="frame_One"
                    />
                    <Text
                      className="capitalize md:text-5xl text-6xl text-white-A700 w-auto"
                      size="txtTajawalBold60"
                    >
                      الفيديوهات
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize text-center text-lg text-white-A700"
                  size="txtTajawalMedium18WhiteA700"
                >
                  نعرض لك طريقة الذبح وشكل اللحوم
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[209px] left-[2%]"
              src="images/img_asset11.svg"
              alt="assetEleven"
            />
            <Img
              className="absolute h-[174px] object-cover right-[0] top-[0]"
              src="images/img_asset12.png"
              alt="assetTwelve"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1232px] mt-[84px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="h-[560px] relative w-full">
                <Img
                  className="common-pointer h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31.png"
                  alt="rectangleThirtyOne"
                  onClick={() => navigate("/frame1171276108")}
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
              <div className="h-[560px] relative w-full">
                <Img
                  className="h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_560x596.png"
                  alt="rectangleThirtyOne"
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
              <div className="h-[560px] relative w-full">
                <Img
                  className="h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_1.png"
                  alt="rectangleThirtyOne"
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
              <div className="h-[560px] relative w-full">
                <Img
                  className="h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_2.png"
                  alt="rectangleThirtyOne"
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
              <div className="h-[560px] relative w-full">
                <Img
                  className="h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_3.png"
                  alt="rectangleThirtyOne"
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
              <div className="h-[560px] relative w-full">
                <Img
                  className="h-[560px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_4.png"
                  alt="rectangleThirtyOne"
                />
                <Img
                  className="absolute h-[116px] inset-[0] justify-center m-auto w-[116px]"
                  src="images/img_group252.svg"
                  alt="group252"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-montserrat items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page3;
