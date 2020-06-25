export const transition = (type = 'all', time = '0.3s') => `
  transition: ${type} ${time};
`;

export const size = (width: string, height?: string): string => `
  width: ${width};
  height: ${height || width};
`;

export const block = (width = '100%') => `
  display: block;
  ${size(width)}
`;

export function position({
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto'
}) {
  return `
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
 `;
}

export const abs = positionArg => `
  position: absolute;
  ${position(positionArg)}
`;

export function triangle(
  size: string,
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  },
  color?: string
) {
  return `
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 ${size} ${size} ${size};
    border-color: transparent transparent ${color || '#fff'} transparent;
    ${abs(position)}
  `;
}

export const hoverLink = (color: string, hover?: string) => `
  color: ${color};
  ${transition('color')}
  
  &:hover,
  &:active,
  &:focus {
    color: ${hover || color};
    text-decoration: none;
    cursor: pointer;
  }
`;
