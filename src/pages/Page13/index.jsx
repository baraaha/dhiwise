import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const Page13 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-7 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-8 items-center justify-end p-8 sm:px-5 rounded-[20px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start pb-[18px] w-[65%] md:w-full">
                <div className="flex flex-col gap-5 items-end justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                      size="txtTajawalBold24"
                    >
                      الاشتراكات
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
                    <div className="bg-white-A700 border border-gray-600_11 border-solid flex md:flex-1 flex-col items-center justify-start mb-[193px] rounded-[18px] w-[49%] md:w-full">
                      <div className="bg-orange-300_02 flex flex-col items-end justify-start p-[15px] rounded-tl-[18px] rounded-tr-[18px] w-full">
                        <Text
                          className="mb-0.5 text-right text-white-A700 text-xl"
                          size="txtTajawalBold20WhiteA700"
                        >
                          اختيار الذبائح
                        </Text>
                      </div>
                      <div className="md:h-[342px] h-[385px] relative w-full">
                        <div className="flex flex-col m-auto w-full">
                          <div className="bg-gray-100 border border-gray-600_11 border-solid flex flex-row items-start justify-start mx-auto p-2.5 w-full">
                            <Text
                              className="mt-1.5 text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              الصافي
                            </Text>
                            <Text
                              className="ml-2.5 mt-[5px] text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              خصم 10%
                            </Text>
                            <Text
                              className="ml-3 mt-1.5 text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              الإجمالي
                            </Text>
                            <Text
                              className="ml-[13px] mt-1 text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              السعر
                            </Text>
                            <Text
                              className="ml-[9px] my-0.5 text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              العدد
                            </Text>
                            <Text
                              className="ml-[61px] my-0.5 text-blue_gray-800_02 text-right text-sm"
                              size="txtTajawalMedium14"
                            >
                              الصنف
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[18px] items-end justify-start ml-auto mr-[13px] mt-[-NaNpx] w-[88px] z-[1]">
                            <Text
                              className="text-blue_gray-600 text-right text-sm"
                              size="txtTajawalMedium14Bluegray600"
                            >
                              ذبيحة كشميري
                            </Text>
                            <Text
                              className="text-blue_gray-600 text-right text-sm"
                              size="txtTajawalMedium14Bluegray600"
                            >
                              ذبيحة سواكني
                            </Text>
                            <Text
                              className="text-blue_gray-600 text-right text-sm"
                              size="txtTajawalMedium14Bluegray600"
                            >
                              ذبيحة لبناني
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[19px] items-center justify-start ml-auto mr-[130px] mt-[-NaNpx] z-[1]">
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              1
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              1
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              1
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[19px] items-center justify-start ml-auto mr-[162px] mt-[-NaNpx] z-[1]">
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              500
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              1000
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              750
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start ml-[146px] mt-[-NaNpx] z-[1]">
                            <Text
                              className="ml-1.5 md:ml-[0] text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              500
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[19px] text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              1000
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[7px] mt-[19px] text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              750
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[17px] text-[13.29px] text-blue_gray-800_02 text-center"
                              size="txtTajawalBold1329"
                            >
                              2250
                            </Text>
                            <Text
                              className="mt-[15px] text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalRegular13"
                            >
                              الضريبة
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-2 ml-[72px] mt-[-NaNpx] z-[1]">
                            <Text
                              className="text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalMedium13"
                            >
                              الصافي بدون تقسيط
                            </Text>
                            <Text
                              className="mt-[13px] text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalRegular13"
                            >
                              رسوم خدمة التقسيط
                            </Text>
                            <Text
                              className="mt-3.5 text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalMedium13"
                            >
                              الصافي مع التقسيط
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[45px] mt-3 text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalRegular13"
                            >
                              القسط الأول
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[45px] mt-3.5 text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalRegular13"
                            >
                              القسط الثاني
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[42px] mt-2.5 text-[13px] text-blue_gray-800_02 text-right"
                              size="txtTajawalRegular13"
                            >
                              القسط الثالث
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[19px] items-center justify-start ml-[88px] mt-[-NaNpx] z-[1]">
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              50
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              100
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-600 text-center"
                              size="txtTajawalRegular1329"
                            >
                              75
                            </Text>
                            <Text
                              className="text-[13.29px] text-blue_gray-800_02 text-center"
                              size="txtTajawalBold1329"
                            >
                              225
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mb-[9px] ml-3 mt-[-NaNpx] w-[11%] z-[1]">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[13.29px] text-blue_gray-600 text-center"
                                size="txtTajawalRegular1329"
                              >
                                450
                              </Text>
                              <Text
                                className="mt-[19px] text-[13.29px] text-blue_gray-600 text-center"
                                size="txtTajawalRegular1329"
                              >
                                900
                              </Text>
                              <Text
                                className="mt-[19px] text-[13.29px] text-blue_gray-600 text-center"
                                size="txtTajawalRegular1329"
                              >
                                675
                              </Text>
                              <Text
                                className="mt-[17px] text-[13.29px] text-blue_gray-800_02 text-center"
                                size="txtTajawalBold1329"
                              >
                                2025
                              </Text>
                              <Text
                                className="mt-3.5 text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalRegular1209"
                              >
                                303.75
                              </Text>
                              <Text
                                className="mt-3 text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalBold1209"
                              >
                                2328
                              </Text>
                              <Text
                                className="mt-[15px] text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalRegular1209"
                              >
                                65
                              </Text>
                            </div>
                            <Text
                              className="mt-[15px] text-[12.09px] text-blue_gray-800_02 text-center"
                              size="txtTajawalBold1209"
                            >
                              2393.75
                            </Text>
                            <div className="flex flex-col items-start justify-start mt-[17px]">
                              <Text
                                className="text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalRegular1209"
                              >
                                841
                              </Text>
                              <Text
                                className="ml-0.5 md:ml-[0] mt-3.5 text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalRegular1209"
                              >
                                776
                              </Text>
                              <Text
                                className="ml-0.5 md:ml-[0] mt-[11px] text-[12.09px] text-blue_gray-800_02 text-center"
                                size="txtTajawalRegular1209"
                              >
                                776
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray-200_02 h-[146px] ml-auto mr-[107px] mt-[-42.3px] w-px z-[1]" />
                          <Line className="bg-gray-200_02 h-[146px] ml-auto mr-[152px] mt-[-42.3px] w-px z-[1]" />
                          <Line className="bg-gray-200_02 h-96 mb-auto mt-[-42.3px] mx-auto w-px z-[1]" />
                          <Line className="bg-gray-200_02 h-[178px] ml-[129px] mt-[-42.3px] w-px z-[1]" />
                          <Line className="bg-gray-200_02 h-96 mb-auto ml-[62px] mt-[-42.3px] w-px z-[1]" />
                        </div>
                        <Line className="absolute bg-gray-200_02 h-px inset-x-[0] mx-auto rotate-[180deg] top-[20%] w-full" />
                        <Line className="absolute bg-gray-200_02 h-px inset-x-[0] mx-auto rotate-[180deg] top-[29%] w-full" />
                        <Line className="absolute bg-gray-200_02 h-px inset-x-[0] mx-auto rotate-[180deg] top-[38%] w-full" />
                        <Line className="absolute bg-gray-200_02 h-px left-[0] rotate-[-180deg] top-[47%] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[46%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[38%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[30%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[22%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[15%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                        <Line className="absolute bg-gray-200_02 bottom-[7%] h-px left-[0] rotate-[-180deg] w-[49%]" />
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="bg-gray-50 flex flex-col gap-4 items-center justify-start pb-[25px] rounded-[20px] w-full">
                          <div className="bg-orange-300_02 flex flex-col items-end justify-end p-[5px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                            <div className="flex flex-row items-center justify-end mr-2.5 mt-1 w-[65%] md:w-full">
                              <Text
                                className="text-center text-white-A700 text-xl"
                                size="txtTajawalBold20WhiteA700"
                              >
                                سياسة الإشتراك الذهبي
                              </Text>
                              <Img
                                className="h-[27px] md:h-auto ml-0.5 object-cover w-[12%]"
                                src="images/img_layer19.png"
                                alt="layerNineteen"
                              />
                            </div>
                          </div>
                          <Text
                            className="leading-[41.00px] text-blue_gray-600 text-lg text-right"
                            size="txtTajawalMedium18Bluegray600"
                          >
                            <>
                              1- سداد مبلغ الاشتراك او جزء منه مقدما <br />
                              2- السداد عند طريق مدى او فيزا لا يُقبل التحويل او
                              الدفع عند الاستلام <br />
                              3- الخصم لثلاث ذبائح فقط خلال الشهر وفي حال شراء
                              ذبيحة رابعة تحسب بالسعر العادي <br />
                              4- لخصم لا يشمل العروض أو الخصومات الترويجية{" "}
                              <br />
                              5- العرض يجدد شهريا ويتم ترحيل رصيد المحفظة في حال
                              عدم الشراء <br />
                              6- المبلغ المسدد غير قابل للاسترداد <br />
                              7- يتحمل العميل رسوم خدمة التقسيط 65 ريال
                            </>
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                          <Button
                            className="capitalize cursor-pointer font-bold leading-[normal] rounded-[10px] text-center text-lg w-[189px]"
                            shape="round"
                            color="pink_400"
                            size="xl"
                            variant="fill"
                          >
                            الغاء
                          </Button>
                          <Button
                            className="capitalize cursor-pointer font-bold leading-[normal] rounded-[10px] text-center text-lg w-[189px]"
                            shape="round"
                            color="orange_300_02"
                            size="xl"
                            variant="fill"
                          >
                            اشتراك
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 md:h-[691px] h-[725px] p-2.5 relative rounded-[10px] w-[33%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[89%]">
                  <div className="flex flex-col gap-[33px] items-end justify-start w-auto">
                    <div
                      className="common-pointer flex flex-col items-end justify-start pl-2 py-2 w-full"
                      onClick={() => navigate("/eight")}
                    >
                      <div className="flex flex-row gap-2.5 items-center justify-end w-[65%] md:w-full">
                        <Text
                          className="capitalize text-black-900 text-right text-xl"
                          size="txtTajawalBold20"
                        >
                          البيانات الشخصية
                        </Text>
                        <Button
                          className="flex h-14 items-center justify-center w-14"
                          shape="round"
                          color="gray_50_02"
                          size="lg"
                          variant="fill"
                        >
                          <Img
                            className="h-8"
                            src="images/img_lock_black_900.svg"
                            alt="lock_One"
                          />
                        </Button>
                      </div>
                    </div>
                    <div
                      className="common-pointer flex flex-row gap-2.5 items-center justify-end w-[35%] md:w-full"
                      onClick={() => navigate("/three")}
                    >
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        عنواني
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_vuesaxoutlineframe.svg"
                          alt="vuesaxoutlinefr"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                      <Button
                        className="capitalize cursor-pointer font-medium h-[37px] leading-[normal] my-[9px] rounded-[18px] text-center text-xs w-[105px]"
                        color="green_500_19"
                        size="lg"
                        variant="fill"
                      >
                        30 ريال
                      </Button>
                      <Text
                        className="capitalize ml-[50px] text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        نقاط المحفظة
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center ml-2.5 rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_settings_gray_900.svg"
                          alt="settings_One"
                        />
                      </Button>
                    </div>
                    <div
                      className="common-pointer flex flex-row gap-2.5 items-center justify-end w-[70%] md:w-full"
                      onClick={() => navigate("/two")}
                    >
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        شراء رصيد للمحفظة
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-end w-[49%] md:w-full">
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        لغة التطبيق
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      </Button>
                    </div>
                    <div
                      className="common-pointer flex flex-row gap-2.5 items-center justify-end w-[45%] md:w-full"
                      onClick={() => navigate("/seven")}
                    >
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        عن سهول
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_inbox.svg"
                          alt="inbox"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-end w-[63%] md:w-full">
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        تحديث رقم الهاتف
                      </Text>
                      <Button
                        className="flex h-14 items-center justify-center rounded-[10px] w-14"
                        shape="round"
                        color="gray_50_02"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-end w-[52%] md:w-full">
                      <Text
                        className="capitalize text-red-A200 text-right text-xl"
                        size="txtTajawalBold20RedA200"
                      >
                        تسجيل الخروج
                      </Text>
                      <Button
                        className="flex h-[52px] items-center justify-center ml-1 rounded-[10px] w-[52px]"
                        shape="round"
                        color="red_A400_0c"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_user_red_a200.svg"
                          alt="user"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute bottom-[2%] capitalize cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[354px] mx-auto rounded-[10px] text-center text-lg"
                  shape="round"
                  color="pink_400"
                  size="xl"
                  variant="fill"
                >
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page13;
