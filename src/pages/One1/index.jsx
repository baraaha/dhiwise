import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const One1Page = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto pb-[148px] w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[70px] items-center justify-center max-w-[1076px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[48%] md:w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-between p-4 rounded-[10px] w-full">
              <Text
                className="mb-1 mt-[9px] text-blue_gray-800 text-lg"
                size="txtTajawalRegular18"
              >
                15 مايو 2023 - 8:00م
              </Text>
              <Text
                className="my-1.5 text-gray-900 text-lg text-right"
                size="txtTajawalBold18"
              >
                الطلب رقم 123212300
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col gap-3.5 items-end justify-end p-[9px] rounded-[10px] w-full">
                    <Text
                      className="capitalize mt-[7px] text-black-900 text-right text-xl"
                      size="txtTajawalBold20"
                    >
                      عنوان التوصيل
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-end w-[89%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-end justify-start">
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
                        className="h-[81px] md:h-auto object-cover rounded-lg w-[21%] sm:w-full"
                        src="images/img_rectangle15.png"
                        alt="rectangleFifteen"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col gap-[22px] items-end justify-start p-[18px] rounded-[20px] w-full">
                  <Text
                    className="mt-0.5 text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtTajawalBold24"
                  >
                    ملخص الطلب
                  </Text>
                  <div className="flex flex-col gap-[38px] items-center justify-start mb-[5px] w-[99%] md:w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                      <List
                        className="flex flex-col gap-[22px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
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
                            <div className="flex flex-row gap-[15px] items-start justify-between w-[53%]">
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
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
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
                            <div className="flex flex-row gap-[15px] items-start justify-between w-[53%]">
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
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
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
                            <div className="flex flex-row gap-[15px] items-start justify-between w-[53%]">
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
                        </div>
                      </List>
                      <List
                        className="flex flex-col gap-6 items-center pt-[54px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-between w-full">
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
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalMedium20Black900"
                            >
                              خصم الكوبون
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtTajawalMedium24Gray900"
                          >
                            <span className="text-gray-900 font-tajawal text-left font-bold">
                              15{" "}
                            </span>
                            <span className="text-gray-900 font-tajawal text-left text-base font-bold">
                              ريال
                            </span>
                          </Text>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalMedium20Black900"
                            >
                              رسوم التوصيل
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                            size="txtTajawalMedium24Gray900"
                          >
                            <span className="text-gray-900 font-tajawal text-left font-bold">
                              20{" "}
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
                        <div className="flex flex-1 flex-row items-start justify-between w-full">
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
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalMedium20Black900"
                            >
                              خصم القيمة المضافة
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
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
          </div>
          <div className="bg-white-A700 flex sm:flex-1 flex-col gap-8 items-end justify-start md:mt-0 mt-[3px] p-6 sm:px-5 rounded-[10px] w-auto sm:w-full">
            <div className="flex flex-row items-end justify-between w-full">
              <Img
                className="h-[22px] mt-[11px] w-[22px]"
                src="images/img_pinterest.svg"
                alt="pinterest"
              />
              <Text
                className="mb-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtTajawalBold24"
              >
                حالة الطلب
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
              <div className="h-[507px] md:h-[580px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-20 items-center pt-[132px] w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-blue_gray-600"
                            size="txtTajawalRegular16Bluegray600"
                          >
                            9:15ص
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between w-1/2">
                            <Text
                              className="text-gray-900_01 text-right text-xl"
                              size="txtTajawalMedium20Gray90001"
                            >
                              جاري تجهيز الطلب
                            </Text>
                            <Button
                              className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                              shape="circle"
                              color="gray_200_01"
                              size="xl"
                              variant="fill"
                            >
                              <Img
                                src="images/img_group281.svg"
                                alt="group281"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                        <Text
                          className="text-base text-blue_gray-600"
                          size="txtTajawalRegular16Bluegray600"
                        >
                          9:00ص
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-between w-[47%]">
                          <Text
                            className="text-gray-900_01 text-right text-xl"
                            size="txtTajawalMedium20Gray90001"
                          >
                            تم استلام الطلب
                          </Text>
                          <Button
                            className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                            shape="circle"
                            color="teal_500"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              src="images/img_user_white_a700.svg"
                              alt="user"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                        <Text
                          className="text-base text-blue_gray-600"
                          size="txtTajawalRegular16Bluegray600"
                        >
                          9:45ص
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-between w-1/2">
                          <Text
                            className="text-gray-900_01 text-right text-xl"
                            size="txtTajawalMedium20Gray90001"
                          >
                            تم تسليم المندوب
                          </Text>
                          <Button
                            className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                            shape="circle"
                            color="gray_200_01"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              className="h-[26px]"
                              src="images/img_frame_gray_900_01.svg"
                              alt="frame"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                        <Text
                          className="text-base text-blue_gray-600"
                          size="txtTajawalRegular16Bluegray600"
                        >
                          9:45ص
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-between w-[42%]">
                          <Text
                            className="text-gray-900_01 text-right text-xl"
                            size="txtTajawalMedium20Gray90001"
                          >
                            جاري التوصيل
                          </Text>
                          <Button
                            className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                            shape="circle"
                            color="gray_200_01"
                            size="lg"
                            variant="fill"
                          >
                            <Img src="images/img_group176.svg" alt="group176" />
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[460px] right-[6%]"
                  src="images/img_group1171276032.svg"
                  alt="group1171276032"
                />
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-blue_gray-600"
                  size="txtTajawalRegular16Bluegray600"
                >
                  10:25ص
                </Text>
                <div className="flex flex-row gap-4 items-center justify-between w-[46%]">
                  <Text
                    className="text-gray-900_01 text-right text-xl"
                    size="txtTajawalMedium20Gray90001"
                  >
                    تم تسليم الطلب
                  </Text>
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    shape="circle"
                    color="gray_200_01"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      src="images/img_checkmark_gray_900_01.svg"
                      alt="checkmark_One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[446px] sm:min-w-full text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="pink_400"
              size="3xl"
              variant="fill"
            >
              الغاء الطلب
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One1Page;
