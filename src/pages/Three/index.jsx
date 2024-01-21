import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const ThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-7 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 md:h-[1048px] sm:h-[721px] h-[789px] p-5 relative rounded-[20px] w-full">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-2.5 rounded-[20px] w-[97%]">
              <div className="flex flex-col gap-[23px] items-end justify-start mb-[268px] md:ml-[0] ml-[49px] w-3/5 md:w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                  size="txtTajawalBold24"
                >
                  عنواني
                </Text>
                <div className="flex flex-col gap-8 items-end justify-start w-full">
                  <List
                    className="flex flex-col gap-4 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700_6c flex flex-1 flex-col items-center justify-start my-0 outline outline-[1px] outline-indigo-50_6c p-2.5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-col gap-10 items-start justify-start w-[11%] md:w-full">
                          <Img
                            className="h-6 w-14"
                            src="images/img_settings_indigo_100_24x56.svg"
                            alt="settings"
                          />
                          <Button
                            className="cursor-pointer font-medium min-w-[72px] rounded text-center text-sm"
                            color="pink_400"
                            size="sm"
                            variant="fill"
                          >
                            {" "}
                            الإفتراضي
                          </Button>
                        </div>
                        <div className="flex flex-col gap-2 items-end justify-center md:ml-[0] ml-[329px] w-auto">
                          <Text
                            className="capitalize text-gray-900 text-lg text-right w-auto"
                            size="txtTajawalBlack18"
                          >
                            عنوان المنزل
                          </Text>
                          <Text
                            className="capitalize max-w-[207px] md:max-w-full text-indigo-100 text-right text-sm"
                            size="txtTajawalRegular14"
                          >
                            دبي مول ومجاور لبرج خلي ,المحافظة 7625560
                          </Text>
                        </div>
                        <Img
                          className="h-[81px] sm:h-auto ml-2.5 md:ml-[0] object-cover rounded-lg w-[13%] md:w-full"
                          src="images/img_rectangle15.png"
                          alt="rectangleFifteen"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700_6c flex flex-1 flex-col items-center justify-start my-0 outline outline-[1px] outline-indigo-50_6c p-2.5 rounded-[10px] shadow-bs4 w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                        <div className="flex flex-col gap-10 items-start justify-start w-[16%] md:w-full">
                          <Img
                            className="h-6 w-14"
                            src="images/img_settings_indigo_100_24x56.svg"
                            alt="settings"
                          />
                          <Button
                            className="cursor-pointer font-medium min-w-[112px] rounded text-center text-sm"
                            color="pink_700_19"
                            size="sm"
                            variant="fill"
                          >
                            ضبط الإفتراضي
                          </Button>
                        </div>
                        <div className="flex flex-col gap-2 items-end justify-center md:ml-[0] ml-[289px] w-auto">
                          <Text
                            className="capitalize text-gray-900 text-lg text-right w-auto"
                            size="txtTajawalBlack18"
                          >
                            عنوان العمل
                          </Text>
                          <Text
                            className="capitalize max-w-[207px] md:max-w-full text-indigo-100 text-right text-sm"
                            size="txtTajawalRegular14"
                          >
                            دبي مول ومجاور لبرج خلي ,المحافظة 7625560
                          </Text>
                        </div>
                        <Img
                          className="h-[81px] sm:h-auto ml-2.5 md:ml-[0] object-cover rounded-lg w-[13%] md:w-full"
                          src="images/img_rectangle15.png"
                          alt="rectangleFifteen"
                        />
                      </div>
                    </div>
                  </List>
                  <Button
                    className="capitalize cursor-pointer font-bold leading-[normal] rounded-[10px] text-center text-lg w-[212px]"
                    shape="round"
                    color="pink_400"
                    size="3xl"
                    variant="fill"
                  >
                    إضافة عنوان جديد
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-50 flex flex-col h-max inset-y-[0] items-center justify-end my-auto p-2.5 right-[2%] rounded-[10px] w-[31%]">
              <div className="flex flex-col items-center justify-start mt-3.5 w-[94%] md:w-full">
                <div className="flex flex-col gap-[33px] items-end justify-start w-auto">
                  <div
                    className="common-pointer flex flex-row gap-2.5 items-center justify-end w-[64%] md:w-full"
                    onClick={() => navigate("/eight")}
                  >
                    <Text
                      className="capitalize text-black-900 text-right text-xl"
                      size="txtTajawalBold20"
                    >
                      البيانات الشخصية
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
                        src="images/img_lock_black_900.svg"
                        alt="lock_One"
                      />
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-end justify-start p-2 rounded-[10px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-end w-[36%] md:w-full">
                      <Text
                        className="capitalize text-black-900 text-right text-xl"
                        size="txtTajawalBold20"
                      >
                        عنواني
                      </Text>
                      <div className="bg-pink-400 flex flex-col h-14 md:h-auto items-start justify-start p-3 rounded-lg w-14">
                        <Img
                          className="h-8 w-8"
                          src="images/img_settings_white_a700.svg"
                          alt="settings_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start w-[98%] md:w-full">
                    <div className="flex flex-row items-center justify-start w-full">
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
                          alt="settings_Two"
                        />
                      </Button>
                    </div>
                    <div
                      className="common-pointer flex flex-row gap-2.5 items-center justify-end mt-[33px] w-[72%] md:w-full"
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
                    <div className="flex flex-row gap-2.5 items-center justify-end mt-[33px] w-1/2 md:w-full">
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
                      className="common-pointer flex flex-row gap-2.5 items-center justify-end mt-[33px] w-[46%] md:w-full"
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
                    <div className="flex flex-row gap-2.5 items-center justify-end mt-[33px] w-[65%] md:w-full">
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
                    <div className="h-14 md:h-[81px] mt-[29px] relative w-full">
                      <div className="absolute bottom-[0] flex flex-row items-center justify-evenly right-[0] w-[53%]">
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
                      <Button
                        className="common-pointer absolute capitalize cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[350px] mx-auto rounded-[10px] text-center text-lg top-[0]"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreePage;
