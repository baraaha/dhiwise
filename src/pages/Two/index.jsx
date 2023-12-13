import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const TwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-7 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-3 w-[96%] md:w-full">
              <div className="flex flex-col gap-8 items-end justify-start w-[63%] md:w-full">
                <div className="flex flex-col gap-12 items-end justify-start w-[45%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-right"
                    size="txtTajawalBold32"
                  >
                    شراء رصيد للمحفظة
                  </Text>
                  <div className="flex flex-col gap-4 items-end justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-end justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                        size="txtTajawalMedium24"
                      >
                        المبلغ
                      </Text>
                      <Text
                        className="text-black-900_87 text-lg text-right"
                        size="txtTajawalMedium18Black90087"
                      >
                        ادخل المبلغ الذي ترغب بإضافته للمحفظة
                      </Text>
                    </div>
                    <Text
                      className="bg-white-A700 border border-blue-50_01 border-solid h-[65px] justify-end lowercase sm:pl-5 pl-[35px] pr-5 py-5 rounded-[10px] text-gray-900 text-right text-xl w-[339px]"
                      size="txtTajawalMedium20Gray900"
                    >
                      <span className="text-gray-900 font-tajawal font-medium">
                        500{" "}
                      </span>
                      <span className="text-gray-900 font-tajawal text-base font-medium">
                        ريال
                      </span>
                    </Text>
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
                        <div className="bg-white-A700 border border-blue-50_01 border-solid flex flex-row items-center justify-between p-3 rounded-[10px] w-full">
                          <div className="flex flex-row gap-[9.52px] items-center justify-center ml-1 w-auto">
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
                              alt="settings_One"
                            />
                          </div>
                          <Img
                            className="h-6 mr-1 w-6"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
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
                            className="lowercase ml-1 text-gray-900 text-right text-xl"
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
                      <div className="flex flex-col gap-2 items-end justify-start">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          اسم حامل البطاقة
                        </Text>
                        <Text
                          className="bg-white-A700 border border-blue-50_01 border-solid h-[53px] justify-end pb-[13px] sm:pl-5 pl-[35px] pr-3.5 pt-[19px] rounded-[10px] text-base text-black-900_75 text-right w-[339px]"
                          size="txtTajawalRegular16Black90075"
                        >
                          الاسم المكتوب في البطاقة
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-end justify-start w-[48%] md:w-full">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          رقم البطاقة
                        </Text>
                        <Input
                          name="group1171276070_One"
                          placeholder="**** **** **** ****"
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-jfflat p-0 text-left text-lg w-full"
                          wrapClassName="border border-blue-50_01 border-solid flex w-full"
                          suffix={
                            <Img
                              className="ml-[35px] my-[3px]"
                              src="images/img_settings_indigo_800.svg"
                              alt="settings"
                            />
                          }
                        ></Input>
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
                          name="group1171276070_Two"
                          placeholder="***"
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-jfflat p-0 text-left text-lg w-full"
                          wrapClassName="border border-blue-50_01 border-solid w-full"
                          size="lg"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[7px] items-end justify-start">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          تاريخ الانتهاء
                        </Text>
                        <Text
                          className="bg-white-A700 border border-blue-50_01 border-solid h-[53px] justify-end sm:pl-5 pl-[35px] pr-3.5 py-4 rounded-[10px] text-base text-black-900_75 text-right w-[339px]"
                          size="txtTajawalRegular16Black90075"
                        >
                          MM/YY
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[445px] mt-4 rounded-[10px] text-center text-lg w-[262px]"
                      shape="round"
                      color="pink_400_75"
                      size="3xl"
                      variant="fill"
                    >
                      1500 ريال - شراء
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col gap-[9px] items-center justify-end mb-3 p-[17px] rounded-[10px] w-[34%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-[7px] w-[97%] md:w-full">
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
                          alt="settings_Three"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-end justify-start p-2 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-end w-[74%] md:w-full">
                        <Text
                          className="capitalize text-black-900 text-right text-xl"
                          size="txtTajawalBold20"
                        >
                          شراء رصيد للمحفظة
                        </Text>
                        <div className="bg-pink-400 flex flex-col items-start justify-start p-3 rounded-[10px] w-14">
                          <Img
                            className="h-8 w-8"
                            src="images/img_television_white_a700.svg"
                            alt="television_One"
                          />
                        </div>
                      </div>
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
                    <div className="flex flex-row gap-2.5 items-center justify-end w-[45%] md:w-full">
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
                  </div>
                </div>
                <Button
                  className="common-pointer capitalize cursor-pointer font-medium leading-[normal] min-w-[350px] rounded-[10px] text-center text-lg"
                  onClick={() => navigate("/one2")}
                  shape="round"
                  color="pink_400"
                  size="lg"
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

export default TwoPage;
