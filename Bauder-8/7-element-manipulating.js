import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
  
    const elements = document.body.getElementsByTagName('*');
    for (const element of elements) {

      const classNames = Array.from(element.classList);
      for (const className of classNames) {

        const normalizedClassName = camelCase(className);
        element.classList.replace(className, normalizedClassName);
      }
    }
  };
// END