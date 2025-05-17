import '@emotion/react';
import { ColorType, FontType } from './src/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
  }
}
