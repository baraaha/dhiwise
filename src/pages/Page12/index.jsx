import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Text } from "components";
import Header from "components/Header";

const Page12 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-[54px] w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 font-tajawal sm:h-[1022px] md:h-[1049px] h-[1078px] max-w-[1312px] mx-auto p-5 md:px-5 relative rounded-[20px] w-full">
          <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-start justify-start mx-auto p-2.5 rounded-[20px] top-[5%] w-[97%]">
            <div className="flex flex-col items-end justify-start mb-[21px] md:ml-[0] ml-[60px] w-[58%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
                size="txtTajawalBold40"
              >
                حسابي
              </Text>
              <div className="flex flex-col h-[178px] items-center justify-start mt-12 w-[178px]">
                <div className="flex flex-col h-[178px] items-center justify-start w-[178px]">
                  <div className="h-[178px] relative w-[178px]">
                    <Img
                      className="h-[178px] m-auto rounded-[50%] w-[178px]"
                      src="images/img_ellipse73.png"
                      alt="ellipseSeventyThree"
                    />
                    <Button
                      className="absolute bottom-[4%] flex h-[29px] items-center justify-center left-[8%] rounded-[14px] w-[29px]"
                      color="blue_gray_800"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_television_white_a700_29x29.svg"
                        alt="television"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mr-3.5 mt-[25px] w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between w-full">
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-end justify-start p-[9px] rounded-[10px]">
                        <Text
                          className="mr-1.5 text-blue_gray-300 text-right text-sm"
                          size="txtTajawalRegular14Bluegray300"
                        >
                          الاسم الأخير
                        </Text>
                        <Text
                          className="lowercase text-gray-900 text-right text-xl"
                          size="txtTajawalMedium20Gray900"
                        >
                          ابو فهد
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-col items-end justify-start p-2.5 rounded-[10px]">
                        <Text
                          className="capitalize text-indigo-100 text-right text-sm"
                          size="txtTajawalMedium14Indigo100"
                        >
                          الاسم
                        </Text>
                        <Text
                          className="lowercase mr-[9px] my-0.5 text-gray-900 text-right text-xl"
                          size="txtTajawalMedium20Gray900"
                        >
                          حسام
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-6 w-full">
                      <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-full">
                        <div className="bg-white-A700 border border-blue-50_01 border-solid flex md:flex-1 flex-col items-center justify-start p-[7px] rounded-[10px] w-[82%] md:w-full">
                          <div className="flex flex-row sm:gap-10 items-end justify-between mb-[5px] w-[96%] md:w-full">
                            <Text
                              className="mb-1 mt-[15px] text-center text-pink-400 text-xl"
                              size="txtTajawalMedium20Pink400"
                            >
                              تغيير الرقم
                            </Text>
                            <div className="flex flex-col items-end justify-start">
                              <Text
                                className="capitalize text-indigo-100 text-right text-sm"
                                size="txtTajawalMedium14Indigo100"
                              >
                                الهاتف
                              </Text>
                              <Text
                                className="mt-0.5 text-gray-900 text-right text-xl"
                                size="txtTajawalMedium20Gray900"
                              >
                                0530305441
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-blue-50_01 border-solid flex md:flex-1 flex-col items-center justify-start p-3 rounded-[10px] w-[17%] md:w-full">
                          <div className="flex flex-col items-center justify-end my-2 w-auto">
                            <div className="flex flex-row gap-1 items-center justify-end w-auto">
                              <CheckBox
                                className="capitalize font-medium leading-[normal] text-base text-gray-900 text-right"
                                inputClassName="mr-[5px]"
                                name="NineHundredSixtySix"
                                id="NineHundredSixtySix"
                                label="+966"
                                size="sm"
                              ></CheckBox>
                              <Img
                                className="h-[21px] md:h-auto object-cover rounded-sm w-[30px]"
                                src="images/img_saudiarabia.png"
                                alt="saudiarabia"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-6 w-full">
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex md:flex-1 flex-col items-center justify-start mb-[3px] p-[13px] rounded-[10px] w-[17%] md:w-full">
                        <div className="flex flex-row items-center justify-between my-1.5 w-[97%] md:w-full">
                          <div className="border border-blue-50_01 border-solid h-4 rounded-[50%] w-4"></div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="capitalize text-black-900 text-right text-xl"
                              size="txtTajawalMedium20Black900"
                            >
                              انثي
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex md:flex-1 flex-col items-center justify-start mb-[3px] p-[13px] rounded-[10px] w-[17%] md:w-full">
                        <div className="flex flex-row items-end justify-between my-1.5 w-[97%] md:w-full">
                          <div className="border border-pink-400 border-solid flex flex-col h-4 items-center justify-start my-1 p-[3px] rounded-[50%] w-4">
                            <div className="bg-pink-400 h-2.5 rounded-[50%] w-2.5"></div>
                          </div>
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="capitalize text-black-900 text-right text-xl"
                              size="txtTajawalMedium20Black900"
                            >
                              ذكر
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="font-montserrat md:h-[61px] h-[68px] relative w-[59%] md:w-full">
                        <Text
                          className="absolute bottom-[0] right-[4%] text-[18.48px] text-right text-white-A700"
                          size="txtMontserratRomanMedium1848"
                        >
                          رمز المرور غير صحيح
                        </Text>
                        <div className="absolute bg-white-A700 border border-blue-50_01 border-solid flex flex-col font-tajawal inset-x-[0] items-end justify-start mx-auto p-2.5 rounded-[10px] top-[0] w-full">
                          <Text
                            className="capitalize text-indigo-100 text-right text-sm"
                            size="txtTajawalMedium14Indigo100"
                          >
                            البريد الإلكتروني
                          </Text>
                          <Text
                            className="lowercase mr-[9px] text-gray-900 text-right text-xl"
                            size="txtTajawalMedium20Gray900"
                          >
                            AZAB3954@GMAIL.COM
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[499px] mt-[27px] rounded-[10px] text-center text-lg w-[212px]"
                      shape="round"
                      color="pink_400"
                      size="3xl"
                      variant="fill"
                    >
                      حفظ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-50 flex flex-col gap-6 h-max inset-y-[0] items-center justify-end my-auto py-1.5 right-[2%] rounded-[10px] w-[31%]">
            <div className="flex flex-col gap-[33px] items-end justify-start mt-[22px] w-auto">
              <div className="bg-orange-300_19 flex flex-col items-center justify-start p-4 rounded-[36px] w-full">
                <div className="flex flex-row gap-4 items-end justify-center w-[48%] md:w-full">
                  <Text
                    className="capitalize mb-1 mt-[11px] text-orange-300_03 text-right text-xl"
                    size="txtTajawalBold20Orange30003"
                  >
                    عميل ذهبي
                  </Text>
                  <Img
                    className="h-10 md:h-auto object-cover w-[28%]"
                    src="images/img_layer19.png"
                    alt="layerNineteen"
                  />
                </div>
              </div>
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
                  className="capitalize ml-[69px] text-black-900 text-right text-xl"
                  size="txtTajawalBold20"
                >
                  نقاط حسابي
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
                className="common-pointer flex flex-row gap-2.5 items-center justify-end w-[68%] md:w-full"
                onClick={() => navigate("/two")}
              >
                <Text
                  className="capitalize text-black-900 text-right text-xl"
                  size="txtTajawalBold20"
                >
                  شراء رصيد للحساب
                </Text>
                <Button
                  className="flex h-14 items-center justify-center rounded-[10px] w-14"
                  shape="round"
                  color="gray_50_02"
                  size="lg"
                  variant="fill"
                >
                  <Img className="h-8" src="images/img_clock.svg" alt="clock" />
                </Button>
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
                  <Img className="h-8" src="images/img_globe.svg" alt="globe" />
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
                  <Img className="h-8" src="images/img_inbox.svg" alt="inbox" />
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
                  <Img className="h-8" src="images/img_call.svg" alt="call" />
                </Button>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-end w-[55%] md:w-full">
                <Text
                  className="capitalize text-red-A200 text-right text-xl"
                  size="txtTajawalBold20RedA200"
                >
                  الغاء الاشتراك
                </Text>
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[10px] w-[52px]"
                  shape="round"
                  color="red_A400_0c"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_thumbsup_red_a200.svg"
                    alt="thumbsup"
                  />
                </Button>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-end w-[55%] md:w-full">
                <Text
                  className="capitalize text-red-A200 text-right text-xl"
                  size="txtTajawalBold20RedA200"
                >
                  تسجيل الخروج
                </Text>
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[10px] w-[52px]"
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
            <div className="bg-gray-50 flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
              <Button
                className="common-pointer capitalize cursor-pointer font-bold h-[54px] leading-[normal] mt-[5px] rounded-[10px] text-center text-lg w-[349px]"
                onClick={() => navigate("/page1")}
                shape="round"
                color="pink_400"
                size="xl"
                variant="fill"
              >
                كشف حساب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page12;
