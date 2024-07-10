import { getResource } from '@/constants/resourceMap';
import useWindows from '@/hooks/useWindows';
import Desktop from '@/pages/appPage/components/Desktop';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import React from 'react';
import './NewDesktop.less';

const DesktopPreview: React.FC = (props) => {
  const { children } = props;
  const scale = 0.19;
  return (
    <div className="window-wraper h-full w-full flex items-center justify-center overflow-hidden relative">
      <div className="window-wraper-inner z-10">
        <div className="float-left" style={{ transform: ` scale(${scale})` }}>
          {children}
          <div className="clear-both"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

const NewDesktop = () => {
  const { state, createDesktop, removeDesktop } = useWindows();
  return (
    <Popover
      overlayClassName="new-desktop-popover"
      arrow={false}
      autoAdjustOverflow
      content={
        <div className="new-desktop">
          <div className="h-full w-full flex flex-col">
            <div className="flex-1"></div>
            <div className="desktops">
              {state.desktops.map((desktop, index) => {
                return (
                  <div key={desktop.desktopName} className="desktop-item">
                    <div>{desktop.desktopName}</div>
                    <div
                      className="icon-close hover:scale-125"
                      onClick={(e) => {
                        e.preventDefault();
                        removeDesktop(index);
                      }}
                    >
                      <CloseOutlined />
                    </div>
                    <div className="h-[135px] w-[240px]">
                      <DesktopPreview>
                        <Desktop />
                      </DesktopPreview>
                    </div>
                  </div>
                );
              })}
              <div
                className="desktop-item cursor-pointer"
                onClick={() => createDesktop()}
              >
                <div>New Desktop</div>
                <div className="flex justify-center items-center h-[135px] w-[240px]">
                  <PlusOutlined className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      trigger="click"
      defaultOpen={true}
    >
      <div className="task-bar-app flex relative justify-center transition-all items-center h-[40px] w-[40px]">
        <img
          className="h-[26px] w-[26px]"
          src={getResource('SwitchDesktop')}
          alt=""
        ></img>
      </div>
    </Popover>
  );
};

export default NewDesktop;
