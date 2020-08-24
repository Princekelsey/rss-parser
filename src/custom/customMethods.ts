import { Callback, ArrayParameter, ReducerCallback } from "../types";

export const customMapArray = (
  array: ArrayParameter,
  callback: Callback
): any[] => {
  let newArry: ArrayParameter = [];

  for (let i = 0; i < array.length; i++) {
    newArry.push(callback(array[i], i));
  }

  return newArry;
};

export const customFilterArray = (
  array: ArrayParameter,
  callback: Callback
): any[] => {
  let filteredArry: ArrayParameter = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (callback(currentItem, i)) {
      filteredArry.push(currentItem);
    }
  }
  return filteredArry;
};

export const customReducer = (
  array: ArrayParameter,
  callback: ReducerCallback,
  initialValue?: number
): any => {
  let accumulator = 0;
  if (initialValue) {
    accumulator = initialValue;
  }

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    accumulator = callback(accumulator, currentItem);
  }
  return accumulator;
};
