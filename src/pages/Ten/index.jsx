import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import Header2 from "components/Header2";

const TenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans items-center justify-start mx-auto pb-40 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col font-tajawal items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end w-full">
              <div className="md:h-64 h-[283px] md:px-5 relative w-full">
                <div className="absolute h-64 inset-x-[0] mx-auto top-[0] w-full">
                  <Img
                    className="h-64 m-auto object-cover w-full"
                    src="images/img_rectangle36.png"
                    alt="rectangleThirtySix"
                  />
                  <div className="absolute bottom-[17%] flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto w-[15%]">
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
                          الطلبات
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="capitalize text-center text-lg text-white-A700"
                      size="txtTajawalMedium18WhiteA700"
                    >
                      جميع الطلبات الخاصة بك
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
          </div>
          <div className="flex sm:flex-col flex-row font-tajawal gap-6 items-start justify-start mt-16 md:px-5 w-auto sm:w-full">
            <Button
              className="common-pointer capitalize cursor-pointer font-medium leading-[normal] min-w-[176px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/one")}
              shape="round"
              color="blue_50_01"
              size="lg"
              variant="outline"
            >
              الملغية
            </Button>
            <Button
              className="border border-blue-50_01 border-solid capitalize cursor-pointer font-medium leading-[normal] min-w-[184px] text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="pink_400"
              size="lg"
              variant="fill"
            >
              المنتهية
            </Button>
            <Button
              className="common-pointer capitalize cursor-pointer font-medium leading-[normal] min-w-[166px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/six1")}
              shape="round"
              color="blue_50_01"
              size="lg"
              variant="outline"
            >
              الحالية
            </Button>
          </div>
          <List
            className="flex flex-col font-tajawal gap-8 items-center max-w-[1272px] mt-[117px] mx-auto md:px-5 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-1/2 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                      shape="round"
                      color="teal_500_0c"
                      size="md"
                      variant="fill"
                    >
                      تم التوصيل
                    </Button>
                    <Button
                      className="common-pointer border border-pink-400 border-solid flex h-[52px] items-center justify-center mr-[52px] rotate-[180deg] rounded-[10px] w-[52px]"
                      onClick={() => navigate("/two1")}
                      shape="round"
                      color="pink_400"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtTajawalRegular18"
                    >
                      15 مايو 2023 - 8:00م
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-lg text-right"
                          size="txtTajawalBold18"
                        >
                          الطلب رقم 123212300
                        </Text>
                        <Text
                          className="text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          <span className="text-blue_gray-800 font-tajawal font-normal">
                            اجمالي الطلب :
                          </span>
                          <span className="text-indigo-300 font-tajawal font-bold">
                            {" "}
                          </span>
                          <span className="text-blue_gray-800 font-tajawal font-bold">
                            657 ريال
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                        <div className="h-16 relative w-full">
                          <Img
                            className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                            src="images/img_rectangle42057.png"
                            alt="rectangle42057"
                          />
                          <Img
                            className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                            src="images/img_rectangle42058.png"
                            alt="rectangle42058"
                          />
                        </div>
                        <Text
                          className="capitalize text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          (2 بنود)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-1/2 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                      shape="round"
                      color="teal_500_0c"
                      size="md"
                      variant="fill"
                    >
                      تم التوصيل
                    </Button>
                    <Button
                      className="common-pointer border border-pink-400 border-solid flex h-[52px] items-center justify-center mr-[52px] rotate-[180deg] rounded-[10px] w-[52px]"
                      onClick={() => navigate("/two1")}
                      shape="round"
                      color="pink_400"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_One"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtTajawalRegular18"
                    >
                      15 مايو 2023 - 8:00م
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-lg text-right"
                          size="txtTajawalBold18"
                        >
                          الطلب رقم 123212300
                        </Text>
                        <Text
                          className="text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          <span className="text-blue_gray-800 font-tajawal font-normal">
                            اجمالي الطلب :
                          </span>
                          <span className="text-indigo-300 font-tajawal font-bold">
                            {" "}
                          </span>
                          <span className="text-blue_gray-800 font-tajawal font-bold">
                            657 ريال
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                        <div className="h-16 relative w-full">
                          <Img
                            className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                            src="images/img_rectangle42057.png"
                            alt="rectangle42057_One"
                          />
                          <Img
                            className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                            src="images/img_rectangle42058.png"
                            alt="rectangle42058_One"
                          />
                        </div>
                        <Text
                          className="capitalize text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          (2 بنود)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-1/2 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                      shape="round"
                      color="teal_500_0c"
                      size="md"
                      variant="fill"
                    >
                      تم التوصيل
                    </Button>
                    <Button
                      className="border border-pink-400 border-solid flex h-[52px] items-center justify-center mr-[52px] rotate-[180deg] rounded-[10px] w-[52px]"
                      shape="round"
                      color="pink_400"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtTajawalRegular18"
                    >
                      15 مايو 2023 - 8:00م
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-lg text-right"
                          size="txtTajawalBold18"
                        >
                          الطلب رقم 123212300
                        </Text>
                        <Text
                          className="text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          <span className="text-blue_gray-800 font-tajawal font-normal">
                            اجمالي الطلب :
                          </span>
                          <span className="text-indigo-300 font-tajawal font-bold">
                            {" "}
                          </span>
                          <span className="text-blue_gray-800 font-tajawal font-bold">
                            657 ريال
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                        <div className="h-16 relative w-full">
                          <Img
                            className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                            src="images/img_rectangle42057.png"
                            alt="rectangle42057"
                          />
                          <Img
                            className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                            src="images/img_rectangle42058.png"
                            alt="rectangle42058"
                          />
                        </div>
                        <Text
                          className="capitalize text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          (2 بنود)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded-[20px] w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                        shape="round"
                        color="teal_500_0c"
                        size="md"
                        variant="fill"
                      >
                        تم التوصيل
                      </Button>
                      <div className="bg-pink-400 border border-pink-400 border-solid h-[52px] mr-[52px] relative rotate-[180deg] rounded-[10px] w-[52px]">
                        <Img
                          className="h-6 m-auto w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                        <Button
                          className="absolute border border-pink-400 border-solid flex h-[52px] inset-[0] items-center justify-center m-auto rotate-[180deg] rounded-[10px] w-[52px]"
                          shape="round"
                          color="pink_400"
                          size="xl"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                      <div className="h-[22px] relative w-[51%]">
                        <Text
                          className="m-auto text-blue_gray-800 text-lg"
                          size="txtTajawalRegular18"
                        >
                          15 مايو 2023 - 8:00م
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-blue_gray-800 text-lg w-max"
                          size="txtTajawalRegular18"
                        >
                          15 مايو 2023 - 8:00م
                        </Text>
                      </div>
                      <div className="h-[92px] relative w-full">
                        <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[35%]">
                          <div className="h-16 relative w-full">
                            <Img
                              className="absolute h-16 inset-y-[0] my-auto right-[0] rounded-[50%] w-16"
                              src="images/img_rectangle42057_64x64.png"
                              alt="rectangle42057_One"
                            />
                            <Img
                              className="absolute h-16 inset-y-[0] left-[0] my-auto rounded-[50%] w-16"
                              src="images/img_rectangle42058_64x64.png"
                              alt="rectangle42058_One"
                            />
                          </div>
                          <Text
                            className="capitalize text-indigo-300 text-lg text-right"
                            size="txtTajawalRegular18Indigo300"
                          >
                            (2 بنود)
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 h-full items-end justify-start mt-[9px]">
                          <Text
                            className="text-gray-900 text-lg text-right"
                            size="txtTajawalBold18"
                          >
                            الطلب رقم 123212300
                          </Text>
                          <Text
                            className="text-indigo-300 text-lg text-right"
                            size="txtTajawalRegular18Indigo300"
                          >
                            <span className="text-blue_gray-800 font-tajawal font-normal">
                              اجمالي الطلب :
                            </span>
                            <span className="text-indigo-300 font-tajawal font-bold">
                              {" "}
                            </span>
                            <span className="text-blue_gray-800 font-tajawal font-bold">
                              657 ريال
                            </span>
                          </Text>
                        </div>
                        <div className="absolute flex flex-row gap-4 h-full inset-[0] items-start justify-between m-auto w-full">
                          <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                            <Text
                              className="text-gray-900 text-lg text-right"
                              size="txtTajawalBold18"
                            >
                              الطلب رقم 123212300
                            </Text>
                            <Text
                              className="text-indigo-300 text-lg text-right"
                              size="txtTajawalRegular18Indigo300"
                            >
                              <span className="text-blue_gray-800 font-tajawal font-normal">
                                اجمالي الطلب :
                              </span>
                              <span className="text-indigo-300 font-tajawal font-bold">
                                {" "}
                              </span>
                              <span className="text-blue_gray-800 font-tajawal font-bold">
                                657 ريال
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                            <div className="h-16 relative w-full">
                              <Img
                                className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                                src="images/img_rectangle42057.png"
                                alt="rectangle42057_Two"
                              />
                              <Img
                                className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                                src="images/img_rectangle42058.png"
                                alt="rectangle42058_Two"
                              />
                            </div>
                            <Text
                              className="capitalize text-indigo-300 text-lg text-right"
                              size="txtTajawalRegular18Indigo300"
                            >
                              (2 بنود)
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-6 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-1/2 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                      shape="round"
                      color="teal_500_0c"
                      size="md"
                      variant="fill"
                    >
                      تم التوصيل
                    </Button>
                    <Button
                      className="border border-pink-400 border-solid flex h-[52px] items-center justify-center mr-[52px] rotate-[180deg] rounded-[10px] w-[52px]"
                      shape="round"
                      color="pink_400"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtTajawalRegular18"
                    >
                      15 مايو 2023 - 8:00م
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-lg text-right"
                          size="txtTajawalBold18"
                        >
                          الطلب رقم 123212300
                        </Text>
                        <Text
                          className="text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          <span className="text-blue_gray-800 font-tajawal font-normal">
                            اجمالي الطلب :
                          </span>
                          <span className="text-indigo-300 font-tajawal font-bold">
                            {" "}
                          </span>
                          <span className="text-blue_gray-800 font-tajawal font-bold">
                            657 ريال
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                        <div className="h-16 relative w-full">
                          <Img
                            className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                            src="images/img_rectangle42057.png"
                            alt="rectangle42057"
                          />
                          <Img
                            className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                            src="images/img_rectangle42058.png"
                            alt="rectangle42058"
                          />
                        </div>
                        <Text
                          className="capitalize text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          (2 بنود)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[20px] w-1/2 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-[52px] justify-start w-[18%] sm:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[96px] ml-2 md:ml-[0] rounded-[10px] text-base text-center"
                      shape="round"
                      color="teal_500_0c"
                      size="md"
                      variant="fill"
                    >
                      تم التوصيل
                    </Button>
                    <Button
                      className="border border-pink-400 border-solid flex h-[52px] items-center justify-center mr-[52px] rotate-[180deg] rounded-[10px] w-[52px]"
                      shape="round"
                      color="pink_400"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_One"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[23px] items-end justify-start w-1/2 sm:w-full">
                    <Text
                      className="text-blue_gray-800 text-lg"
                      size="txtTajawalRegular18"
                    >
                      15 مايو 2023 - 8:00م
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-between w-full">
                      <div className="flex flex-col gap-2.5 items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-lg text-right"
                          size="txtTajawalBold18"
                        >
                          الطلب رقم 123212300
                        </Text>
                        <Text
                          className="text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          <span className="text-blue_gray-800 font-tajawal font-normal">
                            اجمالي الطلب :
                          </span>
                          <span className="text-indigo-300 font-tajawal font-bold">
                            {" "}
                          </span>
                          <span className="text-blue_gray-800 font-tajawal font-bold">
                            657 ريال
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[35%]">
                        <div className="h-16 relative w-full">
                          <Img
                            className="absolute h-16 inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-16"
                            src="images/img_rectangle42057.png"
                            alt="rectangle42057_One"
                          />
                          <Img
                            className="absolute h-16 inset-y-[0] left-[0] my-auto object-cover rounded-[10px] w-16"
                            src="images/img_rectangle42058.png"
                            alt="rectangle42058_One"
                          />
                        </div>
                        <Text
                          className="capitalize text-indigo-300 text-lg text-right"
                          size="txtTajawalRegular18Indigo300"
                        >
                          (2 بنود)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default TenPage;
