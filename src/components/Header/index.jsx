import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[75px] w-[82%] md:w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-[22%]">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                    <Text
                      className="capitalize text-gray-900 text-sm"
                      size="txtWorkSansRomanMedium14"
                    >
                      EN
                    </Text>
                  </div>
                  <Img
                    className="h-3 w-3"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              <Button
                className="flex h-14 items-center justify-center w-14"
                shape="circle"
                color="blue_gray_800_1e"
                size="xl"
                variant="fill"
              >
                <Img className="h-6" src="images/img_lock.svg" alt="lock" />
              </Button>
              <div className="bg-blue_gray-800_1e flex flex-col items-start justify-start p-4 rounded-[28px] w-14">
                <div className="md:h-[23px] h-[25px] relative w-6">
                  <div className="flex flex-col h-full items-center justify-start ml-auto w-1.5">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-1.5 items-start justify-start w-1.5"
                      style={{
                        backgroundImage:
                          "url('images/img_group1171275634.svg')",
                      }}
                    >
                      <Text
                        className="text-[4px] text-white-A700"
                        size="txtTajawalMedium4"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[23px] inset-x-[0] mx-auto top-[0] w-6"
                    src="images/img_frame1171275636.svg"
                    alt="frame1171275636"
                  />
                </div>
              </div>
              <div
                className="common-pointer bg-blue_gray-800_1e flex flex-col items-start justify-start p-4 rounded-[50%] w-14"
                onClick={() => navigate("/page15")}
              >
                <div className="h-5 relative w-3/4">
                  <div className="absolute flex flex-col h-1.5 items-center justify-start right-[0] top-[0] w-1.5">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-1.5 items-start justify-start w-1.5"
                      style={{
                        backgroundImage:
                          "url('images/img_group1171275634.svg')",
                      }}
                    >
                      <Text
                        className="text-[4px] text-white-A700"
                        size="txtTajawalMedium4"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-5 inset-y-[0] left-[0] my-auto"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
              <div className="flex flex-col items-center justify-start rotate-[-180deg] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <ul className="flex md:flex-col flex-row gap-[50px] md:hidden items-center justify-start rotate-[-180deg] w-auto md:w-full common-row-list">
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/seven")}
                      >
                        عن سهول
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/page4")}
                      >
                        تواصل معنا
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/page3")}
                      >
                        فيديو
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/six1")}
                      >
                        الطلبات
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/page7")}
                      >
                        القائمة
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="common-pointer capitalize text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtTajawalRegular24"
                        onClick={() => navigate("/page10")}
                      >
                        الرئيسية
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[77px] md:mt-0 my-0.5"
            src="images/img_settings.svg"
            alt="settings"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
