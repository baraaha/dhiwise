import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

const Stackrectangleone = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[983px] m-auto object-cover w-full"
          src="images/img_rectangle1.png"
          alt="rectangleOne"
        />
        <div className="absolute bottom-[3%] flex flex-col md:gap-10 gap-[186px] inset-x-[0] items-end justify-start mx-auto w-[87%]">
          <div className="flex flex-col gap-8 items-end justify-start w-[45%] md:w-full">
            <div className="flex flex-col items-end justify-start w-full">
              {props?.language}
              <Text
                className="capitalize leading-[32.00px] text-right text-white-A700 text-xl w-[81%] sm:w-full"
                size="txtTajawalMedium20"
              >
                {props?.languageOne}
              </Text>
            </div>
            <div className="flex flex-row gap-6 items-center justify-end w-[61%] md:w-full">
              <Button
                className="!text-white-A700 capitalize cursor-pointer font-medium font-tajawal min-w-[172px] rounded-[15px] text-center text-xl"
                color="pink_400"
                size="md"
                variant="outline"
              >
                {props?.prop}
              </Button>
              <Button
                className="capitalize cursor-pointer font-medium font-tajawal min-w-[158px] rounded-[15px] text-center text-xl"
                color="pink_400"
                size="md"
                variant="fill"
              >
                {props?.prop1}
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Button
              className="flex h-16 items-center justify-center sm:mt-0 mt-[3px] outline outline-[1px] outline-gray-200_03 rounded-[50%] shadow-bs w-16"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-10"
                src="images/img_whatsapp11.svg"
                alt="whatsappEleven"
              />
            </Button>
            <div className="flex sm:flex-1 flex-row items-center justify-between w-[27%] sm:w-full">
              <Img
                className="h-[26px] rounded-[13px] w-[116px]"
                src="images/img_frame9.svg"
                alt="frameNine"
              />
              <PagerIndicator
                className="flex gap-2 h-[11px] md:h-auto items-center justify-center w-[59px]"
                count={3}
                activeCss="inline-block cursor-pointer h-[11px] bg-gradient  w-[29px] rounded-[5px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[7px] bg-pink-400 w-[7px]"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
              <Img
                className="h-[26px] rounded-[13px] w-[116px]"
                src="images/img_frame8.svg"
                alt="frameEight"
              />
            </div>
          </div>
        </div>
        <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[75px] w-[82%] md:w-full">
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
                        {props?.en}
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
                <div className="bg-blue_gray-800_1e flex flex-col items-start justify-start p-4 rounded-[28px] w-14">
                  <div className="md:h-[23px] h-[25px] relative w-6">
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
                          {props?.two}
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
                <div className="bg-blue_gray-800_1e flex flex-col items-start justify-start p-4 rounded-[50%] w-14">
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
                          {props?.twoOne}
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
              <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                <div className="flex flex-col items-center justify-start rotate-[-180deg] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <ul className="flex md:flex-col flex-row gap-[50px] md:hidden items-center justify-start rotate-[-180deg] w-auto md:w-full common-row-list">
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredseventynine}
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredeighty}
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredeightyone}
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredeightytwo}
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredeightythree}
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtTajawalRegular24Black900"
                        >
                          {props?.threehundredeightyfour}
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[77px] md:mt-0 my-0.5"
              src="images/img_settings.svg"
              alt="settings"
            />
          </div>
        </header>
      </div>
    </>
  );
};

Stackrectangleone.defaultProps = {
  language: (
    <Text
      className="capitalize leading-[107.00px] md:text-5xl text-[94px] text-right text-white-A700 w-full"
      size="txtTajawalBold94"
    >
      <span className="text-white-A700 font-baloobhaijaan font-normal">
        سهول اجود أنواع{" "}
      </span>
      <span className="text-pink-400 font-baloobhaijaan font-normal">
        اللحوم{" "}
      </span>
    </Text>
  ),
  languageOne:
    "افضل امنواع الحوم المتواجد و جميع انواع اللحوم التي تحتاجة مثل لحم الغذال و البقر و الجمال ",
  prop: "شاهد المزيد",
  prop1: "تسوق الأن",
  en: "EN",
  two: "2",
  twoOne: "2",
  threehundredseventynine: "عن سهول",
  threehundredeighty: "تواصل معنا",
  threehundredeightyone: "فيديو",
  threehundredeightytwo: "الطلبات",
  threehundredeightythree: "القائمة",
  threehundredeightyfour: "الرئيسية",
};

export default Stackrectangleone;
