import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[33px] items-end justify-start w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col items-end justify-start p-2 rounded-[10px] w-full">
            <div className="flex flex-row gap-2.5 items-center justify-end w-[67%] md:w-full">
              <Text
                className="capitalize text-black-900 text-right text-xl"
                size="txtTajawalBold20"
              >
                البيانات الشخصية
              </Text>
              <div className="bg-pink-400 flex flex-col h-14 md:h-auto items-start justify-start p-3 rounded-lg w-14">
                <Img
                  className="h-8 w-8"
                  src="images/img_lock_white_a700.svg"
                  alt="lock_One"
                />
              </div>
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
              className="capitalize cursor-pointer font-medium font-tajawal h-[37px] leading-[normal] my-[9px] rounded-[18px] text-center text-xs w-[105px]"
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
              <Img className="h-8" src="images/img_clock.svg" alt="clock" />
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
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
