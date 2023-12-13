import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import Footer from "components/Footer";
import Stackrectangleone from "components/Stackrectangleone";

const Page10 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-tajawal h-[5693px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_.png')" }}
      >
        <Stackrectangleone
          className="h-[983px] md:px-5 relative w-full"
          language={
            <Text className="capitalize font-bold leading-[107.00px] md:text-5xl text-[94px] text-right text-white-A700 w-full">
              <span className="text-white-A700 font-baloobhaijaan font-normal">
                سهول اجود أنواع{" "}
              </span>
              <span className="text-pink-400 font-baloobhaijaan font-normal">
                اللحوم{" "}
              </span>
            </Text>
          }
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[75px] items-center justify-start max-w-[1312px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-end justify-start w-[43%] md:w-full">
            <Text
              className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtTajawalMedium24"
            >
              عن لحمة سهول
            </Text>
            <Text
              className="capitalize mt-[23px] md:text-5xl text-6xl text-black-900 text-right w-full"
              size="txtTajawalBold60Black900"
            >
              نحن ننتج اجود اللحوم المختارة لك
            </Text>
            <Text
              className="capitalize leading-[32.00px] mt-4 text-black-900 text-lg text-right w-[84%] sm:w-full"
              size="txtTajawalMedium18"
            >
              افضل امنواع الحوم المتواجد و جميع انواع اللحوم التي تحتاجة مثل لحم
              الغذال و البقر و الجمال{" "}
            </Text>
            <CheckBox
              className="capitalize font-medium mt-[27px] text-black-900 text-lg text-right"
              inputClassName="mr-[5px]"
              name="OneHundred"
              id="OneHundred"
              label="100% لحم طازج"
            ></CheckBox>
            <CheckBox
              className="capitalize font-medium mt-[23px] text-black-900 text-lg text-right"
              inputClassName="mr-[5px]"
              name="ThreeHundredEightySeven"
              id="ThreeHundredEightySeven"
              label="سهولة في طريقة الدفع"
            ></CheckBox>
            <CheckBox
              className="capitalize font-medium mt-[23px] text-black-900 text-lg text-right"
              inputClassName="mr-[5px]"
              name="ThreeHundredEightyEight"
              id="ThreeHundredEightyEight"
              label="اسرع طريقة للتوصيح"
            ></CheckBox>
            <Button
              className="common-pointer capitalize cursor-pointer font-medium min-w-[153px] mt-9 text-center text-xl"
              onClick={() => navigate("/seven")}
              shape="round"
              color="pink_400"
              size="md"
              variant="fill"
            >
              شاهد اكثر
            </Button>
          </div>
          <div className="flex md:flex-1 flex-col font-baloobhaijaan items-center justify-start w-[52%] md:w-full">
            <div className="h-[562px] relative w-full">
              <Img
                className="h-[395px] mb-[-98px] ml-auto object-cover rounded-[10px] w-[52%] z-[1]"
                src="images/img_rectangle27.png"
                alt="rectangleTwentySeven"
              />
              <div className="h-[263px] md:h-[NaNpx] mb-[undefinedpx] w-[43%] z-[1]">
                <Img
                  className="h-[263px] m-auto object-cover rounded-[10px] w-full"
                  src="images/img_rectangle28.png"
                  alt="rectangleTwentyEight"
                />
                <div className="absolute bottom-[10%] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto w-[64%]">
                  <Img
                    className="h-10 w-10"
                    src="images/img_frame_white_a700.svg"
                    alt="frame_One"
                  />
                  <div className="md:h-20 h-[131px] relative w-full">
                    <Text
                      className="absolute capitalize inset-x-[0] mx-auto sm:text-[38.63px] md:text-[44.63px] text-[52.63px] text-white-A700 top-[0] w-max"
                      size="txtBalooBhaijaanRegular5263"
                    >
                      20
                    </Text>
                    <Text
                      className="absolute bottom-[0] capitalize inset-x-[0] mx-auto sm:text-[32px] md:text-[38px] text-[42px] text-white-A700 w-max"
                      size="txtBalooBhaijaanRegular42"
                    >
                      سنه خبرة
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[265px] mt-auto mx-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start max-w-[1310px] mt-[150px] mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-6 h-[229px] md:h-auto items-center justify-center md:px-10 px-14 sm:px-5 py-[50px] rounded-[11px] w-auto"
            style={{ backgroundImage: "url('images/img_frame1171275646.png')" }}
          >
            <div className="bg-pink-400 flex flex-col h-[78px] items-center justify-end p-[18px] rounded-[23px] w-[78px]">
              <Img
                className="h-[41px]"
                src="images/img_ticket_white_a700.svg"
                alt="ticket"
              />
            </div>
            <Text
              className="capitalize sm:text-[18.63px] md:text-[20.63px] text-[22.63px] text-white-A700 w-auto"
              size="txtTajawalMedium2263"
            >
              لحم بقري
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-6 h-[229px] md:h-auto items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[11px] w-auto"
            style={{ backgroundImage: "url('images/img_frame1171275647.png')" }}
          >
            <div className="bg-pink-400 flex flex-col h-[78px] items-center justify-start p-2.5 rounded-[22px] w-[78px]">
              <Img
                className="h-[46px] my-[5px]"
                src="images/img_group.svg"
                alt="group"
              />
            </div>
            <Text
              className="capitalize sm:text-[18.63px] md:text-[20.63px] text-[22.63px] text-white-A700 w-auto"
              size="txtTajawalMedium2263"
            >
              لحم الضأن
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-6 h-[229px] md:h-auto items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[11px] w-auto"
            style={{ backgroundImage: "url('images/img_frame1171275645.png')" }}
          >
            <div className="bg-pink-400 flex flex-col h-[78px] items-center justify-start p-[11px] rounded-[22px] w-[78px]">
              <Img
                className="h-9 my-[9px]"
                src="images/img_television_white_a700_36x53.svg"
                alt="television"
              />
            </div>
            <Text
              className="capitalize sm:text-[18.63px] md:text-[20.63px] text-[22.63px] text-white-A700 w-auto"
              size="txtTajawalMedium2263"
            >
              لحم الحاشي
            </Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col gap-6 h-[229px] md:h-auto items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[11px] w-auto"
            style={{ backgroundImage: "url('images/img_frame1171275644.png')" }}
          >
            <Img
              className="h-[78px] w-[78px]"
              src="images/img_play.svg"
              alt="play"
            />
            <Text
              className="capitalize sm:text-[18.63px] md:text-[20.63px] text-[22.63px] text-white-A700 w-auto"
              size="txtTajawalMedium2263"
            >
              لحم الدجاج
            </Text>
          </div>
          <Img
            className="sm:flex-1 h-[229px] md:h-auto object-cover rounded-[11px] w-[214px] sm:w-full"
            src="images/img_frame1171275643.png"
            alt="frame1171275643"
          />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1294px] mt-[146px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3 items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[152px] mt-2.5"
                onClick={() => navigate("/page7")}
                leftIcon={
                  <Img
                    className="h-[49px] mr-[-1px]"
                    src="images/img_arrowdown_pink_400.svg"
                    alt="arrow_down"
                  />
                }
                size="md"
              >
                <div className="capitalize font-medium text-left text-pink-400 text-xl">
                  شاهد اكثر
                </div>
              </Button>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtTajawalBold48"
                >
                  المنتجات
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                  <div className="md:h-[737px] h-[770px] sm:h-[795px] relative shadow-bs6 w-[41%] md:w-full">
                    <div className="absolute bg-white-A700 flex flex-col font-montserrat h-max inset-[0] items-center justify-center m-auto pb-8 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col relative w-full">
                          <Img
                            className="h-[562px] mx-auto object-cover rounded-[10px] w-full"
                            src="images/img_rectangle24_562x522.png"
                            alt="rectangleTwentyFour"
                          />
                          <Button
                            className="flex h-[60px] items-center justify-center ml-[17px] mt-[-30px] rounded-[50%] shadow-bs4 w-[60px] z-[1]"
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
                        <div className="flex sm:flex-col flex-row gap-[38px] items-end justify-between w-[95%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly mb-1 sm:mt-0 mt-[122px] w-[9%] sm:w-full">
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
                          <div className="flex flex-col font-tajawal items-end justify-start w-[84%] sm:w-full">
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
                              من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه
                              في نفس وقت العمل من المهم جدًا أن يتابع العميل
                              تدريب العميل، ولكنه في نفس وقت العمل
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-[19px]">
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
                    <Button
                      className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[58%] md:w-full">
                    <div className="md:gap-5 gap-[31px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="md:h-[350px] h-[376px] relative shadow-bs6 w-full">
                        <div className="absolute bg-white-A700 font-montserrat md:h-[350px] h-[374px] inset-[0] justify-center m-auto pb-[22px] rounded-[10px] w-full">
                          <div className="flex flex-col gap-4 h-full items-center justify-start mx-auto w-full">
                            <Img
                              className="h-[206px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                              src="images/img_rectangle24_206x354.png"
                              alt="rectangleTwentyFour"
                            />
                            <div className="md:h-32 h-[129px] relative w-[93%]">
                              <div className="absolute bottom-[3%] flex flex-row items-center justify-evenly left-[0] w-[13%]">
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
                              <div className="absolute flex flex-col font-tajawal h-full inset-y-[0] items-end justify-start my-auto right-[0] w-[90%]">
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
                                <div className="flex flex-col items-center justify-start mt-[5px]">
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
                          <Button
                            className="absolute bottom-[37%] flex h-[60px] items-center justify-center left-[4%] rounded-[50%] shadow-bs4 w-[60px]"
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
                          className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          7-9 كيلو
                        </Button>
                      </div>
                      <div className="md:h-[350px] h-[376px] relative shadow-bs6 w-full">
                        <div className="absolute bg-white-A700 font-montserrat md:h-[350px] h-[374px] inset-[0] justify-center m-auto pb-[22px] rounded-[10px] w-full">
                          <div className="flex flex-col gap-4 h-full items-center justify-start mx-auto w-full">
                            <div className="h-[206px] relative w-full">
                              <Img
                                className="h-[206px] m-auto object-cover rounded-[10px] w-full"
                                src="images/img_rectangle24_206x354.png"
                                alt="rectangleTwentyFour"
                              />
                              <Img
                                className="absolute h-[206px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
                                src="images/img_rectangle25.png"
                                alt="rectangleTwentyFive"
                              />
                            </div>
                            <div className="md:h-32 h-[129px] relative w-[93%]">
                              <div className="absolute bottom-[3%] flex flex-row items-center justify-evenly left-[0] w-[13%]">
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
                              <div className="absolute flex flex-col font-tajawal h-full inset-y-[0] items-end justify-start my-auto right-[0] w-[90%]">
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
                                <div className="flex flex-col items-center justify-start mt-[5px]">
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
                          <Button
                            className="absolute bottom-[37%] flex h-[60px] items-center justify-center left-[4%] rounded-[50%] shadow-bs4 w-[60px]"
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
                          className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          7-9 كيلو
                        </Button>
                      </div>
                      <div className="md:h-[350px] h-[375px] relative shadow-bs6 w-full">
                        <div className="absolute bg-white-A700 font-montserrat md:h-[350px] h-[374px] inset-[0] justify-center m-auto pb-[22px] rounded-[10px] w-full">
                          <div className="flex flex-col gap-4 h-full items-center justify-start mx-auto w-full">
                            <Img
                              className="h-[206px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                              src="images/img_rectangle24_206x354.png"
                              alt="rectangleTwentyFour"
                            />
                            <div className="md:h-32 h-[129px] relative w-[93%]">
                              <div className="absolute bottom-[3%] flex flex-row items-center justify-evenly left-[0] w-[13%]">
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
                              <div className="absolute flex flex-col font-tajawal h-full inset-y-[0] items-end justify-start my-auto right-[0] w-[90%]">
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
                                <div className="flex flex-col items-center justify-start mt-[5px]">
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
                          <Button
                            className="absolute bottom-[37%] flex h-[60px] items-center justify-center left-[4%] rounded-[50%] shadow-bs4 w-[60px]"
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
                          className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          7-9 كيلو
                        </Button>
                      </div>
                      <div className="md:h-[350px] h-[376px] relative shadow-bs6 w-full">
                        <div className="absolute bg-white-A700 font-montserrat md:h-[350px] h-[374px] inset-[0] justify-center m-auto pb-[22px] rounded-[10px] w-full">
                          <div className="flex flex-col gap-4 h-full items-center justify-start mx-auto w-full">
                            <Img
                              className="h-[206px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                              src="images/img_rectangle24_206x354.png"
                              alt="rectangleTwentyFour"
                            />
                            <div className="md:h-32 h-[129px] relative w-[93%]">
                              <div className="absolute bottom-[3%] flex flex-row items-center justify-evenly left-[0] w-[13%]">
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
                              <div className="absolute flex flex-col font-tajawal h-full inset-y-[0] items-end justify-start my-auto right-[0] w-[90%]">
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
                                <div className="flex flex-col items-center justify-start mt-[5px]">
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
                          <Button
                            className="absolute bottom-[37%] flex h-[60px] items-center justify-center left-[4%] rounded-[50%] shadow-bs4 w-[60px]"
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
                          className="absolute cursor-pointer font-medium font-tajawal h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-[12px] rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          7-9 كيلو
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[150px] w-full">
          <div className="md:h-[1010px] sm:h-[3920px] h-[762px] md:px-5 relative w-full">
            <div className="h-[762px] m-auto w-full">
              <Img
                className="h-[762px] m-auto object-cover w-full"
                src="images/img_rectangle29.png"
                alt="rectangleTwentyNine"
              />
              <Img
                className="absolute bottom-[5%] h-[84px] inset-x-[0] mx-auto"
                src="images/img_group1171275615.svg"
                alt="group1171275615"
              />
            </div>
            <div className="absolute flex flex-col gap-[41px] justify-start overflow-auto right-[0] top-[5%] w-[94%]">
              <Text
                className="capitalize md:ml-[0] ml-[1076px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtTajawalBold48WhiteA700"
              >
                الأكثر مبيعًا
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700_19 md:h-[426px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-3 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat md:h-24 h-[106px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[41px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[426px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-3 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_206x252.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat md:h-24 h-[106px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[41px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[426px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-3 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_1.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat md:h-24 h-[106px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[41px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[426px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-3 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_2.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat md:h-24 h-[106px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[41px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[427px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-4 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_3.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-1.5 items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat h-[103px] md:h-[92px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[38px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[427px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-4 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_4.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-1.5 items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat h-[103px] md:h-[92px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[38px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[427px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-4 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_5.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-1.5 items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat h-[103px] md:h-[92px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[38px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                  <div className="bg-white-A700_19 md:h-[427px] h-[470px] pb-3.5 pr-3.5 relative rounded-lg w-full">
                    <div className="absolute flex flex-col gap-4 h-max inset-[0] items-start justify-center m-auto w-[90%]">
                      <Img
                        className="h-[206px] md:h-auto object-cover rounded w-full"
                        src="images/img_rectangle34_6.png"
                        alt="rectangleThirtyFour"
                      />
                      <div className="flex flex-col gap-1.5 items-end justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                          size="txtTajawalBold28WhiteA700"
                        >
                          لحوم الضأن
                        </Text>
                        <Text
                          className="text-base text-right text-white-A700_a2 w-full"
                          size="txtTajawalRegular16WhiteA700a2"
                        >
                          من المهم جدًا أن يتابع العميل تدريب العميل، ولكنه في
                          نفس وقت العمل
                        </Text>
                      </div>
                      <div className="font-montserrat h-[103px] md:h-[92px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[1%] w-[47%]">
                          <Button
                            className="capitalize cursor-pointer font-medium h-[42px] leading-[normal] min-w-[117px] text-[13.5px] text-center"
                            shape="round"
                            color="pink_400"
                            size="lg"
                            variant="fill"
                          >
                            إضافة الي السلة
                          </Button>
                        </div>
                        <div className="absolute flex flex-col font-tajawal gap-[38px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[145px]">
                            <Text
                              className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                              size="txtTajawalBlack28WhiteA700"
                            >
                              <span className="text-white-A700 font-tajawal text-left font-black">
                                25.50{" "}
                              </span>
                              <span className="text-white-A700 font-tajawal text-left text-base font-black">
                                ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col font-montserrat items-start justify-start px-1.5 py-[2.5px] w-auto">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-4 rounded-[50%] w-[17px]"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                              <Text
                                className="capitalize text-[13.5px] text-white-A700"
                                size="txtMontserratRomanMedium135WhiteA700"
                              >
                                4.5
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium h-[38px] leading-[normal] left-[0] rounded-bl-[3px] rounded-br-[3px] rounded-tl-lg rounded-tr-[3px] text-base text-center top-[0] w-[76px]"
                      color="pink_400"
                      size="md"
                      variant="fill"
                    >
                      7-9 كيلو
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start max-w-[1312px] mt-[148px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-end justify-start w-2/5 md:w-full">
            <Text
              className="capitalize text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
              size="txtTajawalMedium24"
            >
              فيديوهات سهول
            </Text>
            <Text
              className="capitalize mt-[22px] md:text-5xl text-6xl text-black-900 text-right w-full"
              size="txtTajawalBold60Black900"
            >
              نعرض لك طريقة الذبح وشكل اللحوم
            </Text>
            <Text
              className="capitalize leading-[32.00px] mt-4 text-black-900 text-lg text-right w-[91%] sm:w-full"
              size="txtTajawalMedium18"
            >
              افضل طريقة للذبح الحلال و اجود طريقة لتغليف المنتجات التي تصل لك و
              اجود خدامات التوصيل{" "}
            </Text>
            <div className="flex flex-col gap-[23px] items-center justify-start mt-[27px] w-[29%] md:w-full">
              <CheckBox
                className="capitalize font-medium text-black-900 text-lg text-right"
                inputClassName="mr-[5px]"
                name="OneHundred_One"
                id="OneHundred_One"
                label="100% لحم طازج"
              ></CheckBox>
              <CheckBox
                className="capitalize font-medium text-black-900 text-lg text-right"
                inputClassName="mr-[5px]"
                name="OneHundred_Two"
                id="OneHundred_Two"
                label="100% ذبح حلال"
              ></CheckBox>
            </div>
            <CheckBox
              className="capitalize font-medium mt-[23px] text-black-900 text-lg text-right"
              inputClassName="mr-[5px]"
              name="FourHundredEleven"
              id="FourHundredEleven"
              label="اجود طريقة لتغليف اللحوم"
            ></CheckBox>
            <Button
              className="common-pointer capitalize cursor-pointer font-medium h-[46px] mt-9 text-center text-xl w-[153px]"
              onClick={() => navigate("/page3")}
              shape="round"
              color="pink_400"
              size="md"
              variant="fill"
            >
              شاهد اكثر
            </Button>
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row gap-[25px] items-center justify-between w-[58%] md:w-full">
            <div className="h-[511px] relative w-[74%] md:w-full">
              <Img
                className="h-[511px] m-auto object-cover rounded-[15px] w-full"
                src="images/img_rectangle31_511x555.png"
                alt="rectangleThirtyOne"
              />
              <Img
                className="absolute h-[111px] inset-y-[0] my-auto right-[34%] w-[111px]"
                src="images/img_group252.svg"
                alt="group252"
              />
            </div>
            <div className="flex flex-col gap-[11px] items-center justify-start w-[23%] md:w-full">
              <div className="h-[163px] relative w-full">
                <Img
                  className="h-[163px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_163x173.png"
                  alt="rectangleThirtyOne_One"
                />
                <Img
                  className="absolute h-[35px] inset-[0] justify-center m-auto w-[35px]"
                  src="images/img_warning.svg"
                  alt="warning"
                />
              </div>
              <div className="h-[163px] relative w-full">
                <Img
                  className="h-[163px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_5.png"
                  alt="rectangleThirtyOne_Two"
                />
                <Img
                  className="absolute h-[35px] inset-[0] justify-center m-auto w-[35px]"
                  src="images/img_warning.svg"
                  alt="warning_One"
                />
              </div>
              <div className="h-[163px] relative w-full">
                <Img
                  className="h-[163px] m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle31_6.png"
                  alt="rectangleThirtyOne_Three"
                />
                <Img
                  className="absolute h-[35px] inset-[0] justify-center m-auto w-[35px]"
                  src="images/img_warning.svg"
                  alt="warning_Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[150px] w-full">
          <div className="flex flex-col items-center justify-end w-full">
            <div className="md:h-[470px] h-[712px] md:px-5 relative w-full">
              <div className="absolute h-[440px] inset-x-[0] mx-auto top-[14%] w-full">
                <Img
                  className="h-[440px] m-auto object-cover w-full"
                  src="images/img_rectangle35.png"
                  alt="rectangleThirtyFive"
                />
                <div className="absolute flex flex-col gap-[42px] h-max inset-[0] items-center justify-center m-auto w-[51%]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-base text-black-900 text-right"
                      size="txtTajawalBold16Black900"
                    >
                      اشترك في نشرتنا الإخبارية للحصول علي مزيد من التحديثات
                    </Text>
                    <Text
                      className="capitalize mt-[3px] sm:text-[34px] md:text-[40px] text-[44px] text-black-900 text-right"
                      size="txtTajawalBold44"
                    >
                      ادخل البريد الإلكتروني للاشتراك
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-3 rounded-[15px] w-full">
                    <Button
                      className="cursor-pointer font-montserrat font-semibold h-[57px] leading-[normal] lowercase text-center text-lg w-[107px]"
                      shape="round"
                      color="pink_400"
                      size="3xl"
                      variant="fill"
                    >
                      اشتراك
                    </Button>
                    <Text
                      className="mr-[18px] text-gray-400_02 text-right text-xl uppercase"
                      size="txtTajawalMedium20Gray40002"
                    >
                      ادخل البريد الألكتروني
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[470px] object-cover right-[0] w-[24%]"
                src="images/img_untitled12.png"
                alt="untitledTwelve"
              />
              <Img
                className="absolute h-[403px] left-[0] object-cover top-[0] w-1/5"
                src="images/img_untitled13.png"
                alt="untitledThirteen"
              />
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex font-montserrat items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page10;
