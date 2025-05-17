import { css } from '@emotion/react';
import theme from '@styles/theme';

export const testWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.8rem;
`;

export const icon = css`
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.6rem;
`;

export const questionContainer = css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 1.8rem;
    align-items: center;
    margin-bottom: 11.4rem;
    margin-top: 2rem;
`;

export const testImg = css`
    width: 12rem;
    height: 12rem;
`;

export const testText = css`
    ${theme.fonts['title1-sb-20']}
`;