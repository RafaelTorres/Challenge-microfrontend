import { TextDecoder, TextEncoder } from 'util';

require('@testing-library/jest-dom/extend-expect');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// An issue with Jest and next@12.3 https://github.com/vercel/next.js/discussions/31152#discussioncomment-3765526
const { defineProperty } = Object;
// eslint-disable-next-line func-names
Object.defineProperty = function (object, name, meta) {
  if (meta.get && !meta.configurable) {
    // it might be an ES6 exports object
    return defineProperty(object, name, {
      ...meta,
      configurable: true, // prevent freezing
    });
  }

  return defineProperty(object, name, meta);
};

// TODO: Important this section is temporal use here while migrate SliderCarousel to Design System
window.matchMedia =
  window.matchMedia ||
  (() => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      media: '',
      onchange: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });



