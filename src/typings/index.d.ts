export type AppInfo<T = string> = {
  icon: string;
  name: string;
  appType: string;
  singleInstance?: boolean;
  removeHeader?: boolean;
  data?: T;
};
export type AppIns<T = string> = {
  id: string;
  appInfo: AppInfo<T>;
  isMinimized?: boolean;
  isMaximized?: boolean;
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
  };
  data?: T;
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
  desktopName: string;
  runningApps: AppIns[];
  desktopApps: AppInfo[];
  recommendedAppsInStartMenu: AppInfo[];
  maxWindowZIndex: number;
  currentWallpaper: {
    index: number;
    url: string;
  };
};
export type OsSettings = {
  wifi: boolean;
  bluetooth: boolean;
  darkTheme: boolean;
  newDesktopPopoverOpen: boolean;
  isSignin: boolean;
  powerOff: boolean;
};
export type InitState = {
  desktops: Desktop[];
  currentDesktopIndex: number;
  currentTheme: string;
  wallpapers: string[];
  settings: OsSettings;
  user: {
    username: string;
    password: string;
  };
};
export type FileExplorerProps = {
  path: string;
  folderMap: Record<string, Folder>;
};

export type Folder = {
  childern?: Folder[];
  parent?: string;
  name: string;
  header: string;
  path: string;
  icon: string | undefined;
};

type Size = {
  width: number;
  height: number;
};
