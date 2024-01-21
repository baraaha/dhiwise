import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-7 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[51px] items-center justify-end p-[31px] sm:px-5 rounded-[20px] w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[61%] md:w-full">
              <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-right"
                  size="txtTajawalBold32"
                >
                  اشتراك في الباقة الذهبية
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-orange-300_02 border border-blue-50_01 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end p-[13px] rounded-[10px] w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                      size="txtTajawalBold32WhiteA700"
                    >
                      120 ريال
                    </Text>
                    <div className="flex flex-col gap-[7px] items-end justify-start md:ml-[0] ml-[344px]">
                      <Text
                        className="lowercase text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                        size="txtTajawalBold24WhiteA700"
                      >
                        عميل ذهبي
                      </Text>
                      <Text
                        className="lowercase text-lg text-right text-white-A700"
                        size="txtTajawalMedium18WhiteA700"
                      >
                        5 ذبائح في الشهر خصم 10%
                      </Text>
                    </div>
                    <Img
                      className="md:flex-1 h-[41px] sm:h-auto ml-2.5 md:ml-[0] object-cover w-[6%] md:w-full"
                      src="images/img_layer19.png"
                      alt="layerNineteen"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-center justify-end p-4 rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mt-[3px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[29px] items-end justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-end justify-start mb-0.5 md:mt-0 mt-[42px] w-[48%] md:w-full">
                      <Text
                        className="text-black-900 text-lg text-right"
                        size="txtTajawalMedium18"
                      >
                        تحديد نوع البطاقة
                      </Text>
                      <Img
                        className="h-[53px]"
                        src="images/img_group1171276070.svg"
                        alt="group1171276070"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-end justify-start w-[48%] md:w-full">
                      <div className="flex flex-col gap-[7px] items-end justify-start">
                        <Text
                          className="lowercase text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                          size="txtTajawalBold24"
                        >
                          سداد
                        </Text>
                        <Text
                          className="text-black-900_87 text-lg text-right"
                          size="txtTajawalMedium18Black90087"
                        >
                          ادخل بيانات البطاقة لتأكيد إضافة المبلغ
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-row items-center justify-between p-[13px] rounded-[10px] w-full">
                        <Text
                          className="lowercase ml-0.5 text-gray-900 text-right text-xl"
                          size="txtTajawalMedium20Gray900"
                        >
                          <span className="text-gray-900 font-tajawal font-bold">
                            500{" "}
                          </span>
                          <span className="text-gray-900 font-tajawal text-base font-bold">
                            ريال
                          </span>
                        </Text>
                        <Text
                          className="lowercase mr-0.5 text-base text-gray-900_75 text-right"
                          size="txtTajawalRegular16"
                        >
                          شراء رصيد المحفظة
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-9 w-full">
                    <div className="flex md:flex-1 flex-col gap-2 items-end justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900 text-lg text-right"
                        size="txtTajawalMedium18"
                      >
                        اسم حامل البطاقة
                      </Text>
                      <Input
                        name="group1171276070_One"
                        placeholder="mohamed ahmed essam"
                        className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-base text-right w-full"
                        wrapClassName="border border-blue-50_01 border-solid w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-2 items-end justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900 text-lg text-right"
                        size="txtTajawalMedium18"
                      >
                        رقم البطاقة
                      </Text>
                      <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-row items-center justify-between p-3.5 rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtTajawalMedium18"
                        >
                          3343 2145 1242 1212
                        </Text>
                        <Img
                          className="h-5"
                          src="images/img_television_blue_600.svg"
                          alt="television"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[13px] w-full">
                    <div className="flex md:flex-1 flex-col gap-2.5 items-end justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900 text-lg text-right"
                        size="txtTajawalMedium18"
                      >
                        CVV
                      </Text>
                      <Input
                        name="language"
                        placeholder="3343   "
                        className="font-medium p-0 placeholder:text-black-900 text-left text-lg w-full"
                        wrapClassName="border border-blue-50_01 border-solid w-full"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-end justify-start w-[48%] md:w-full">
                      <Text
                        className="text-black-900 text-lg text-right"
                        size="txtTajawalMedium18"
                      >
                        تاريخ الانتهاء
                      </Text>
                      <Input
                        name="group1171276070_Two"
                        placeholder="12/3/2025"
                        className="font-medium leading-[normal] p-0 placeholder:text-black-900 text-lg text-right w-full"
                        wrapClassName="border border-blue-50_01 border-solid w-full"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[445px] mt-5 rounded-[10px] text-center text-lg w-[262px]"
                    shape="round"
                    color="pink_400"
                    size="3xl"
                    variant="fill"
                  >
                    تأكيد الاشتراك
                  </Button>
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
    </>
  );
};

export default Page2;
