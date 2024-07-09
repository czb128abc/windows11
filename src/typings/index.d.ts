export type AppInfo = {
  icon: string;
  name: string;
  appType: string;
  singleInstance?: boolean;
  removeHeader?: boolean;
};
export type AppIns<T = ''> = {
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
  data: T;
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
  currentWallpaper: {
    index: number;
    url: string;
  };
};
export type OsSettings = {
  wifi: boolean;
  bluetooth: boolean;
  darkTheme: boolean;
};
export type InitState = {
  desktops: Desktop[];
  currentDesktopIndex: number;
  currentTheme: string;
  wallpapers: string[];
  settings: OsSettings;
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
