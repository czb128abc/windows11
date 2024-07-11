import {
  AppType,
  getApplicationByAppType,
} from '@/components/windowsApps/consts';
import { getResource } from '@/constants/resourceMap';
import useWindows from '@/hooks/useWindows';
import useWindowSize from '@/hooks/useWindowSize';
import Desktop from '@/pages/appPage/components/Desktop';
import { AppIns } from '@/typings';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { useState } from 'react';
import DesktopPreview from './DesktopPreview';
import './NewDesktop.less';

const NewDesktop = () => {
  const windowSize = useWindowSize();
  const {
    state,
    currentDesktop,
    createDesktop,
    removeDesktop,
    setDescktopActive,
    setOSSettingItem,
    setWindowPositionForemost,
    showApp
  } = useWindows();
  const popoverHoverOpen = state.settings.newDesktopPopoverOpen;
  const [runningApps, setRunningApps] = useState<AppIns[]>([]);
  const [priviewDesktopIndex, setPriviewDesktopIndex] = useState<number>(
    state.currentDesktopIndex,
  );

  const handlePopoverHoverChange = (open: boolean) => {
    setOSSettingItem('newDesktopPopoverOpen', open);
    if (open) {
      setRunningApps(currentDesktop.runningApps);
    }
  };
  const handleDesktopItemClick = (index: number) => {
    setDescktopActive(index);
    handlePopoverHoverChange(false);
  };
  const handleDesktopAppItemClick = (appInsId: string, index: number) => {
    setDescktopActive(index);
    handlePopoverHoverChange(false);
    setWindowPositionForemost(appInsId);
    showApp(appInsId);
  };
  const handleDesktopItemMouseEnter = (index: number) => {
    const tempApps = state.desktops[index].runningApps;
    setPriviewDesktopIndex(index);
    setRunningApps(tempApps);
  };

  return (
    <Popover
      overlayClassName="new-desktop-popover"
      arrow={false}
      autoAdjustOverflow
      open={popoverHoverOpen}
      onOpenChange={handlePopoverHoverChange}
      content={
        <div className="new-desktop relative">
          <div className="h-full w-full flex flex-col">
            <div className="absolute top-0 left-0 w-full h-full hidden"></div>
            <div className="applications-preview flex-1  flex flex-wrap justify-center items-center overflow-auto my-6 gap-[20px]">
              {runningApps.map((appIns) => {
                const Temp = getApplicationByAppType(
                  appIns.appInfo.appType as AppType,
                );
                const tempAppIns = {...appIns};
                tempAppIns.isMinimized = false;
                tempAppIns.isMaximized = false;
                return (
                  <div
                    key={appIns.id}
                    className="relative w-[400px] h-[300px]"
                    onClick={() =>
                      handleDesktopAppItemClick(appIns.id, priviewDesktopIndex)
                    }
                  >
                    <DesktopPreview
                      sourceDomSize={{
                        width: appIns.layout.width,
                        height: appIns.layout.height,
                      }}
                    >
                      <Temp appIns={tempAppIns}></Temp>
                    </DesktopPreview>
                  </div>
                );
              })}
            </div>
            <div className="desktops">
              {state.desktops.map((desktop, index) => {
                return (
                  <div
                    key={desktop.desktopName}
                    className="desktop-item"
                    onMouseEnter={() => handleDesktopItemMouseEnter(index)}
                    onClick={() => handleDesktopItemClick(index)}
                  >
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
                      <DesktopPreview sourceDomSize={windowSize}>
                        <Desktop desktopIndex={index} />
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
