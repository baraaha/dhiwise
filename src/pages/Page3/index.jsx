import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[75px] w-[82%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[22%]">
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_frame.svg"
                        alt="frame"
                      />
                      <Text
                        className="capitalize text-gray-900 text-sm"
                        size="txtWorkSansRomanMedium14"
                      >
                        EN
                      </Text>
                    </div>
                    <Img
                      className="h-3 w-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-14 items-center justify-center w-14"
                  shape="circle"
                  color="blue_gray_800_1e"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_lock.svg" alt="lock" />
                </Button>
                <div className="bg-blue_gray-800_1e flex flex-col font-tajawal items-start justify-start p-4 rounded-[28px] w-14">
                  <div className="md:h-[23px] h-[25px] relative w-6">
                    <div className="flex flex-col h-full items-center justify-start ml-auto w-1.5">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-1.5 items-start justify-start w-1.5"
                        style={{
                          backgroundImage:
                            "url('images/img_group1171275634.svg')",
                        }}
                      >
                        <Text
                          className="text-[4px] text-white-A700"
                          size="txtTajawalMedium4"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[23px] inset-x-[0] mx-auto top-[0] w-6"
                      src="images/img_frame1171275636.svg"
                      alt="frame1171275636"
                    />
                  </div>
                </div>
                <div
                  className="common-pointer bg-blue_gray-800_1e flex flex-col font-tajawal items-start justify-start p-4 rounded-[50%] w-14"
                  onClick={() => navigate("/page15")}
                >
                  <div className="h-5 relative w-3/4">
                    <div className="absolute flex flex-col h-1.5 items-center justify-start right-[0] top-[0] w-1.5">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-1.5 items-start justify-start w-1.5"
                        style={{
                          backgroundImage:
                            "url('images/img_group1171275634.svg')",
                        }}
                      >
                        <Text
                          className="text-[4px] text-white-A700"
                          size="txtTajawalMedium4"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-5 inset-y-[0] left-[0] my-auto"
                      src="images/img_bag.svg"
                      alt="bag"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-tajawal gap-[5px] justify-start mb-1 md:mt-0 mt-[13px] w-[64%] md:w-full">
                <div className="flex flex-col items-center justify-start rotate-[-180deg] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <ul className="flex md:flex-col flex-row gap-[50px] md:hidden items-center justify-start rotate-[-180deg] w-auto md:w-full common-row-list">
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/seven")}
                          >
                            عن سهول
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page4")}
                          >
                            تواصل معنا
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        >
                          <Text size="txtTajawalBold24">فيديو</Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/six1")}
                          >
                            الطلبات
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page7")}
                          >
                            القائمة
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page10")}
                          >
                            الرئيسية
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Line className="bg-pink-400 h-[3px] ml-80 md:ml-[0] mr-[373px] w-[9%]" />
              </div>
            </div>
            <Img
              className="h-[77px] md:mt-0 my-0.5"
              src="images/img_settings.svg"
              alt="settings"
            />
          </div>
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
