import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-6 mt-[49px] mx-auto w-[87%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[14%] md:w-full">
                <div className="flex flex-col gap-5 items-end justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                    size="txtMontserratBold26"
                  >
                    صفحات سهول
                  </Text>
                  <div className="flex flex-col gap-3 justify-start w-[89%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[87px] text-gray-400_01 text-lg"
                      size="txtTajawalMedium18Gray40001"
                    >
                      الطلبات
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <Line className="bg-gray-200_19 h-px rotate-[-180deg]" />
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[68px] mt-2.5 text-gray-400_01 text-lg"
                          size="txtTajawalMedium18Gray40001"
                        >
                          عن سهول
                        </Text>
                      </li>
                      <li>
                        <Line className="bg-gray-200_19 h-px mt-3 rotate-[-180deg]" />
                      </li>
                      <li>
                        <Text
                          className="md:ml-[0] ml-[58px] mt-2.5 text-gray-400_01 text-lg"
                          size="txtTajawalMedium18Gray40001"
                        >
                          تواصل معنا
                        </Text>
                      </li>
                      <li>
                        <Line className="bg-gray-200_19 h-px mt-[13px] rotate-[-180deg]" />
                      </li>
                      <li>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[9px]">
                          <Text
                            className="text-gray-400_01 text-lg"
                            size="txtTajawalMedium18Gray40001"
                          >
                            سياسة الخصوصية
                          </Text>
                          <Line className="bg-gray-200_19 h-px rotate-[-180deg] w-full" />
                        </div>
                      </li>
                      <li>
                        <Text
                          className="ml-4 md:ml-[0] mt-[13px] text-gray-400_01 text-lg"
                          size="txtTajawalMedium18Gray40001"
                        >
                          الشروط و الأحكام{" "}
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-9 items-center justify-start md:ml-[0] ml-[249px] w-[36%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                    <Img
                      className="h-[93px]"
                      src="images/img_group24_pink_400.svg"
                      alt="groupTwentyFour"
                    />
                    <Text
                      className="capitalize leading-[32.00px] text-center text-white-A700 text-xl w-full"
                      size="txtTajawalMedium20"
                    >
                      افضل امنواع الحوم المتواجد و جميع انواع اللحوم التي تحتاجة
                      مثل لحم الغذال و البقر و الجمال{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[43px] items-center justify-center w-[64%] md:w-full">
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    shape="circle"
                    color="white_A700_19"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[22px]"
                      src="images/img_facebook.png"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    shape="circle"
                    color="white_A700_19"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_twitter.png"
                      alt="twitter"
                    />
                  </Button>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    shape="circle"
                    color="white_A700_19"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_linkind.png"
                      alt="linkind"
                    />
                  </Button>
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    shape="circle"
                    color="white_A700_19"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_instagram.png"
                      alt="instagram"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[169px] w-1/5 md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.23px]"
                  size="txtMontserratRomanBold22"
                >
                  بيانات التواصل
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-end mt-[27px] w-[62%] md:w-full">
                  <Text
                    className="capitalize text-lg text-white-A700 tracking-[-0.20px]"
                    size="txtMontserratRomanRegular18"
                  >
                    +96612352617
                  </Text>
                  <Img
                    className="h-7 w-7"
                    src="images/img_call_pink_400.svg"
                    alt="call"
                  />
                </div>
                <div className="flex flex-col gap-7 items-start justify-start mt-[29px] w-full">
                  <Line className="bg-gray-200_19 h-px ml-0.5 md:ml-[0] rotate-[-180deg] w-full" />
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                    <Text
                      className="lowercase text-lg text-white-A700 tracking-[-0.20px]"
                      size="txtMontserratRomanRegular18"
                    >
                      info@COHOOLMEAT.com
                    </Text>
                    <Img
                      className="h-7 w-7"
                      src="images/img_1904660emaile.svg"
                      alt="1904660emaile"
                    />
                  </div>
                  <Line className="bg-gray-200_19 h-px ml-0.5 md:ml-[0] rotate-[-180deg] w-full" />
                  <div className="flex flex-row gap-2.5 items-start justify-end ml-20 md:ml-[0] w-[64%] md:w-full">
                    <Text
                      className="lowercase mt-0.5 text-lg text-white-A700 tracking-[-0.20px]"
                      size="txtMontserratRomanRegular18"
                    >
                      ADRESS COHOOL
                    </Text>
                    <Img
                      className="h-7 w-7"
                      src="images/img_4243256uxbasi.svg"
                      alt="4243256uxbasi"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray-200_19 h-px mt-[49px] rotate-[-180deg] w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-8 w-full">
              <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[18%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconsaxlinearcopyright.svg"
                  alt="iconsaxlinearco"
                />
                <Text
                  className="capitalize mt-[3px] text-base text-white-A700"
                  size="txtMontserratMedium16"
                >
                  2023 All Rights Reserved
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start w-[18%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconsaxlinearcopyright.svg"
                  alt="iconsaxlinearco_One"
                />
                <Text
                  className="capitalize mt-[3px] text-base text-white-A700"
                  size="txtMontserratMedium16"
                >
                  2023 All Rights Reserved
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
