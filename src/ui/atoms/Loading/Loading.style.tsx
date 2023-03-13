import { centerAbsolute, fullAbsolute } from '@/theme';
import styled, { css, keyframes } from 'styled-components';

interface PathProps {
  increase?: boolean;
}

interface ContainerProps {
  center?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.Nm};
  ${({ center }) => (center ? centerAbsolute : '')};
`;

const SVG_CIRCLE_SIZE = '50px';

export const SvgCircle = styled.svg.attrs({
  viewBox: '0 0 100 100',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: ${SVG_CIRCLE_SIZE};
  height: ${SVG_CIRCLE_SIZE};
  display: flex;
  align-content: space-around;
  justify-content: center;
  position: relative;
  margin: 5px;
`;

const SVG_FULL_SIZE = '98px';

export const SvgFull = styled.svg.attrs({
  viewBox: '0 0 98 98',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  width: SVG_FULL_SIZE,
  height: SVG_FULL_SIZE,
})``;

export const PathFull = styled.path.attrs({
  d: `M70.7182 55.7699L64.2374 49.354C64.0424 
		49.1395 63.7606 49.0107 63.4571 49.0107C63.1754 
		49.0107 62.8936 49.1395 62.7202 49.3111L61.1162 
		50.899L48.9133 62.9797L38.2493 52.4225V40.6852L55.7409 
		23.3688H61.9399L41.8473 43.024C41.7389 43.6678 41.6739 
		44.3115 41.6739 44.9767C41.6739 45.8779 41.7823 46.7791 
		41.9773 47.616L66.7734 23.3688C67.7271 22.4247 68.464 
		21.2875 68.9409 20H36.4719C31.3783 20 27.065 24.2272 27 
		28.9478V56.9501L47.7429 77.485C48.0463 77.8069 48.4798 
		78 48.9566 78C49.4335 78 49.867 77.8069 50.1704 77.485L69.0926 
		58.7525L70.7399 57.1217C70.9133 56.9286 71 56.6926 71 
		56.4351C70.9783 56.199 70.8699 55.963 70.7182 55.7699ZM38.2493 
		23.3688H50.9291L38.2493 35.9216V23.3688ZM30.403 36.5868C30.403 
		36.6082 30.4246 36.6082 30.403 36.5868L30.4246 29.377C30.4246 
		26.609 32.2887 24.2915 34.868 23.5834V49.0322L30.403 
		44.6119V36.5868ZM30.403 55.5768V49.397L46.5291 65.3614L43.4079 
		68.4513L30.403 55.5768ZM48.935 73.923L45.7921 70.8117L63.5005 
		53.2808L66.6433 56.3922L48.935 73.923Z
	`,
})`
  fill: ${({ theme }) => theme.colors.White};
`;

const blink = keyframes`
	0%,
	50%,
	100% {
		opacity: 1;
	}
	25%,
	75% {
		opacity: 0;
	}
`;

export const Blink = styled.div`
  animation: ${blink} 5s infinite both;
`;

const RECT_FULL_RX = 8;

export const RectFull = styled.rect.attrs({
  width: SVG_FULL_SIZE,
  height: SVG_FULL_SIZE,
  rx: RECT_FULL_RX,
})`
  fill: ${({ theme }) => theme.colors.Black};
`;

const fillAnimationFrame = keyframes`
	0% {
		stroke-dasharray: 40 242.6;
		stroke-dashoffset: 0;
	}

	50% {
		stroke-dasharray: 141.3;
		stroke-dashoffset: 141.3;
	}

	100% {
		stroke-dasharray: 40 242.6;
		stroke-dashoffset: 282.6;
	}
`;
const fillAnimation = () =>
  css`
    ${fillAnimationFrame} 1s cubic-bezier(1,1,1,1) 0s infinite
  `;

const CIRCLE_CX = 50;
const CIRCLE_CY = 50;
const CIRCLE_R = 44;
const CIRCLE_STROKE_DASHARRAY = 242.6;
const CIRCLE_STROKE_WIDTH = '12px';

export const Circle = styled.circle.attrs({
  cx: CIRCLE_CX,
  cy: CIRCLE_CY,
  r: CIRCLE_R,
})<PathProps>`
	fill: none;
	stroke: ${({ increase, theme }) =>
    increase ? theme.colors.P2 : theme.colors.N4};
	${({ increase }) =>
    increase
      ? `stroke-dasharray: ${CIRCLE_STROKE_DASHARRAY};`
      : `stroke-width: ${CIRCLE_STROKE_WIDTH};`}};
	${fullAbsolute};
	animation: 	${({ increase }) => (increase ? fillAnimation : '')};
  stroke-width: ${CIRCLE_STROKE_WIDTH};

`;
