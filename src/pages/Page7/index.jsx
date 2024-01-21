import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";
import Product from "components/Product";

const Page7 = () => {
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
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[39%]">
                <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
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
                      المنتجات
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize leading-[32.00px] text-center text-white-A700 text-xl w-full"
                  size="txtTajawalMedium20"
                >
                  افضل امنواع الحوم المتواجد و جميع انواع اللحوم التي تحتاجة مثل
                  لحم الغذال و البقر و الجمال{" "}
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
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1342px] mt-[51px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[38px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="border border-blue-50_01 border-solid flex flex-row gap-2.5 h-14 md:h-auto items-center justify-end p-4 rounded-lg w-[289px]">
                <Text
                  className="capitalize text-indigo-200_99 text-sm w-auto"
                  size="txtTajawalRegular14Indigo20099"
                >
                  ابحث عن اسم الصنف
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_clock_indigo_100.svg"
                  alt="clock"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[73%] md:w-full">
                <div className="flex flex-row flex-wrap gap-4 items-start justify-start max-w-[974px] w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[166px]"
                    rightIcon={
                      <Img
                        className="mt-[5px] mb-1 ml-2.5"
                        src="images/img_music.svg"
                        alt="music"
                      />
                    }
                    shape="round"
                    color="blue_50_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="!text-indigo-300_a2 capitalize leading-[normal] text-left text-xl">
                      لحوم سمك
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[151px]"
                    rightIcon={
                      <Img
                        className="ml-2.5 my-px"
                        src="images/img_settings_indigo_200.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="blue_50_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="!text-indigo-300_a2 capitalize leading-[normal] text-left text-xl">
                      لحوم دجاج
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[170px]"
                    rightIcon={
                      <Img
                        className="mt-1 mb-[3px] ml-2.5"
                        src="images/img_television_indigo_200.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_50_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="!text-indigo-300_a2 capitalize leading-[normal] text-left text-xl">
                      لحوم حاشي
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[170px]"
                    rightIcon={
                      <Img
                        className="mt-1 mb-[3px] ml-2.5"
                        src="images/img_television_indigo_200.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="blue_50_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="!text-indigo-300_a2 capitalize leading-[normal] text-left text-xl">
                      لحوم حاشي
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[160px]"
                    rightIcon={
                      <Img
                        className="mt-[5px] mb-0.5 ml-2.5"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                    }
                    shape="round"
                    color="blue_50_01"
                    size="xl"
                    variant="outline"
                  >
                    <div className="!text-indigo-300_a2 capitalize leading-[normal] text-left text-xl">
                      لحوم الضأن
                    </div>
                  </Button>
                  <Button
                    className="capitalize cursor-pointer leading-[normal] min-w-[76px] text-center text-xl"
                    shape="round"
                    color="pink_400"
                    size="xl"
                    variant="fill"
                  >
                    الكل
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
              <List
                className="flex flex-col gap-8 items-center w-full"
                orientation="vertical"
              >
                <div className="sm:h-[1760px] h-[454px] md:h-[868px] my-0 relative w-full">
                  <div className="absolute font-montserrat gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full inset-[0] items-center justify-between m-auto w-auto">
                    <div className="bg-white-A700 md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                      <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-full">
                          <div className="h-[274px] relative w-full">
                            <Img
                              className="h-[274px] m-auto object-cover rounded-[20px] w-full"
                              src="images/img_rectangle24.png"
                              alt="rectangleTwentyFour"
                            />
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[54px] mr-[15px] mt-4 right-[5%] rounded-[3px] top-[6%]"
                              leftIcon={
                                <div className="mr-1 w-[17px] right-[1%] absolute rounded-lg my-px inset-y-[0]">
                                  <Img
                                    className="absolute rounded-lg"
                                    src="images/img_signal.svg"
                                    alt="signal"
                                  />
                                </div>
                              }
                              color="white_A700"
                              size="xs"
                              variant="fill"
                            >
                              <div className="!text-black-900 capitalize font-medium leading-[normal] text-[13.5px] text-left">
                                4.5
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-col font-tajawal items-center justify-start w-[94%] md:w-full">
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
                                من المهم جدًا أن يتابع العميل تدريب العميل،
                                ولكنه في نفس وقت العمل
                              </Text>
                              <div className="flex flex-row font-montserrat items-end justify-between mt-[5px] w-[98%] md:w-full">
                                <div className="flex flex-row items-center justify-evenly mb-1 mt-3 w-[15%]">
                                  <Img
                                    className="h-4 rounded-[50%] w-[17px]"
                                    src="images/img_signal.svg"
                                    alt="signal_One"
                                  />
                                  <Text
                                    className="capitalize text-[13.5px] text-black-900"
                                    size="txtMontserratRomanMedium135"
                                  >
                                    4.5
                                  </Text>
                                </div>
                                <div className="flex flex-col font-tajawal items-center justify-start">
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
                        <Img
                          src="images/img_close_white_a700.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <Product className="bg-white-A700 font-tajawal md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full" />
                    <Product className="bg-white-A700 font-tajawal md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full" />
                    <Product className="bg-white-A700 font-tajawal md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full" />
                  </div>
                  <Button
                    className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    7-9 كيلو
                  </Button>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-start justify-start my-0 w-auto md:w-full">
                  <div className="md:h-[422px] h-[455px] relative shadow-bs5 w-[24%] md:w-full">
                    <div className="absolute bg-white-A700 md:h-[422px] h-[454px] inset-[0] justify-center m-auto pb-[30px] rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                      <div className="flex flex-col h-full items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-full">
                          <Img
                            className="h-[274px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                            src="images/img_rectangle24.png"
                            alt="rectangleTwentyFour"
                          />
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
                                من المهم جدًا أن يتابع العميل تدريب العميل،
                                ولكنه في نفس وقت العمل
                              </Text>
                              <div className="flex flex-row font-montserrat items-center justify-between mt-[5px] w-[98%] md:w-full">
                                <div className="flex flex-row items-center justify-evenly w-[15%]">
                                  <Img
                                    className="h-4 rounded-[50%] w-[17px]"
                                    src="images/img_signal.svg"
                                    alt="signal"
                                  />
                                  <Text
                                    className="capitalize text-[13.5px] text-black-900"
                                    size="txtMontserratRomanMedium135"
                                  >
                                    4.5
                                  </Text>
                                </div>
                                <div className="flex flex-col font-tajawal items-center justify-start">
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
                        <Img
                          src="images/img_close_white_a700.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[15px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <Product className="bg-white-A700 md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-[24%] md:w-full" />
                  <Product className="bg-white-A700 md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-[24%] md:w-full" />
                  <Product className="bg-white-A700 md:h-[422px] h-[454px] pb-[30px] relative rounded-bl-[10px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] w-[24%] md:w-full" />
                </div>
              </List>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-montserrat items-center justify-center mt-[149px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page7;
