import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const EightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-16 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 md:h-[1036px] sm:h-[815px] h-[868px] relative rounded-[20px] w-full">
            <div className="md:h-[1036px] h-[701px] sm:h-[713px] mt-[33px] mx-auto w-[97%] md:w-full">
              <div className="absolute bg-white-A700 h-[680px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
              <div className="absolute flex flex-col items-end justify-start left-[6%] top-[0] w-[57%]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
                  size="txtTajawalBold40"
                >
                  حسابي
                </Text>
                <div className="flex flex-col h-[178px] items-center justify-start mt-[43px] w-[178px]">
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
                            <div className="flex flex-row sm:gap-10 items-center justify-between mb-[5px] w-[96%] md:w-full">
                              <Text
                                className="text-center text-pink-400 text-xl"
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
                                size="txtTajawalRegular20"
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
                      <div className="bg-pink-400 flex flex-col items-center justify-center md:ml-[0] ml-[499px] mt-[27px] md:px-10 sm:px-5 px-[50px] py-[21px] rounded-[10px] w-[212px]">
                        <Text
                          className="capitalize text-lg text-right text-white-A700 w-auto"
                          size="txtTajawalBold18WhiteA700"
                        >
                          حفظ
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 md:h-[1003px] sm:h-[815px] h-[868px] inset-[0] justify-center m-auto p-5 rounded-[20px] w-full">
              <div className="absolute md:h-[1003px] sm:h-[680px] h-[701px] inset-x-[0] mx-auto top-[4%] w-[97%] md:w-full">
                <div className="absolute bg-white-A700 h-[680px] inset-[0] justify-center m-auto rounded-[20px] w-full"></div>
                <div className="absolute flex flex-col items-end justify-start left-[6%] top-[0] w-[57%]">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
                    size="txtTajawalBold40"
                  >
                    حسابي
                  </Text>
                  <div className="flex flex-col h-[178px] items-center justify-start mt-[43px] w-[178px]">
                    <div className="flex flex-col h-[178px] items-center justify-start w-[178px]">
                      <div className="h-[178px] relative w-[178px]">
                        <Img
                          className="h-[178px] m-auto rounded-[50%] w-[178px]"
                          src="images/img_ellipse73.png"
                          alt="ellipseSeventyThree_One"
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
                            alt="television_One"
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
                              <div className="flex flex-row sm:gap-10 items-center justify-between mb-[5px] w-[96%] md:w-full">
                                <Text
                                  className="text-center text-pink-400 text-xl"
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
                                    name="NineHundredSixtySix_One"
                                    id="NineHundredSixtySix_One"
                                    label="+966"
                                    size="sm"
                                  ></CheckBox>
                                  <Img
                                    className="h-[21px] md:h-auto object-cover rounded-sm w-[30px]"
                                    src="images/img_saudiarabia.png"
                                    alt="saudiarabia_One"
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
                                  size="txtTajawalRegular20"
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
              <div className="absolute bg-gray-50 flex flex-col gap-6 h-max inset-y-[0] items-center justify-end my-auto p-[23px] sm:px-5 right-[2%] rounded-[10px] w-[31%]">
                <Sidebar1 className="flex flex-col items-center justify-start w-full" />
                <div
                  className="common-pointer bg-pink-400 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[146px] py-4 rounded-[10px] w-[358px]"
                  onClick={() => navigate("/one2")}
                >
                  <div className="flex flex-row gap-2.5 items-start justify-center w-full">
                    <Text
                      className="capitalize text-lg text-right text-white-A700"
                      size="txtTajawalMedium18WhiteA700"
                    >
                      اشتراك
                    </Text>
                    <Img
                      className="h-[21px]"
                      src="images/img_settings_orange_300_04.svg"
                      alt="settings_Two"
                    />
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

export default EightPage;
