import styled from 'styled-components';
import { ColProps } from './Col';

const breakpoints = {
  MobileS: '320px',
  MobileM: '375px',
  MobileL: '425px',
  Tablet: '768px',
  Laptop: '1024px',
  Desktop: '1440px',
};

const ColSizeBase = {
  S1: 8.333333,
  S2: 16.666667,
  S3: 25,
  S4: 33.333333,
  S5: 41.666667,
  S6: 50,
  S7: 58.333333,
  S8: 66.666667,
  S9: 75,
  S10: 83.333333,
  S11: 91.666667,
  S12: 100,
};

const ColQuerySize = {
  MobileS: {
    C1: ColSizeBase.S12,
    C2: ColSizeBase.S12,
    C3: ColSizeBase.S12,
    C4: ColSizeBase.S12,
    C5: ColSizeBase.S12,
    C6: ColSizeBase.S12,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  MobileM: {
    C1: ColSizeBase.S6,
    C2: ColSizeBase.S6,
    C3: ColSizeBase.S12,
    C4: ColSizeBase.S12,
    C5: ColSizeBase.S12,
    C6: ColSizeBase.S12,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  MobileL: {
    C1: ColSizeBase.S6,
    C2: ColSizeBase.S6,
    C3: ColSizeBase.S6,
    C4: ColSizeBase.S6,
    C5: ColSizeBase.S6,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S12,
    C8: ColSizeBase.S12,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  Tablet: {
    C1: ColSizeBase.S3,
    C2: ColSizeBase.S3,
    C3: ColSizeBase.S6,
    C4: ColSizeBase.S3,
    C5: ColSizeBase.S6,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S6,
    C8: ColSizeBase.S6,
    C9: ColSizeBase.S12,
    C10: ColSizeBase.S12,
    C11: ColSizeBase.S12,
    C12: ColSizeBase.S12,
  },
  Laptop: {
    C1: ColSizeBase.S1,
    C2: ColSizeBase.S2,
    C3: ColSizeBase.S3,
    C4: ColSizeBase.S4,
    C5: ColSizeBase.S5,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S7,
    C8: ColSizeBase.S8,
    C9: ColSizeBase.S9,
    C10: ColSizeBase.S10,
    C11: ColSizeBase.S11,
    C12: ColSizeBase.S12,
  },
  Desktop: {
    C1: ColSizeBase.S1,
    C2: ColSizeBase.S2,
    C3: ColSizeBase.S3,
    C4: ColSizeBase.S4,
    C5: ColSizeBase.S5,
    C6: ColSizeBase.S6,
    C7: ColSizeBase.S7,
    C8: ColSizeBase.S8,
    C9: ColSizeBase.S9,
    C10: ColSizeBase.S10,
    C11: ColSizeBase.S11,
    C12: ColSizeBase.S12,
  },
};

export const Col = styled.div<ColProps>`
  min-height: 1px;

  @media only screen and (min-width: ${breakpoints.MobileS}) {
    ${({ 'mob-s': sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }
  @media only screen and (min-width: ${breakpoints.MobileM}) {
    ${({ 'mob-m': sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }
  @media only screen and (min-width: ${breakpoints.MobileL}) {
    ${({ 'mob-l': sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }
  @media only screen and (min-width: ${breakpoints.Tablet}) {
    ${({ tablet: sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }
  @media only screen and (min-width: ${breakpoints.Laptop}) {
    ${({ laptop: sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }
  @media only screen and (min-width: ${breakpoints.Desktop}) {
    ${({ desktop: sizeBase, de }) => {
      const size = sizeBase ? ColQuerySize.Tablet[`C${sizeBase}`] : undefined;
      const sizeDe = de ? ColSizeBase[`S${de}`] : undefined;
      return `flex: 0 0 ${size || sizeDe}%; max-width: ${size || sizeDe}%;`;
    }}
  }

  flex: ${({ de }) => (de ? `0 0 ${ColSizeBase[`S${de}`]}%` : 'width: 100%')}
    ${({ auto }) => {
      if (auto) {
        return `
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 100%;
      `;
      }
    }};
`;
