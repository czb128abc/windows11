import { Size } from '@/typings';
import { useSize } from 'ahooks';
import React, { useRef } from 'react';
import { calcDomScale } from './consts';
const DesktopPreview = (
  props: React.PropsWithChildren<{ sourceDomSize: Size }>,
) => {
  const { children, sourceDomSize } = props;
  const ref = useRef(null);
  const size = useSize(ref);
  let scale = 1;
  if (size) {
    scale = calcDomScale(sourceDomSize, size as Size);
  }
  return (
    <div
      ref={ref}
      className="desktop-preview h-full w-full overflow-hidden relative bg-gray-900"
    >
      <div className="desktop-preview-inner">
        <div
          className="float-left"
          style={{ transform: ` scale(${scale})`, transformOrigin: 'left top' }}
        >
          {children}
        </div>
        <div className="clear-both"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-cyan-500/50 hover:shadow-lg shadow-cyan-500/50 cursor-pointer"></div>
    </div>
  );
};

export default DesktopPreview;
