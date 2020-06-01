export const FN_PROP = '$fn';

export type StringifyMapper = (fnSource: string, keyName: string) => string;

/**
 * Stringifies an object. Can serialize functions.
 */
export function stringifyJSONFn<T = unknown>(
  data: T,
  map?: StringifyMapper
): string {
  return JSON.stringify(data, (key, value) => {
    if (typeof value === 'function') {
      const fnSource = value.toString();
      return {
        [FN_PROP]: typeof map === 'function' ? map(fnSource, key) : fnSource
      };
    }

    return value;
  });
}

/**
 * Parses a custom format of JSON which may have serialized functions.
 */
export function parseJSONFn<T = unknown>(json: string): T {
  return JSON.parse(json, (_, value) => {
    if (
      Object.hasOwnProperty.call(value, FN_PROP) &&
      Object.keys(value).length === 1
    ) {
      // eslint-disable-next-line no-eval
      return eval(value.$fn);
    }

    return value;
  });
}
