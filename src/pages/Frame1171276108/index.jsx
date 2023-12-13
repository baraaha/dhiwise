import React from "react";

import { Img, Line, Text } from "components";

const Frame1171276108Page = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[718px] items-center justify-end pt-[301px] rounded-[60px] w-full"
          style={{ backgroundImage: "url('images/img_group371.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[209px] items-center justify-start w-full">
            <Img
              className="h-[116px] w-[116px]"
              src="images/img_group252.svg"
              alt="group252"
            />
            <div className="bg-gradient1  flex flex-col items-center justify-start p-6 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1106px] mb-3 mx-auto md:px-5 w-full">
                <Text
                  className="sm:text-[17.94px] md:text-[19.94px] text-[21.94px] text-white-A700"
                  size="txtRobotoRomanRegular2194"
                >
                  1:50:59
                </Text>
                <div className="h-[29px] md:ml-[0] ml-[3px] relative w-[87%] md:w-full">
                  <div className="absolute bottom-[24%] h-2.5 inset-x-[0] mx-auto w-full">
                    <Line className="absolute bg-white-A700 h-[3px] inset-[0] justify-center m-auto rounded-[1px] w-full" />
                    <div className="absolute bg-white-A700 h-2.5 inset-y-[0] left-[0] my-auto rounded-[5px] w-[46%]"></div>
                  </div>
                  <div className="absolute bg-white-A700 h-[29px] inset-y-[0] left-[44%] my-auto rounded-[14px] w-[29px]"></div>
                </div>
                <Text
                  className="md:ml-[0] ml-[7px] sm:text-[17.94px] md:text-[19.94px] text-[21.94px] text-white-A700"
                  size="txtRobotoRomanRegular2194"
                >
                  -45:55
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame1171276108Page;
