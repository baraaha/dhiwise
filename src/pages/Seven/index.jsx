import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const SevenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-worksans items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[34px] items-center justify-center p-6 sm:px-5 w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[75px] w-[82%] md:w-full">
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
                <div className="bg-blue_gray-800_1e flex flex-col font-tajawal items-start justify-start p-4 rounded-[28px] w-14">
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
                  className="common-pointer bg-blue_gray-800_1e flex flex-col font-tajawal items-start justify-start p-4 rounded-[50%] w-14"
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
              <div className="flex flex-col font-tajawal gap-[5px] items-start justify-start mb-1 md:mt-0 mt-[13px] w-[64%] md:w-full">
                <div className="flex flex-col items-center justify-start rotate-[-180deg] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <ul className="flex md:flex-col flex-row gap-[50px] md:hidden items-center justify-start rotate-[-180deg] w-auto md:w-full common-row-list">
                      <li>
                        <a
                          href="javascript:"
                          className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        >
                          <Text size="txtTajawalBold24">عن سهول</Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page4")}
                          >
                            تواصل معنا
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page3")}
                          >
                            فيديو
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/six1")}
                          >
                            الطلبات
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page7")}
                          >
                            القائمة
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="capitalize hover:font-bold text-2xl md:text-[22px] text-black-900 sm:text-xl">
                          <Text
                            className="common-pointer"
                            size="txtTajawalRegular24"
                            onClick={() => navigate("/page10")}
                          >
                            الرئيسية
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Line className="bg-pink-400 h-[3px] ml-1 md:ml-[0] w-[16%]" />
              </div>
            </div>
            <Img
              className="h-[77px] md:mt-0 my-0.5"
              src="images/img_settings.svg"
              alt="settings"
            />
          </div>
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
              size="txtTajawalRegular24"
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
              size="txtTajawalRegular24"
            >
              تقنيات التقطيع: هناك تقنيات مختلفة لتقطيع اللحم، مثل التقطيع
              عرضيًا أو طوليًا، وتقطيع الشرائح بسمك معين، وتقطيع اللحم إلى قطع
              صغيرة أو كيوبس.
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-tajawal md:gap-10 gap-[84px] items-center justify-start max-w-[1232px] mt-[100px] mx-auto md:px-5 w-full">
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
              size="txtTajawalRegular24"
            >
              أدوات التقطيع: يستخدم الجزارون والطهاة أدوات مختلفة لتقطيع اللحم،
              مثل السكين والمبردة والمقص والمنشار. يعتمد نوع الأداة على نوع
              اللحم والقطعة المراد تقطيعها.
            </Text>
          </div>
          <Img
            className="md:flex-1 h-[525px] sm:h-auto object-cover rounded-[20px] w-[46%] md:w-full"
            src="images/img_rectangle3467545.png"
            alt="rectangle346754_Two"
          />
        </div>
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
            <div className="border border-gray-200_04 border-solid flex sm:flex-1 flex-col gap-8 items-center justify-start px-[17px] py-8 rounded-[10px] w-auto sm:w-full">
              <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10.png"
                    alt="ellipseTen"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtTajawalBold24"
                >
                  محمد عصام
                </Text>
                <Text
                  className="leading-[29.00px] text-black-900 text-center text-lg w-full"
                  size="txtTajawalRegular18Black900"
                >
                  ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات في الصفحة
                </Text>
              </div>
            </div>
            <div className="border border-gray-200_04 border-solid flex sm:flex-1 flex-col gap-8 items-center justify-start px-[17px] py-8 rounded-[10px] w-auto sm:w-full">
              <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10_100x100.png"
                    alt="ellipseTen"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtTajawalBold24"
                >
                  إبراهيم محمد
                </Text>
                <Text
                  className="leading-[29.00px] text-black-900 text-center text-lg w-full"
                  size="txtTajawalRegular18Black900"
                >
                  ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات في الصفحة
                </Text>
              </div>
            </div>
            <div className="border border-gray-200_04 border-solid flex sm:flex-1 flex-col gap-8 items-center justify-start px-4 py-8 rounded-[10px] w-auto sm:w-full">
              <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse10_1.png"
                    alt="ellipseTen"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtTajawalBold24"
                >
                  ابو فهد
                </Text>
                <Text
                  className="leading-[29.00px] text-black-900 text-center text-lg w-full"
                  size="txtTajawalRegular18Black900"
                >
                  ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                  سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                  الفقرات في الصفحة
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Footer className="bg-gray-900 flex font-montserrat items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SevenPage;
