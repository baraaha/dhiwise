import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Switch, Text } from "components";
import Header from "components/Header";

const Four1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-worksans gap-8 items-center justify-start mx-auto pb-7 w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col font-tajawal items-center justify-start max-w-[1312px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[54px] items-start justify-end p-7 sm:px-5 rounded-[20px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[18px] w-[62%] md:w-full">
              <div className="md:h-[390px] h-[393px] relative w-full">
                <div className="bg-gray-50 flex flex-col h-full items-start justify-start mt-[39px] p-2.5 rounded-[10px] w-[45%]">
                  <div className="flex flex-row items-center justify-between my-0.5 w-[96%] md:w-full">
                    <Switch
                      onColor="#eceeff"
                      offColor="#eceeff"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={false}
                      className=""
                    />
                    <Text
                      className="lowercase text-gray-900 text-lg"
                      size="txtTajawalMedium18Gray900"
                    >
                      ضبط كعنوان افتراضي
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto w-full">
                  <Text
                    className="text-black-900 text-right text-xl"
                    size="txtTajawalBold20"
                  >
                    اسم العنوان
                  </Text>
                  <Input
                    name="group1171275997"
                    placeholder="البيت: الرياض النرجس شارع عمر بن الخطاب، 3453"
                    className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900_87 text-base text-right w-full"
                    wrapClassName="flex mt-[15px] w-[54%]"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-5 mr-[31px]"
                        src="images/img_settings_indigo_100_24x24.svg"
                        alt="settings"
                      />
                    }
                    color="gray_50"
                    size="xs"
                  ></Input>
                  <div className="flex flex-col gap-[7px] items-end justify-start mt-[31px] w-full">
                    <Text
                      className="text-black-900 text-right text-xl"
                      size="txtTajawalMedium20Black900"
                    >
                      اختار العنوان علي الخريطة
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-gray-50 flex flex-col gap-4 justify-start p-2.5 rounded-[10px] w-full">
                        <div className="h-[178px] md:h-[184px] mt-1.5 relative w-full">
                          <Img
                            className="h-[178px] m-auto object-cover rounded-[10px] w-full"
                            src="images/img_rectangle3467536.png"
                            alt="rectangle346753"
                          />
                          <Img
                            className="absolute h-[30px] right-[15%] top-[14%] w-[30px]"
                            src="images/img_user_pink_400.svg"
                            alt="user_One"
                          />
                        </div>
                        <div className="flex flex-row gap-[11px] items-start justify-end md:ml-[0] ml-[376px] w-[49%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_settings_indigo_100_24x24.svg"
                            alt="settings_Two"
                          />
                          <Text
                            className="capitalize text-base text-black-900_87 text-right"
                            size="txtTajawalMedium16Black90087"
                          >
                            البيت: الرياض النرجس شارع عمر بن الخطاب، 3453
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col gap-6 items-end justify-start max-w-3xl mt-6 p-4 rounded-[10px] w-full">
                <Text
                  className="text-black-900 text-right text-xl w-auto"
                  size="txtTajawalMedium20Black900"
                >
                  حدد موقعك من المدينة
                </Text>
                <div className="flex md:flex-col flex-row gap-[31px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-[49%] md:w-full">
                    <div className="bg-white-A700 flex flex-row gap-[222px] items-center justify-start p-2 rounded-[10px] w-auto">
                      <div className="border border-pink-400 border-solid flex flex-col h-4 items-center justify-start p-[3px] rounded-[50%] w-4">
                        <div className="bg-pink-400 h-2.5 rounded-[50%] w-2.5"></div>
                      </div>
                      <Text
                        className="text-base text-black-900 text-right w-auto"
                        size="txtTajawalMedium16Black900"
                      >
                        شمال جغرافي
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-[227px] items-center justify-start p-2 rounded-[10px] w-auto">
                      <div className="border border-indigo-100 border-solid h-4 rounded-[50%] w-4"></div>
                      <Text
                        className="text-base text-black-900 text-right w-auto"
                        size="txtTajawalMedium16Black900"
                      >
                        شرق جغرافي
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-[48%] md:w-full">
                    <div className="bg-white-A700 flex flex-row gap-[222px] items-center justify-start p-2 rounded-[10px] w-auto">
                      <div className="border border-indigo-100 border-solid h-4 rounded-[50%] w-4"></div>
                      <Text
                        className="text-base text-black-900 text-right w-auto"
                        size="txtTajawalMedium16Black900"
                      >
                        شرق جغرافي
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-[222px] items-center justify-start p-2 rounded-[10px] w-auto">
                      <div className="border border-indigo-100 border-solid h-4 rounded-[50%] w-4"></div>
                      <Text
                        className="text-base text-black-900 text-right w-auto"
                        size="txtTajawalMedium16Black900"
                      >
                        شرق جغرافي
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[212px] md:ml-[0] ml-[556px] mt-4 text-center text-xl"
                onClick={() => navigate("/three")}
                shape="round"
                color="pink_400"
                size="3xl"
                variant="fill"
              >
                حفظ
              </Button>
            </div>
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-end md:mt-0 my-1 p-2.5 rounded-[10px] w-[33%] md:w-full">
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
                          alt="settings_Three"
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
                          alt="settings_Four"
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
                            alt="user_Two"
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

export default Four1Page;
