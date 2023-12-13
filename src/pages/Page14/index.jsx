import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const Page14 = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans sm:gap-10 md:gap-10 gap-[87px] items-center justify-start mx-auto pb-[199px] w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[70px] items-start justify-center max-w-[1099px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[19px] items-end justify-start w-[47%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-right"
              size="txtTajawalBold32"
            >
              ملخص الطلب
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-col items-end justify-start p-[11px] rounded-[10px] w-full">
                <div className="flex flex-col gap-3.5 items-end justify-start mb-1.5 mr-1 w-[32%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtTajawalBold24"
                  >
                    خيارات اضافية
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-600 text-right text-xl"
                      size="txtTajawalMedium20Bluegray600"
                    >
                      ازالة الشحوم
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-end justify-end p-3 rounded-[10px] w-full">
                <div className="flex flex-col gap-[22px] items-end justify-start mr-[3px] w-[56%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtTajawalBold24"
                  >
                    طريقة الدفع
                  </Text>
                  <div className="flex flex-col font-jfflat items-center justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <Text
                        className="text-base text-blue_gray-600 text-right"
                        size="txtJFFlatRegular16"
                      >
                        البطاقة البنكية أو بطاقة مدى
                      </Text>
                      <Img
                        className="h-5"
                        src="images/img_television_blue_600.svg"
                        alt="television"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-end justify-end p-2.5 rounded-[10px] w-full">
                <div className="flex flex-col gap-[23px] items-end justify-start mr-[5px] w-[68%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtTajawalBold24"
                  >
                    طريقة التوصيل
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between w-full">
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
              <div className="bg-white-A700 flex md:h-[68px] h-[98px] justify-end p-[11px] relative rounded-[10px] w-full">
                <Text
                  className="absolute capitalize left-[3%] text-lg text-right text-teal-500 top-[11%]"
                  size="txtTajawalMedium18Teal500"
                >
                  انا المستلم
                </Text>
                <Img
                  className="h-6 mb-[5px] ml-auto mr-1 mt-auto w-6"
                  src="images/img_settings_indigo_100_24x24.svg"
                  alt="settings_One"
                />
                <div className="absolute flex flex-col gap-[17px] h-max inset-y-[0] justify-start my-auto right-[3%]">
                  <Text
                    className="md:ml-[0] ml-[255px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                    size="txtTajawalBold24"
                  >
                    عنوان التسليم
                  </Text>
                  <Text
                    className="capitalize mr-8 text-black-900_87 text-lg text-right"
                    size="txtTajawalMedium18Black90087"
                  >
                    البيت: الرياض النرجس شارع عمر بن الخطاب، 3453
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-end justify-start p-[13px] rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start mb-[5px] mr-0.5 w-[90%] md:w-full">
                  <div className="flex flex-col gap-[19px] items-end justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                      size="txtTajawalBold24"
                    >
                      تاريخ التوصيل
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row items-start justify-evenly w-[71%] sm:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-center text-gray-900 text-lg"
                            size="txtTajawalMedium18Gray900"
                          >
                            الفترة الصباحية من 10 صباحاً - 1 ظهراً
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconsaxlinearclock.svg"
                          alt="iconsaxlinearcl"
                        />
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-between w-[27%] sm:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-center text-gray-900 text-lg"
                            size="txtTajawalMedium18Gray900"
                          >
                            24/12/2022
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_iconsaxlinearcalendar.svg"
                          alt="iconsaxlinearca"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[20px] w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start my-1 w-[99%] md:w-full">
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
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[31px] items-end justify-end mb-[356px] md:mt-0 mt-[11px] p-6 sm:px-5 rounded-[20px] w-[48%] md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-right"
              size="txtTajawalBold32"
            >
              الطلبات المحددة
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-8 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start my-0 p-2.5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-3 items-end justify-start my-0.5 w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-end w-[67%] md:w-full">
                      <div className="flex flex-col items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-right text-xl"
                          size="txtTajawalBold20Gray900"
                        >
                          لحم لبناني
                        </Text>
                        <Text
                          className="mt-2 text-gray-900 text-right text-xl"
                          size="txtTajawalMedium20Gray900"
                        >
                          <span className="text-gray-900 font-tajawal font-medium">
                            عدد الطلبات/
                          </span>
                          <span className="text-gray-900 font-tajawal font-bold">
                            {" "}
                            2
                          </span>
                        </Text>
                        <Text
                          className="mt-[13px] text-base text-pink-400 text-right"
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
                        className="h-[108px] md:h-auto object-cover rounded-[10px] w-[56%]"
                        src="images/img_rectangle42058.png"
                        alt="rectangle42057"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row items-center justify-between outline outline-[1px] outline-blue_gray-50_02 p-1.5 rounded-[10px] w-full">
                      <Button
                        className="cursor-pointer font-medium font-tajawal leading-[normal] min-w-[66px] ml-1 mt-[3px] text-center text-lg"
                        shape="round"
                        color="teal_500_0c"
                        size="sm"
                        variant="fill"
                      >
                        أرباع
                      </Button>
                      <Text
                        className="mr-[11px] text-blue_gray-600 text-lg text-right"
                        size="txtJFFlatRegular18"
                      >
                        طريقة التقطيع
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-col items-center justify-start my-0 p-2.5 rounded-[20px] w-full">
                  <div className="flex flex-col gap-3 items-end justify-start my-0.5 w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-end w-[67%] md:w-full">
                      <div className="flex flex-col items-end justify-start mt-[9px]">
                        <Text
                          className="text-gray-900 text-right text-xl"
                          size="txtTajawalBold20Gray900"
                        >
                          لحم لبناني
                        </Text>
                        <Text
                          className="mt-2 text-gray-900 text-right text-xl"
                          size="txtTajawalMedium20Gray900"
                        >
                          <span className="text-gray-900 font-tajawal font-medium">
                            عدد الطلبات/
                          </span>
                          <span className="text-gray-900 font-tajawal font-bold">
                            {" "}
                            2
                          </span>
                        </Text>
                        <Text
                          className="mt-[13px] text-base text-pink-400 text-right"
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
                        className="h-[108px] md:h-auto object-cover rounded-[10px] w-[56%]"
                        src="images/img_rectangle42058.png"
                        alt="rectangle42057"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-row items-center justify-between outline outline-[1px] outline-blue_gray-50_02 p-[7px] rounded-[10px] w-full">
                      <Button
                        className="cursor-pointer font-medium font-tajawal leading-[normal] min-w-[66px] ml-[3px] text-center text-lg"
                        shape="round"
                        color="teal_500_0c"
                        size="sm"
                        variant="fill"
                      >
                        أرباع
                      </Button>
                      <Text
                        className="mr-2.5 text-blue_gray-600 text-lg text-right"
                        size="txtJFFlatRegular18"
                      >
                        طريقة التقطيع
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-[13px] w-[96%] md:w-full">
                <div className="flex flex-col gap-3.5 items-end justify-start w-full">
                  <Text
                    className="capitalize text-black-900 text-lg text-right"
                    size="txtTajawalBold18Black900"
                  >
                    ملاحظة علي الطلب
                  </Text>
                  <div className="bg-gray-50 flex flex-col items-center justify-end p-2.5 rounded-[10px] w-full">
                    <Text
                      className="capitalize leading-[150.00%] mt-1 text-gray-900_87 text-lg text-right w-[98%] sm:w-full"
                      size="txtTajawalRegular18Gray90087"
                    >
                      ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                      توضع الفقرات في الصفحة{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[469px] sm:min-w-full mt-4 text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="pink_400"
                size="lg"
                variant="fill"
              >
                تأكيد الدفع
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page14;
