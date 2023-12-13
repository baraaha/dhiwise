import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import Profileahmed from "components/Profileahmed";

const Page1 = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-[43px] items-center justify-end mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-end max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[1002px] sm:h-[2510px] md:h-[983px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-end justify-start mx-auto p-8 sm:px-5 rounded-[20px] top-[0] w-full">
                <Profileahmed className="bg-gray-50 md:h-[691px] h-[725px] pt-6 relative rounded-[10px] w-[33%] sm:w-full" />
              </div>
              <div className="absolute flex flex-col gap-[11px] h-max inset-y-[0] justify-start left-[0] my-auto w-[67%]">
                <div className="bg-white-A700 flex flex-col items-end justify-end p-[18px] w-full">
                  <div className="flex flex-col items-center justify-start mr-[37px] mt-[23px] w-[45%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
                        size="txtTajawalBold40"
                      >
                        كشف حساب العميل
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[19px] w-[92%] md:w-full">
                  <List
                    className="flex flex-col gap-8 items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="bg-gray-50 flex flex-col items-center justify-start my-0 p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[98%] md:w-full">
                        <div className="sm:h-[400px] md:h-[85px] h-[88px] relative w-full">
                          <div className="absolute sm:h-[400px] h-[85px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[65%]">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:ml-[0] ml-[142px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[143px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[190px] sm:w-full w-px" />
                              </div>
                            </div>
                            <Line className="absolute bg-blue-50_01 h-px inset-x-[0] mx-auto top-[47%] w-full" />
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start right-[0] top-[2%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              رقم العقد
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              5225
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[30px] items-end justify-start right-[20%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد السابق
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-end justify-start mx-auto top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الاشتراك
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start left-[24%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              المبيعات
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-7 items-end justify-start left-[0] top-[3%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد الحالي
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-[143px]"
                            shape="round"
                            color="teal_500_19"
                            size="lg"
                            variant="fill"
                          >
                            الحلة ساري
                          </Button>
                          <div className="flex sm:flex-1 flex-row gap-[27px] items-start justify-between sm:mt-0 mt-4 w-[41%] sm:w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-between mt-0.5 w-[49%]">
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                {" "}
                                12/6/2023
                              </Text>
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                ينتهي :{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[43%]">
                              <Text
                                className="mt-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                12/5/2023{" "}
                              </Text>
                              <Text
                                className="mb-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                يبدأ :{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col items-center justify-start my-0 p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[98%] md:w-full">
                        <div className="sm:h-[400px] md:h-[85px] h-[88px] relative w-full">
                          <div className="absolute sm:h-[400px] h-[85px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[65%]">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:ml-[0] ml-[142px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[143px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[190px] sm:w-full w-px" />
                              </div>
                            </div>
                            <Line className="absolute bg-blue-50_01 h-px inset-x-[0] mx-auto top-[47%] w-full" />
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start right-[0] top-[2%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              رقم العقد
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              5225
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[30px] items-end justify-start right-[20%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد السابق
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-end justify-start mx-auto top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الاشتراك
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start left-[24%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              المبيعات
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-7 items-end justify-start left-[0] top-[3%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد الحالي
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-[143px]"
                            shape="round"
                            color="teal_500_19"
                            size="lg"
                            variant="fill"
                          >
                            الحلة ساري
                          </Button>
                          <div className="flex sm:flex-1 flex-row gap-[27px] items-start justify-between sm:mt-0 mt-4 w-[41%] sm:w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-between mt-0.5 w-[49%]">
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                {" "}
                                12/6/2023
                              </Text>
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                ينتهي :{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[43%]">
                              <Text
                                className="mt-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                12/5/2023{" "}
                              </Text>
                              <Text
                                className="mb-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                يبدأ :{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col items-center justify-start my-0 p-[15px] rounded-[15px] w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[98%] md:w-full">
                        <div className="sm:h-[400px] md:h-[85px] h-[88px] relative w-full">
                          <div className="absolute sm:h-[400px] h-[85px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[65%]">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:ml-[0] ml-[142px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[143px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[190px] sm:w-full w-px" />
                              </div>
                            </div>
                            <Line className="absolute bg-blue-50_01 h-px inset-x-[0] mx-auto top-[47%] w-full" />
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start right-[0] top-[2%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              رقم العقد
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              5225
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[30px] items-end justify-start right-[20%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد السابق
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-end justify-start mx-auto top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الاشتراك
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-[29px] items-end justify-start left-[24%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              المبيعات
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-7 items-end justify-start left-[0] top-[3%]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد الحالي
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[143px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="pink_400_19"
                            size="lg"
                            variant="fill"
                          >
                            الحالة منتهي
                          </Button>
                          <div className="flex sm:flex-1 flex-row gap-[27px] items-start justify-between sm:mt-0 mt-4 w-[41%] sm:w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-between mt-0.5 w-[49%]">
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                {" "}
                                12/6/2023
                              </Text>
                              <Text
                                className="text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                ينتهي :{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[43%]">
                              <Text
                                className="mt-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                12/5/2023{" "}
                              </Text>
                              <Text
                                className="mb-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                يبدأ :{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 flex flex-col items-center justify-end my-0 p-4 rounded-[15px] w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start mt-[3px] w-[98%] md:w-full">
                        <div className="sm:h-[400px] h-[85px] relative w-full">
                          <div className="sm:h-[400px] h-[85px] m-auto w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[16%] w-[65%]">
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[81px] sm:h-px mb-1 sm:ml-[0] ml-[142px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[143px] sm:w-full w-px" />
                                <Line className="bg-blue-50_01 h-[85px] sm:h-px sm:ml-[0] ml-[190px] sm:w-full w-px" />
                              </div>
                            </div>
                            <Line className="absolute bg-blue-50_01 h-px inset-x-[0] mx-auto top-[47%] w-full" />
                          </div>
                          <div className="absolute flex flex-col gap-8 items-end justify-start right-[0] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              رقم العقد
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              5225
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-8 items-end justify-start right-[20%] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد السابق
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-8 inset-x-[0] items-end justify-start mx-auto top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الاشتراك
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1500
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-8 items-end justify-start left-[24%] top-[0] w-[81px]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              المبيعات
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                          <div className="absolute flex flex-col gap-8 items-end justify-start left-[0] top-[0]">
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              الرصيد الحالي
                            </Text>
                            <Text
                              className="text-black-900 text-right text-xl"
                              size="txtTajawalBold20"
                            >
                              1000
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[143px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="pink_400_19"
                            size="lg"
                            variant="fill"
                          >
                            الحالة منتهي
                          </Button>
                          <div className="flex sm:flex-1 flex-row gap-[27px] items-center justify-between sm:mt-0 mt-5 w-[42%] sm:w-full">
                            <div className="flex flex-row gap-1.5 items-start justify-between w-1/2">
                              <Text
                                className="mt-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                {" "}
                                12/6/2023
                              </Text>
                              <Text
                                className="mb-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                ينتهي :{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1.5 items-start justify-between w-[42%]">
                              <Text
                                className="mt-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalMedium20Black900"
                              >
                                12/5/2023{" "}
                              </Text>
                              <Text
                                className="mb-0.5 text-black-900 text-right text-xl"
                                size="txtTajawalBold20"
                              >
                                يبدأ :{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
