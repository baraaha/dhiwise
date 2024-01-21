import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-36 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row gap-8 items-start justify-between mb-[175px] w-full">
                <div className="flex md:flex-1 flex-col gap-[25px] items-end justify-start md:mt-0 mt-4 w-[66%] md:w-full">
                  <div className="flex flex-col gap-[27px] items-end justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="capitalize text-2xl md:text-[22px] text-black-900 text-right sm:text-xl"
                        size="txtTajawalBold24"
                      >
                        الاشتراكات
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[29px] grid md:grid-cols-1 grid-cols-2 justify-center mr-[3px] w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50 flex flex-1 flex-col gap-8 justify-start pb-6 rounded-[20px] w-full">
                        <div className="bg-gray-500 flex flex-col items-end justify-end p-2 rounded-tl-[20px] rounded-tr-[20px] w-full">
                          <div className="flex flex-row gap-[7px] items-start justify-end mr-[9px] mt-1.5 w-[65%] md:w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtTajawalMedium20"
                            >
                              مميزات الاشتراك الفضي
                            </Text>
                            <Img
                              className="h-7 md:h-auto object-cover w-7"
                              src="images/img_football251iconicons.png"
                              alt="football251icon"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[131px] w-[62%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            عدد 2 ذبائح شهريا بخصم ١٠%{" "}
                          </Text>
                          <Img
                            className="h-[21px]"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-end md:ml-[0] ml-[239px] w-[35%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            التوصيل مجانا
                          </Text>
                          <Img
                            className="h-3 mt-[3px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[113px] w-[67%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            تقطيع المفروم والشوربة مجانا
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_free1.svg"
                            alt="freeOne"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[139px] w-3/5 md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            عناية خاصة في اختيار الذبائح
                          </Text>
                          <Img
                            className="h-[19px]"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-end md:ml-[0] ml-[232px] w-[37%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            أولوية التوصيل
                          </Text>
                          <Img
                            className="h-3.5"
                            src="images/img_close_red_300.svg"
                            alt="close_One"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] w-[92%] md:w-full">
                          <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[107px] text-base text-center"
                              shape="round"
                              color="pink_400"
                              size="sm"
                              variant="fill"
                            >
                              تعرف عليها
                            </Button>
                            <div className="flex flex-row gap-[11px] items-start justify-between w-[65%]">
                              <Text
                                className="text-black-900 text-lg text-right"
                                size="txtTajawalMedium18"
                              >
                                الخصم يشمل كل المنتجات
                              </Text>
                              <Img
                                className="h-[18px]"
                                src="images/img_user.svg"
                                alt="user"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-[11px] items-start justify-between mt-[26px] w-full">
                            <Text
                              className="text-black-900 text-lg text-right"
                              size="txtTajawalMedium18"
                            >
                              يمكن تقسط المبلغ على ثلاث دفعات شهرية
                            </Text>
                            <Img
                              className="h-[15px] w-4"
                              src="images/img_printer.svg"
                              alt="printer"
                            />
                          </div>
                          <Button
                            className="common-pointer capitalize cursor-pointer font-bold leading-[normal] mt-8 rounded-[10px] text-center text-lg w-[358px]"
                            onClick={() => navigate("/page16")}
                            shape="round"
                            color="gray_500"
                            size="xl"
                            variant="fill"
                          >
                            أختر باقة
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gray-50 flex flex-1 flex-col gap-8 justify-start pb-6 rounded-[20px] w-full">
                        <div className="bg-orange-300_02 flex flex-col items-end justify-end p-[9px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                          <div className="flex flex-row gap-2 items-center justify-end mr-[7px] mt-[5px] w-[65%] md:w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtTajawalMedium20"
                            >
                              مميزات الإشتراك الذهبي
                            </Text>
                            <Img
                              className="h-[27px] md:h-auto object-cover w-[13%]"
                              src="images/img_layer19.png"
                              alt="layerNineteen"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[131px] w-[62%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            عدد 3 ذبائح شهريا بخصم ١٠%{" "}
                          </Text>
                          <Img
                            className="h-[21px]"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-end md:ml-[0] ml-[239px] w-[35%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            التوصيل مجانا
                          </Text>
                          <Img
                            className="h-3 mt-[3px]"
                            src="images/img_television_green_a700.svg"
                            alt="television"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[113px] w-[67%] md:w-full">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            تقطيع المفروم والشوربة مجانا
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_free1.svg"
                            alt="freeOne"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[139px] w-3/5 md:w-full">
                          <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                            <Text
                              className="text-black-900 text-lg text-right"
                              size="txtTajawalMedium18"
                            >
                              عناية خاصة في اختيار الذبائح
                            </Text>
                            <Img
                              className="h-[19px]"
                              src="images/img_thumbsup_amber_a400_02.svg"
                              alt="thumbsup"
                            />
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-end md:ml-[0] ml-[93px] mt-[29px] w-[61%] md:w-full">
                            <Text
                              className="text-black-900 text-lg text-right"
                              size="txtTajawalMedium18"
                            >
                              أولوية التوصيل
                            </Text>
                            <Img
                              className="h-3.5"
                              src="images/img_close_red_300_14x21.svg"
                              alt="close_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[11px] items-start justify-between md:ml-[0] ml-[3px] mt-[34px] w-[99%] md:w-full">
                            <Text
                              className="text-black-900 text-lg text-right"
                              size="txtTajawalMedium18"
                            >
                              الخصم يشمل كل المنتجات
                            </Text>
                            <Img
                              className="h-[18px]"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-8 items-center justify-start ml-4 md:ml-[0] w-[92%] md:w-full">
                          <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                            <Text
                              className="text-black-900 text-lg text-right"
                              size="txtTajawalMedium18"
                            >
                              يمكن تقسط المبلغ على ثلاث دفعات شهرية
                            </Text>
                            <Img
                              className="h-[15px] w-4"
                              src="images/img_printer_blue_gray_500.svg"
                              alt="printer"
                            />
                          </div>
                          <Button
                            className="common-pointer capitalize cursor-pointer font-bold leading-[normal] rounded-[10px] text-center text-lg w-[358px]"
                            onClick={() => navigate("/page13")}
                            shape="round"
                            color="orange_300_02"
                            size="xl"
                            variant="fill"
                          >
                            أختر باقة
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-start pb-8 rounded-[20px] w-[49%] md:w-full">
                    <div className="bg-red-300_02 flex flex-col items-end justify-end p-2 rounded-tl-[20px] rounded-tr-[20px] w-full">
                      <div className="flex flex-row gap-[9px] items-start justify-end mr-[9px] mt-1.5 w-[68%] md:w-full">
                        <Text
                          className="text-center text-white-A700 text-xl"
                          size="txtTajawalMedium20"
                        >
                          مميزات الاشتراك البرونزي
                        </Text>
                        <div className="flex flex-col h-7 items-center justify-start w-7">
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_football252iconicons.png"
                            alt="football252icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start mt-8 w-[67%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-between md:ml-[0] ml-[3px] w-[99%] md:w-full">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          <span className="text-black-900 font-tajawal font-medium">
                            عدد 1 ذبائح شهريا بخصم{" "}
                          </span>
                          <span className="text-black-900 font-tajawal font-normal">
                            {" "}
                            2.5%
                          </span>
                        </Text>
                        <Img
                          className="h-[21px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          تقطيع المفروم والشوربة مجانا
                        </Text>
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_free1.svg"
                          alt="freeOne"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[26px] w-[90%] md:w-full">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          عناية خاصة في اختيار الذبائح
                        </Text>
                        <Img
                          className="h-[19px]"
                          src="images/img_thumbsup_amber_a400_02_19x16.svg"
                          alt="thumbsup"
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-end md:ml-[0] ml-[119px] w-[55%] md:w-full">
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtTajawalMedium18"
                        >
                          أولوية التوصيل
                        </Text>
                        <Img
                          className="h-3.5"
                          src="images/img_close_14x21.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-start mt-[34px] w-[92%] md:w-full">
                      <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[107px] text-base text-center"
                          shape="round"
                          color="pink_400"
                          size="sm"
                          variant="fill"
                        >
                          تعرف عليها
                        </Button>
                        <div className="flex flex-row gap-[11px] items-start justify-between w-[65%]">
                          <Text
                            className="text-black-900 text-lg text-right"
                            size="txtTajawalMedium18"
                          >
                            الخصم يشمل كل المنتجات
                          </Text>
                          <Img
                            className="h-[18px]"
                            src="images/img_user.svg"
                            alt="user"
                          />
                        </div>
                      </div>
                      <Button
                        className="common-pointer capitalize cursor-pointer font-bold leading-[normal] rounded-[10px] text-center text-lg w-[358px]"
                        onClick={() => navigate("/page8")}
                        shape="round"
                        color="red_300_02"
                        size="xl"
                        variant="fill"
                      >
                        أختر باقة
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 md:h-[1058px] h-[725px] mb-[367px] p-2.5 relative rounded-[10px] w-[33%] md:w-full">
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
                            alt="user_One"
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
      </div>
    </>
  );
};

export default Page;
