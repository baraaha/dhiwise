import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const Page4 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
                          <a
                            href="javascript:"
                            className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          >
                            <Text size="txtTajawalBold24">تواصل معنا</Text>
                          </a>
                        </li>
                        <li>
                          <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                            <Text
                              className="common-pointer"
                              size="txtTajawalRegular24"
                              onClick={() => navigate("/page3")}
                            >
                              فيديو
                            </Text>
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
                  <Line className="bg-pink-400 h-[3px] md:ml-[0] ml-[167px] mr-[479px] w-[16%]" />
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
