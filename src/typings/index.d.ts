export type AppInfo = {
  icon: string;
  name: string;
  appType: string;
  singleInstance?: boolean;
  removeHeader?: boolean;
};
export type AppIns = {
  id: string;
  appInfo: AppInfo;
  isMinimized?: boolean;
  isMaximized?: boolean;
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
  };
  // component: React.FC;
  // isOpen: boolean;
  // isFullScreen: boolean;
  // isMinimized: boolean;
  // isMaximized: boolean;
  // isDragging: boolean;
  // isResizing: boolean;
  // isFocused: boolean;
  // isFocusable: boolean;
  // isClosable: boolean;
  // isMinimizable: boolean;
};
export type Desktop = {
  runningApps: AppIns[];
  desktopApps: AppInfo[];
  recommendedAppsInStartMenu: AppInfo[];
  maxWindowZIndex: number;
};
export type InitState = {
  desktops: Desktop[];
  currentDesktopIndex: number;
};
// export type AppInstance = {
//     id: string;
//     info: AppInfo;
//     component: React.FC;
// };
