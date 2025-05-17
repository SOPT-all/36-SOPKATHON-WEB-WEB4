const theme = {
  colors: {
    // 텍스트 색상
    'text-primary': '#020202',
    'text-sub1': '#4C4C4C',
    'text-sub2': '#6E6E6E',
    'text-sub3': '#AFAFAF',
    'text-white': '#FFFFFF',

    // 배경 색상
    'bg-black': '#000000',
    'bg-gray1': '#E8E8E8',
    'bg-gray2': '#F3F3F3',
    'bg-white': '#FFFFFF',
    'bg-grayscale': 'rgba(0, 0, 0, 0.6)',
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
