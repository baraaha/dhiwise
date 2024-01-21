import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Radio, Switch, Text } from "components";
import Header from "components/Header";

const Page15 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans items-center justify-start mx-auto pb-[228px] w-full">
        <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 shadow-bs2 w-full" />
          <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[85px] items-start justify-start max-w-[1232px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-end py-2.5 rounded-[20px] shadow-bs3 w-[42%] md:w-full">
              <div className="flex flex-row gap-[7px] items-end justify-end mr-6 mt-[13px] w-[34%] md:w-full">
                <Text
                  className="capitalize mb-0.5 mt-[7px] text-2xl md:text-[22px] text-indigo-100 sm:text-xl"
                  size="txtTajawalRegular24"
                >
                  (2 طلب)
                </Text>
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtTajawalMedium32"
                >
                  السلة
                </Text>
              </div>
              <Line className="bg-indigo-100_6c h-px mt-[26px] w-full" />
              <div className="flex flex-col font-montserrat items-center justify-start mr-6 mt-[23px] w-[91%] md:w-full">
                <div className="bg-gray-50 flex flex-col items-center justify-start p-[9px] rounded-[20px] w-full">
                  <div className="flex flex-col gap-3 items-center justify-start my-[3px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex sm:flex-1 flex-col items-center justify-end mb-1 sm:mt-0 mt-[71px] p-[3px] rounded-[9px] w-[29%] sm:w-full">
                        <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                          <div className="bg-indigo-200_44 flex flex-col h-6 md:h-auto items-center justify-center p-[4.1px] rounded w-[23px]">
                            <Img
                              className="h-px"
                              src="images/img_vector.svg"
                              alt="vector"
                            />
                          </div>
                          <Text
                            className="text-[8.19px] text-black-900 text-center"
                            size="txtMontserratRomanSemiBold819"
                          >
                            1
                          </Text>
                          <Img
                            className="h-6 rounded w-6"
                            src="images/img_baseaddorremoval.svg"
                            alt="baseaddorremova"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col font-tajawal gap-[43px] items-end justify-start ml-9 sm:ml-[0] sm:mt-0 mt-[9px]">
                        <Text
                          className="text-gray-900 text-right text-xl"
                          size="txtTajawalBold20Gray900"
                        >
                          لحم لبناني
                        </Text>
                        <Text
                          className="text-base text-pink-400 text-right"
                          size="txtTajawalBold16"
                        >
                          <span className="md:text-[26px] sm:text-2xl text-pink-400 font-tajawal capitalize text-[28px] font-black">
                            25.50{" "}
                          </span>
                          <span className="text-pink-400 font-tajawal capitalize font-black">
                            ريال
                          </span>
                        </Text>
                      </div>
                      <Img
                        className="sm:flex-1 h-[108px] md:h-auto ml-2.5 sm:ml-[0] object-cover rounded-[10px] w-[37%] sm:w-full"
                        src="images/img_rectangle42058.png"
                        alt="rectangle42057"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row font-jfflat items-start justify-between outline outline-[1px] outline-blue_gray-50_02 p-3.5 rounded-[10px] w-full">
                      <Img
                        className="h-4 ml-1 mt-1"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                      <Text
                        className="mr-0.5 mt-0.5 text-blue_gray-600 text-lg text-right"
                        size="txtJFFlatRegular18"
                      >
                        طريقة التقطيع
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-start mt-6 w-full">
                  <div className="bg-gray-50 flex flex-col items-center justify-start p-[9px] rounded-[20px] w-full">
                    <div className="flex flex-col gap-3 items-center justify-start my-[3px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                        <div className="bg-white-A700 border border-blue-50_01 border-solid flex sm:flex-1 flex-col items-center justify-end mb-1 sm:mt-0 mt-[71px] p-[3px] rounded-[9px] w-[29%] sm:w-full">
                          <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                            <div className="bg-indigo-200_44 flex flex-col h-6 md:h-auto items-center justify-center p-[4.1px] rounded w-[23px]">
                              <Img
                                className="h-px"
                                src="images/img_vector.svg"
                                alt="vector_One"
                              />
                            </div>
                            <Text
                              className="text-[8.19px] text-black-900 text-center"
                              size="txtMontserratRomanSemiBold819"
                            >
                              1
                            </Text>
                            <Img
                              className="h-6 rounded w-6"
                              src="images/img_baseaddorremoval.svg"
                              alt="baseaddorremova_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col font-tajawal gap-[43px] items-end justify-start ml-9 sm:ml-[0] sm:mt-0 mt-[9px]">
                          <Text
                            className="text-gray-900 text-right text-xl"
                            size="txtTajawalBold20Gray900"
                          >
                            لحم لبناني
                          </Text>
                          <Text
                            className="text-base text-pink-400 text-right"
                            size="txtTajawalBold16"
                          >
                            <span className="md:text-[26px] sm:text-2xl text-pink-400 font-tajawal capitalize text-[28px] font-black">
                              25.50{" "}
                            </span>
                            <span className="text-pink-400 font-tajawal capitalize font-black">
                              ريال
                            </span>
                          </Text>
                        </div>
                        <Img
                          className="sm:flex-1 h-[108px] md:h-auto ml-2.5 sm:ml-[0] object-cover rounded-[10px] w-[37%] sm:w-full"
                          src="images/img_rectangle42058.png"
                          alt="rectangle42057_One"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-row font-jfflat items-start justify-between outline outline-[1px] outline-blue_gray-50_02 p-3.5 rounded-[10px] w-full">
                        <Img
                          className="h-4 ml-1 mt-1"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft_One"
                        />
                        <Text
                          className="mr-0.5 mt-0.5 text-blue_gray-600 text-lg text-right"
                          size="txtJFFlatRegular18"
                        >
                          طريقة التقطيع
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col font-tajawal gap-[18px] items-end justify-start p-3 rounded-[20px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-600 text-right sm:text-xl"
                      size="txtTajawalBold24Bluegray600"
                    >
                      خيارات اضافية
                    </Text>
                    <div className="flex flex-col items-center justify-start mr-[3px] w-[97%] md:w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Img
                          className="h-6 rounded w-[23px]"
                          src="images/img_checkmark_pink_400.svg"
                          alt="checkmark_One"
                        />
                        <Text
                          className="text-blue_gray-600 text-right text-xl"
                          size="txtTajawalMedium20Bluegray600"
                        >
                          ازالة الشحوم
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[15px] w-full">
                        <div className="border border-blue_gray-800 border-solid h-6 rounded w-[23px]"></div>
                        <Text
                          className="mb-0.5 text-blue_gray-600 text-right text-xl"
                          size="txtTajawalMedium20Bluegray600"
                        >
                          اللية
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <div className="border border-blue_gray-800 border-solid h-6 rounded w-[23px]"></div>
                        <Text
                          className="text-blue_gray-600 text-right text-xl"
                          size="txtTajawalMedium20Bluegray600"
                        >
                          المقادم
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row font-pingarlt sm:gap-10 gap-[92px] items-start justify-start mt-3 w-full">
                        <div className="border border-blue_gray-800 border-solid h-6 sm:mt-0 mt-1 rounded w-[23px]"></div>
                        <Text
                          className="text-blue_gray-600 text-right text-xl"
                          size="txtPingARLTRegular20"
                        >
                          <span className="text-blue_gray-600 font-tajawal font-medium">
                            وضع ثلج للمسافات البعيدة{" "}
                          </span>
                          <span className="text-pink-400 font-tajawal font-medium">
                            (20 ريال)
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row font-tajawal items-center justify-between mt-[21px] outline outline-[1px] outline-blue_gray-50_02 p-[11px] rounded-[15px] w-full">
                  <Button
                    className="cursor-pointer leading-[normal] lowercase min-w-[79px] text-base text-center"
                    shape="round"
                    color="blue_gray_800"
                    size="lg"
                    variant="fill"
                  >
                    تأكيد
                  </Button>
                  <Text
                    className="lowercase mr-[5px] text-base text-gray-900_75"
                    size="txtTajawalRegular16"
                  >
                    أدخل كود الخصم
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row font-tajawal gap-[122px] items-center justify-end mt-[43px] outline outline-[1px] outline-blue_gray-50_02 p-[15px] rounded-[15px] w-full">
                  <Switch
                    onColor="#eceeff"
                    offColor="#eceeff"
                    onHandleColor="#ffffff"
                    offHandleColor="#ffffff"
                    value={false}
                    className="my-0.5 w-[13%]"
                  />
                  <Text
                    className="lowercase text-gray-900 text-xl"
                    size="txtTajawalBold20Gray900"
                  >
                    خصم خاص بالجمعيات الخيرية
                  </Text>
                </div>
                <div className="bg-gray-50 flex flex-col font-tajawal items-center justify-start mt-8 p-4 rounded-[20px] w-full">
                  <div className="flex flex-col items-center justify-start mb-[13px] mt-1.5 w-[99%] md:w-full">
                    <List
                      className="flex flex-col gap-[15px] items-center w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-between my-0 w-full">
                        <Text
                          className="mt-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtTajawalMedium24Gray900"
                        >
                          <span className="text-gray-900 font-tajawal text-left font-bold">
                            450{" "}
                          </span>
                          <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                            ريال
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[15px] items-start justify-between w-[59%]">
                          <Text
                            className="text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            التقطيع: أرباع
                          </Text>
                          <Text
                            className="mb-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            x1
                          </Text>
                          <Text
                            className="mt-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            لحم لبناني
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-blue-50_01 w-full" />
                      <div className="flex flex-row items-start justify-between my-0 w-full">
                        <Text
                          className="mt-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtTajawalMedium24Gray900"
                        >
                          <span className="text-gray-900 font-tajawal text-left font-bold">
                            450{" "}
                          </span>
                          <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                            ريال
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[15px] items-start justify-between w-[59%]">
                          <Text
                            className="text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            التقطيع: أرباع
                          </Text>
                          <Text
                            className="mb-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            x1
                          </Text>
                          <Text
                            className="mt-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            لحم لبناني
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-blue-50_01 w-full" />
                      <div className="flex flex-row items-start justify-between my-0 w-full">
                        <Text
                          className="mt-[3px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                          size="txtTajawalMedium24Gray900"
                        >
                          <span className="text-gray-900 font-tajawal text-left font-bold">
                            450{" "}
                          </span>
                          <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                            ريال
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[15px] items-start justify-between w-[59%]">
                          <Text
                            className="text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            التقطيع: أرباع
                          </Text>
                          <Text
                            className="mb-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            x1
                          </Text>
                          <Text
                            className="mt-[3px] text-blue_gray-600 text-center text-xl"
                            size="txtTajawalMedium20Bluegray600"
                          >
                            لحم لبناني
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-row items-start justify-between mt-[33px] w-[98%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtTajawalMedium24Gray900"
                      >
                        <span className="text-gray-900 font-tajawal text-left font-bold">
                          0{" "}
                        </span>
                        <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                          ريال
                        </span>
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-black-900 text-center text-xl"
                          size="txtTajawalMedium20Black900"
                        >
                          خصم الكوبون
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-8 w-[97%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtTajawalMedium24Gray900"
                      >
                        <span className="text-gray-900 font-tajawal text-left font-bold">
                          0{" "}
                        </span>
                        <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                          ريال
                        </span>
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-black-900 text-center text-xl"
                          size="txtTajawalMedium20Black900"
                        >
                          خصم الجمعيات الخيرية
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[57px] w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-pink-400 sm:text-xl"
                        size="txtTajawalMedium24Pink400"
                      >
                        <span className="md:text-[26px] sm:text-2xl text-pink-400 font-tajawal text-left text-[28px] font-bold">
                          25.50{" "}
                        </span>
                        <span className="text-pink-400 font-tajawal text-left text-base font-bold">
                          ريال
                        </span>
                      </Text>
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalBold24"
                      >
                        المجموع الكلي
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[49px] w-[52%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                          <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                            <Text
                              className="capitalize mt-[7px] text-base text-pink-400 text-right"
                              size="txtTajawalMedium16"
                            >
                              تغير العنوان
                            </Text>
                            <Text
                              className="capitalize mb-[5px] text-black-900 text-lg text-right"
                              size="txtTajawalBold18Black900"
                            >
                              عنوان التوصيل
                            </Text>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-end p-[9px] rounded-[10px] w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                              <Img
                                className="h-5 w-14"
                                src="images/img_settings_indigo_100.svg"
                                alt="settings_One"
                              />
                              <div className="flex flex-col gap-[5px] items-end justify-start ml-28 md:ml-[0]">
                                <Text
                                  className="capitalize text-gray-900 text-right text-xl"
                                  size="txtTajawalBold20Gray900"
                                >
                                  المنزل
                                </Text>
                                <Text
                                  className="capitalize text-base text-black-900_87 text-right"
                                  size="txtTajawalMedium16Black90087"
                                >
                                  البيت: الرياض النرجس شارع عمر بن الخطاب، 3453
                                </Text>
                              </div>
                              <Img
                                className="h-[81px] sm:h-auto ml-4 md:ml-[0] object-cover rounded-lg w-[15%] md:w-full"
                                src="images/img_rectangle15.png"
                                alt="rectangleFifteen"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-3 rounded-[10px] w-[49%] md:w-full">
                        <div className="border border-blue_gray-600 border-solid h-4 ml-[3px] rounded-[50%] w-4"></div>
                        <div className="flex flex-col items-center justify-start mr-[5px] mt-1.5">
                          <Text
                            className="capitalize text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            المستلم شخص اخر
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-3 rounded-[10px] w-[49%] md:w-full">
                        <div className="border border-pink-400 border-solid flex flex-col h-4 items-center justify-start ml-[3px] p-[3px] rounded-[50%] w-4">
                          <div className="bg-pink-400 h-2.5 rounded-[50%] w-2.5"></div>
                        </div>
                        <div className="flex flex-col items-center justify-start mr-[5px] mt-[7px]">
                          <Text
                            className="capitalize text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            انا المستلم
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-8 w-full">
                  <div className="flex flex-col gap-4 items-end justify-start w-full">
                    <Text
                      className="capitalize text-black-900 text-lg text-right"
                      size="txtTajawalBold18Black900"
                    >
                      خيارات التوصيل
                    </Text>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-row gap-[9px] items-center justify-start p-3 rounded-[10px] w-[35%] md:w-full">
                        <div className="border border-indigo-100 border-solid h-4 ml-[3px] rounded-[50%] w-4"></div>
                        <div className="flex flex-row gap-2 items-end justify-center mt-0.5 w-[84%]">
                          <Text
                            className="capitalize mt-[5px] text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            استلام من المحل
                          </Text>
                          <Img
                            className="h-6 mb-[3px] w-6"
                            src="images/img_thumbsup_gray_900.svg"
                            alt="thumbsup"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-row gap-[13px] items-center justify-center p-[13px] rounded-[10px] w-[63%] md:w-full">
                        <div className="border border-pink-400 border-solid flex flex-col h-4 items-center justify-start ml-0.5 p-[3px] rounded-[50%] w-4">
                          <div className="bg-pink-400 h-2.5 rounded-[50%] w-2.5"></div>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start mr-0.5 mt-[3px] w-[91%]">
                          <Text
                            className="capitalize text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            توصيل سريع خلال ٢ ساعة يضاف ٥٠ ريال
                          </Text>
                          <Img
                            className="h-[19px]"
                            src="images/img_truckfast.svg"
                            alt="truckfast"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-[115px] items-center justify-end p-[13px] rounded-[10px] w-[63%] md:w-full">
                      <div className="border border-indigo-100 border-solid flex flex-col h-4 items-center justify-start rounded-[50%] w-4">
                        <div className="border border-indigo-100 border-solid h-4 rounded-[50%] w-4"></div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-center mr-0.5 mt-[3px] w-[63%]">
                        <Text
                          className="capitalize text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          توصيل عادي خلال ٢٤ ساعة
                        </Text>
                        <Img
                          className="h-[19px]"
                          src="images/img_truckfast.svg"
                          alt="truckfast_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                      <Text
                        className="capitalize text-black-900 text-lg text-right"
                        size="txtTajawalBold18Black900"
                      >
                        تاريخ وقت التوصيل
                      </Text>
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[13px] rounded-[10px] w-[49%] md:w-full">
                          <div className="flex flex-row items-start justify-between mt-[3px] w-[98%] md:w-full">
                            <Img
                              className="h-4 mt-[3px] w-4"
                              src="images/img_arrowdown_indigo_100.svg"
                              alt="arrowdown"
                            />
                            <div className="flex flex-row gap-[9px] items-start justify-between w-[51%]">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-center text-indigo-300 text-lg"
                                  size="txtTajawalMedium18Indigo300"
                                >
                                  06 : 30 مساءا
                                </Text>
                              </div>
                              <Img
                                className="h-6 w-6"
                                src="images/img_iconsaxlinearclock.svg"
                                alt="iconsaxlinearcl"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[13px] rounded-[10px] w-[49%] md:w-full">
                          <div className="flex flex-row items-start justify-start mt-0.5 w-[98%] md:w-full">
                            <Img
                              className="h-4 mt-[3px] w-4"
                              src="images/img_arrowdown_indigo_100.svg"
                              alt="arrowdown_One"
                            />
                            <div className="flex flex-col items-center justify-start ml-[139px]">
                              <Text
                                className="text-center text-gray-900 text-lg"
                                size="txtTajawalMedium18Gray900"
                              >
                                24/12/2022
                              </Text>
                            </div>
                            <Img
                              className="h-6 ml-2.5 w-6"
                              src="images/img_iconsaxlinearcalendar.svg"
                              alt="iconsaxlinearca"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                      <Text
                        className="capitalize text-black-900 text-lg text-right"
                        size="txtTajawalBold18Black900"
                      >
                        طريقة الدفع
                      </Text>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                          <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-end p-[13px] rounded-[10px] w-[49%] md:w-full">
                            <div className="flex flex-row gap-[13px] items-start justify-end mr-0.5 mt-1 w-[62%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-center text-gray-900 text-lg"
                                  size="txtTajawalMedium18Gray900"
                                >
                                  الدفع عند الإستلام
                                </Text>
                              </div>
                              <div className="border border-indigo-100 border-solid h-4 rounded-[50%] w-4"></div>
                            </div>
                          </div>
                          <div
                            className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-2.5 rounded-[10px] w-[49%] md:w-full"
                            onClick={() => navigate("/one3")}
                          >
                            <div className="h-[22px] md:h-[33px] mb-1 mt-[7px] relative w-[98%]">
                              <div className="absolute flex flex-col font-tajawal h-full inset-y-[0] items-center justify-start my-auto right-[10%]">
                                <Text
                                  className="text-center text-gray-900 text-lg"
                                  size="txtTajawalMedium18Gray900"
                                >
                                  استخدام رصيد المحفظة
                                </Text>
                              </div>
                              <Radio
                                value="20"
                                className="font-jfflat font-medium mx-auto sm:pr-5 text-[13px] text-left text-teal-500"
                                inputClassName="absolute border border-indigo-100 border-solid h-4 mr-[5px] w-4"
                                checked={false}
                                name="twenty2"
                                label="20 "
                                id="20"
                              ></Radio>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
                          <div
                            className="common-pointer bg-white-A700 flex md:flex-1 flex-col items-center justify-end mb-9 p-3.5 rounded-[10px] w-[49%] md:w-full"
                            onClick={() => navigate("/page5")}
                          >
                            <div className="flex flex-row gap-[15px] items-start justify-between mt-[3px] w-[99%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-gray-900 text-lg text-right"
                                  size="txtTajawalMedium18Gray900"
                                >
                                  الدفع بواسطة شركات التقسيط
                                </Text>
                              </div>
                              <div className="border border-indigo-100 border-solid h-4 mt-0.5 rounded-[50%] w-4"></div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-2.5 rounded-[10px] w-[49%] md:w-full">
                            <div className="flex flex-col gap-[9px] justify-start mt-2 w-full">
                              <div className="flex flex-row gap-[9px] items-center justify-end md:ml-[0] ml-[78px] w-[73%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-[88%]">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Text
                                        className="text-black-900 text-center text-lg"
                                        size="txtTajawalMedium18"
                                      >
                                        الدفع عن طريق البطاقة
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="border border-pink-400 border-solid flex flex-col h-4 items-center justify-start p-[3px] rounded-[50%] w-4">
                                  <div className="bg-pink-400 h-2.5 rounded-[50%] w-2.5"></div>
                                </div>
                              </div>
                              <div className="flex flex-row font-jfflat gap-[49px] items-start justify-start mr-[26px] w-[91%] md:w-full">
                                <Button
                                  className="cursor-pointer min-w-[82px] mt-[3px] rounded-md text-center text-xs"
                                  shape="round"
                                  color="amber_500"
                                  size="sm"
                                  variant="fill"
                                >
                                  تغير البطاقة
                                </Button>
                                <div className="flex flex-row gap-[9.52px] items-center justify-center w-auto">
                                  <Img
                                    className="h-7 md:h-auto object-cover w-[27px]"
                                    src="images/img_image5.png"
                                    alt="imageFive"
                                  />
                                  <Img
                                    className="h-3"
                                    src="images/img_television_blue_600.svg"
                                    alt="television"
                                  />
                                  <Img
                                    className="h-[11px]"
                                    src="images/img_settings_purple_900.svg"
                                    alt="settings_Two"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                  <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                    <Text
                      className="capitalize text-black-900 text-lg text-right"
                      size="txtTajawalBold18Black900"
                    >
                      ملاحظة علي الطلب
                    </Text>
                    <div className="bg-white-A700 flex flex-col items-end justify-start p-3.5 rounded-[10px] w-full">
                      <Text
                        className="capitalize mb-[120px] mr-1.5 text-gray-900_75 text-lg text-right"
                        size="txtTajawalRegular18Gray90075"
                      >
                        اكتب ملاحظاتك هنا
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[418px] mt-[31px] w-[34%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Button
                      className="common-pointer cursor-pointer font-bold min-w-[211px] text-center text-xl"
                      onClick={() => navigate("/page14")}
                      shape="round"
                      color="pink_400"
                      size="3xl"
                      variant="fill"
                    >
                      مراجعة الطلب
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page15;
