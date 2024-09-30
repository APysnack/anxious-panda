import _ from 'lodash';

export const toCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => toCamelCase(item));
  } else if (obj !== null && typeof obj === 'object') {
    return _.mapValues(
      _.mapKeys(obj, (value, key) => _.camelCase(key)),
      (value) => toCamelCase(value)
    );
  }
  return obj;
};
