import React from "react";

import { Button, Img, Line, List, Text } from "components";
import CustomerOpinions from "components/CustomerOpinions";
import Footer from "components/Footer";
import Header2 from "components/Header2";
import Section from "components/Section";

const SevenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <Header2 className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full" />
        </header>
        <div className="flex flex-col font-tajawal items-center justify-start w-full">
          <div className="h-64 md:px-5 relative w-full">
            <div className="absolute h-64 inset-[0] justify-center m-auto w-full">
              <Img
                className="h-64 m-auto object-cover w-full"
                src="images/img_rectangle36.png"
                alt="rectangleThirtySix"
              />
              <div className="absolute bottom-[17%] flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto w-[36%]">
                <div className="flex flex-col items-center justify-start w-[52%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-center w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_frame_white_a700.svg"
                      alt="frame_One"
                    />
                    <Text
                      className="capitalize md:text-5xl text-6xl text-white-A700 w-auto"
                      size="txtTajawalBold60"
                    >
                      عن سهول
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize text-center text-lg text-white-A700"
                  size="txtTajawalMedium18WhiteA700"
                >
                  تواصل معنا لحل جميع المشاكل التي تواجهك و الرد علي اي
                  استفسارات
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[209px] left-[2%]"
              src="images/img_asset11.svg"
              alt="assetEleven"
            />
            <Img
              className="absolute h-[174px] object-cover right-[0] top-[0]"
              src="images/img_asset12.png"
              alt="assetTwelve"
            />
          </div>
        </div>
        <div className="flex flex-col font-tajawal gap-[17px] items-end justify-start max-w-[1232px] mt-[78px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-right"
              size="txtTajawalBold32"
            >
              معلومات عن سهول{" "}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="capitalize leading-[40.00px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl w-full"
              size="txtTajawalRegular24Black900"
            >
              اللحم هو جزء هام من تغذيتنا ويعتبر مصدرًا غنيًا بالبروتينات
              والفيتامينات والمعادن. يمكن تقسيم اللحم إلى عدة أنواع رئيسية مثل
              اللحم الأحمر واللحم الأبيض واللحم البحري. وفيما يلي بعض المعلومات
              حول تقطيع اللحوم.
            </Text>
            <Img
              className="h-[370px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_rectangle3467543.png"
              alt="rectangle346754"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[84px] items-center justify-start max-w-[1232px] mt-[100px] mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[525px] sm:h-auto object-cover rounded-[20px] w-[46%] md:w-full"
            src="images/img_rectangle3467544.png"
            alt="rectangle346754_One"
          />
          <div className="flex md:flex-1 flex-col gap-4 items-end justify-start w-[48%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
                size="txtTajawalBold40"
              >
                تقنيات التقطيع
              </Text>
            </div>
            <Text
              className="capitalize leading-[50.00px] text-2xl md:text-[22px] text-black-900 text-right sm:text-xl w-full"
              size="txtTajawalRegular24Black900"
            >
              تقنيات التقطيع: هناك تقنيات مختلفة لتقطيع اللحم، مثل التقطيع
              عرضيًا أو طوليًا، وتقطيع الشرائح بسمك معين، وتقطيع اللحم إلى قطع
              صغيرة أو كيوبس.
            </Text>
          </div>
        </div>
        <Section className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[84px] items-center justify-start max-w-[1232px] mt-[100px] mx-auto md:px-5 w-full" />
        <div className="font-tajawal h-[446px] sm:h-[568px] md:h-[705px] mt-[122px] md:px-5 relative w-full">
          <Img
            className="h-[446px] m-auto object-cover w-full"
            src="images/img_rectangle3467546.png"
            alt="rectangle346754_Three"
          />
          <div className="absolute flex md:flex-col flex-row gap-[25px] h-max inset-[0] items-center justify-center m-auto w-[82%]">
            <div className="h-[369px] relative w-[51%] md:w-full">
              <Img
                className="h-[369px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_rectangle3467547.png"
                alt="rectangle346754_Four"
              />
              <Img
                className="absolute h-[116px] inset-[0] justify-center m-auto"
                src="images/img_group252.svg"
                alt="group252"
              />
            </div>
            <div className="flex flex-col gap-[15px] items-end justify-start w-[48%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-right text-white-A700"
                  size="txtTajawalBold40WhiteA700"
                >
                  فيديو توضيحي{" "}
                </Text>
              </div>
              <Text
                className="capitalize leading-[42.00px] text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl w-full"
                size="txtTajawalRegular24WhiteA700"
              >
                شاهد عمال سهول و الجودة و طريقة التقطيع التي يعمل يها سهول و
                شاهد اجود انواع اللحوم و جميع انواع الحوم مثل لحوم السمك و لحوم
                البقر و لحوم الضاني و غيرها.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-tajawal gap-9 items-center justify-start max-w-[1312px] mt-[124px] mx-auto md:px-5 w-full">
          <div className="flex flex-col justify-start w-[18%] md:w-full">
            <Img
              className="h-14 md:ml-[0] ml-[97px] w-14"
              src="images/img_frame_black_900.svg"
              alt="frame_Two"
            />
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 text-right"
              size="txtTajawalBold40Gray900"
            >
              عملاء سهول
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            {new Array(3).fill({}).map((props, index) => (
              <React.Fragment key={`CustomerOpinions${index}`}>
                <CustomerOpinions
                  className="border border-gray-200_04 border-solid flex sm:flex-1 flex-col gap-8 items-center justify-start px-[17px] py-8 rounded-[10px] w-auto sm:w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Footer className="bg-gray-900 flex font-montserrat items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SevenPage;
