import React from 'react';

import './styles.css';

interface Props {
  src: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  transformOrigin?: string;
  // hoverScale?: string;
  // hoverX?: string;
  // hoverY?: string;
}

const FortniteButtonImage: React.FC<Props> = (props: Props) => {
  const { top, right, bottom, left, width, height, transformOrigin, src } = props;
  return (
    <img
      alt="fortniteImage"
      style={{
        position: 'absolute',
        // maxWidth: "max-content",
        top: top || '3%',
        right: right || 0,
        bottom: bottom || 0,
        left: left || 'auto',
        width: width || '100%',
        height: height || 'auto',
        transformOrigin: transformOrigin || 'auto',
        transition: 'transform 150ms linear',
      }}
      src={src}
    />
  );
};

export default FortniteButtonImage;
