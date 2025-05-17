const theme = {
  colors: {
    // Black / White
    black: '#161D24',
    white: '#fff',

    // Gray Scale
    'gray-01': '#28323C',
    'gray-02': '#374553',
    'gray-03': '#646F7C',
    'gray-04': '#C5C8CE',
    'gray-05': '#EBE9EE',
    'gray-06': '#F7F8F9',

    // Red Scale
    primary: '#D70011',
    'red-01': '#F1352B',
    'red-02': '#FFEEE8',

    // Green Scale
    'store-open': '#70DD56',

    // Brown Scale
    'brown-01': '#BF8B56',
    'brown-02': '#D3A16D',
    'brown-03': '#CBB793',
    'brown-04': '#D6C6A7',
  },

  fonts: {
    // Pretendard 텍스트 스타일
    'head-b-24': {
      fontFamily: 'Pretendard',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'title1-sb-20': {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'title2-sb-18': {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'title2-r-18': {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'body1-sb-16': {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'body1-r-16': {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'body2-sb-14': {
      fontFamily: 'Pretendard',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'body2-r-14': {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
    'caption-m-12': {
      fontFamily: 'Pretendard',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: 'Auto',
      letterSpacing: '0px',
    },
  },
};

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;

export default theme;
