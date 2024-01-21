import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const Page4 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
                <div className="absolute bottom-[17%] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto w-[36%]">
                  <div className="flex flex-col items-center justify-start w-3/5 md:w-full">
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
                        تواصل معنا
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="capitalize text-center text-lg text-white-A700"
                    size="txtTajawalMedium18WhiteA700"
                  >
                    تواصل معنا لحل جميع المشاكل التي تواجهك و الرد علي اي
                    استفسارات
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
          <div className="flex md:flex-col flex-row font-tajawal gap-[39px] items-center justify-start max-w-[1312px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[55%] md:w-full">
              <Img
                className="h-[802px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                src="images/img_mapsiclemap.png"
                alt="mapsiclemap"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-[42px] items-end justify-center w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-end justify-start">
                <Text
                  className="capitalize md:text-5xl text-6xl text-black-900 text-right"
                  size="txtTajawalBlack60"
                >
                  تواصل معنا
                </Text>
                <Text
                  className="capitalize text-indigo-100 text-lg text-right"
                  size="txtTajawalRegular18Indigo100"
                >
                  ادخل البيانات المطلوبة و استفسارك
                </Text>
              </div>
              <div className="flex flex-col gap-8 items-end justify-center w-auto sm:w-full">
                <div className="flex flex-col gap-6 h-[506px] md:h-auto items-end justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 h-[65px] md:h-auto items-center justify-center w-[557px] sm:w-full">
                    <Text
                      className="capitalize outline outline-[1px] outline-indigo-300 sm:pl-5 pl-[35px] pr-3 py-[22px] rounded-lg text-base text-indigo-100 w-auto"
                      size="txtTajawalRegular16Indigo100"
                    >
                      الاسم الثاني
                    </Text>
                    <Text
                      className="capitalize outline outline-[1px] outline-indigo-300 sm:pl-5 pl-[35px] pr-[15px] py-[22px] rounded-lg text-base text-indigo-100 text-right w-auto"
                      size="txtTajawalRegular16Indigo100"
                    >
                      الاسم الأول
                    </Text>
                  </div>
                  <Text
                    className="capitalize outline outline-[1px] outline-indigo-300 sm:pl-5 pl-[35px] pr-4 py-[21px] rounded-lg text-base text-indigo-100 text-right w-auto"
                    size="txtTajawalRegular16Indigo100"
                  >
                    البريد الإلكتروني
                  </Text>
                  <Text
                    className="capitalize outline outline-[1px] outline-indigo-300 pb-[23px] sm:pl-5 pl-[35px] pr-4 pt-[19px] rounded-lg text-base text-indigo-100 text-right w-auto"
                    size="txtTajawalRegular16Indigo100"
                  >
                    رقم الجوال
                  </Text>
                  <div className="flex flex-col items-end justify-start outline outline-[1px] outline-indigo-300 p-2 rounded-lg w-full">
                    <Text
                      className="capitalize mb-[196px] mr-[7px] text-base text-indigo-100 text-right"
                      size="txtTajawalRegular16Indigo100"
                    >
                      اكتب استفسارك .....
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[300px] px-[35px] py-6 rounded-[10px]"
                  leftIcon={
                    <div className="mt-1.5 mb-1 mr-2 w-3 outline-white-A700 outline-[0.5px] outline">
                      <Img
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    </div>
                  }
                  shape="round"
                  color="pink_400"
                  variant="fill"
                >
                  <div className="font-bold leading-[normal] sm:px-5 text-center text-lg">
                    ارسال
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex font-montserrat items-center justify-center mt-24 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default Page4;
