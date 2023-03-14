import { GenericObject } from '@/types';

export const convertObjectValuesToObjectValuesAsBoolean = <T>(
  object: Object
) => {
  const valuesAsBoolean = Object.keys(object).reduce<T>((currentValue, k) => {
    const key = k;
    const result = currentValue as GenericObject;
    result[key] = object && !!object[k as keyof object];
    return result;
  }, {} as T);
  return valuesAsBoolean as T;
};

export const isNullOrUndefined = (value: GenericObject) => {
  return value === null || value === undefined;
};
