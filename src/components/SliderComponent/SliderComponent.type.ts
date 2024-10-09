import React from "react";

export interface ISliderComponentProps {
  value: number,
  val: number,
  showTooltip: boolean,
  setVal: React.Dispatch<React.SetStateAction<number>>,
  // setVal: (val: number) => void,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  setShowTooltip: React.Dispatch<React.SetStateAction<boolean>>,
}