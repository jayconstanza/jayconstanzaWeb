/**
 * @name getKeyValue
 * @param obj
 * @returns object
 * @description Function that allows to check object literals like this: foo[bar]
 * avoiding the following error: Element implicitly has an 'any' type because expression
 * of type 'any' can't be used to index type.
 * useful links: https://bit.ly/3viMGeG, https://github.com/microsoft/TypeScript/issues/35859
 */
export const getKeyValue =
  <T extends object, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];
