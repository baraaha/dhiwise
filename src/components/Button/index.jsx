import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" };
const variants = {
  fill: {
    pink_700_19: "bg-pink-700_19 text-pink-400",
    pink_400: "bg-pink-400 text-white-A700",
    white_A700: "bg-white-A700 text-pink-400",
    teal_500_19: "bg-teal-500_19 text-teal-500",
    pink_400_19: "bg-pink-400_19 text-pink-400",
    gray_500: "bg-gray-500 text-white-A700",
    orange_300_02: "bg-orange-300_02 text-white-A700",
    red_300_02: "bg-red-300_02 text-white-A700",
    light_blue_800_0c: "bg-light_blue-800_0c text-light_blue-800",
    pink_400_75: "bg-pink-400_75 text-white-A700",
    amber_500: "bg-amber-500 text-white-A700",
    light_green_600_0c: "bg-light_green-600_0c text-light_green-600_01",
    white_A700_19: "bg-white-A700_19",
    red_400_0c: "bg-red-400_0c text-red-400_01",
    blue_gray_800_1e: "bg-blue_gray-800_1e",
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
    red_A400_0c: "bg-red-A400_0c",
    gray_200_01: "bg-gray-200_01",
    green_500_19: "bg-green-500_19 text-teal-A700",
    teal_500_0c: "bg-teal-500_0c text-teal-500",
    teal_500: "bg-teal-500",
    gray_50_02: "bg-gray-50_02",
  },
  outline: {
    pink_400: "border border-pink-400 border-solid",
    blue_50_01: "border border-blue-50_01 border-solid text-black-900_75",
  },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "p-3",
  xl: "p-4",
  "2xl": "pl-3 pr-[13px] py-[17px]",
  "3xl": "p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "pink_700_19",
    "pink_400",
    "white_A700",
    "teal_500_19",
    "pink_400_19",
    "gray_500",
    "orange_300_02",
    "red_300_02",
    "light_blue_800_0c",
    "pink_400_75",
    "amber_500",
    "light_green_600_0c",
    "white_A700_19",
    "red_400_0c",
    "blue_gray_800_1e",
    "blue_gray_800",
    "red_A400_0c",
    "gray_200_01",
    "green_500_19",
    "teal_500_0c",
    "teal_500",
    "gray_50_02",
    "blue_50_01",
  ]),
};

export { Button };
