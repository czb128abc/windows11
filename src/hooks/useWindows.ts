import {
  desktopApps,
  recommendedAppsInStartMenu,
} from '@/components/App/Applications';
import { resourceMap } from '@/constants/resourceMap';
import type {
  AppInfo,
  AppIns,
  Desktop,
  InitState,
  OsSettings,
} from '@/typings';
import { proxy, useSnapshot } from '@umijs/max';
import { useMemo } from 'react';

export type CommWindowsProps = {
  desktopIndex: number;
} & React.PropsWithChildren;

function getDefaultAppInfo(list: AppInfo[]) {
  return list.map((app) => {
    return {
      icon: app.icon,
      name: app.name,
      singleInstance: true,
      appType: app.appType,
      data: app.data,
    };
  });
}

const wallpapers = [
  ...resourceMap.lightWallpapers,
  ...resourceMap.darkWallpapers,
];

function createDesktop(desktopIndex = 0) {
  const desktop: Desktop = {
    runningApps: [],
    desktopApps: getDefaultAppInfo(desktopApps),
    recommendedAppsInStartMenu: getDefaultAppInfo(recommendedAppsInStartMenu),
    maxWindowZIndex: 100,
    currentWallpaper: {
      index: 0,
      url: wallpapers[0],
    },
    desktopName: `desktop ${desktopIndex + 1}`,
  };
  return desktop;
}

function createInitState(index = 0): InitState {
  const themes = ['dark', 'light'];
  return {
    desktops: [createDesktop(index)],
    currentDesktopIndex: index,
    currentTheme: themes[0],
    wallpapers,
    settings: {
      wifi: false,
      bluetooth: false,
      darkTheme: true,
      newDesktopPopoverOpen: false,
      isSignin: true,
      powerOff: false,
    },
    user: {
      username: 'chen zhangbo',
      password: '123',
    },
  };
}

export const state: InitState = proxy(createInitState());

export const getCurrentDesktop = () => {
  return state.desktops[state.currentDesktopIndex] as Desktop;
};

export const getCurrentDesktopIndex = () => {
  return state.currentDesktopIndex;
};

/**
 * 应用程序操作对象，包含对运行中的应用程序的各种操作方法。
 */
export const actions = {
  /**
   * 启动应用程序。
   * @param appInfo 应用程序信息对象，包含应用程序的名称和是否为单一实例等信息。
   * @param forceDisplayWindow 是否强制显示窗口，默认为false。
   */
  runApp(appInfo: AppInfo, forceDisplayWindow = false) {
    // 获取当前桌面环境
    const currentDesktop = getCurrentDesktop();
    // 解构获取appInfo中的单一实例属性
    const { singleInstance } = appInfo;
    // 增加桌面窗口最大Z轴索引值
    currentDesktop.maxWindowZIndex += 1;
    // 根据是否为单一实例生成应用实例ID
    const appInsId = singleInstance
      ? appInfo.name
      : `${appInfo.name}-${Math.random()}`;
    // 查找是否有相同ID的应用实例已运行
    const insWithSameId = currentDesktop.runningApps.find(
      (appIns) => appIns.id === appInsId,
    );
    // 如果找到相同ID的应用实例，切换其最小化状态
    if (insWithSameId) {
      if (forceDisplayWindow) {
        insWithSameId.isMinimized = false;
      } else {
        insWithSameId.isMinimized = !insWithSameId.isMinimized;
      }
      // 如果应用实例不是最小化状态，将其置于最前端
      if (!insWithSameId.isMinimized) {
        actions.setWindowPositionForemost(insWithSameId.id);
      }
      return;
    }
    // 创建新的应用实例对象
    const appIns: AppIns = {
      id: appInsId,
      appInfo: {
        ...appInfo,
      },
      isMaximized: false,
      isMinimized: false,
      data: appInfo.data,
      layout: {
        x: 0,
        y: 0,
        width: 400 * 1.8,
        height: 300 * 1.8,
        zIndex: currentDesktop.maxWindowZIndex,
      },
    };
    // 将新应用实例添加到运行中的应用列表
    currentDesktop.runningApps.push(appIns);
  },
  /**
   * 根据ID查找运行中的应用程序实例。
   * @param appInsId 应用程序实例的ID。
   * @returns 如果找到，则返回应用程序实例对象；否则返回null。
   */
  findRunningAppById(appInsId: string) {
    // 获取当前桌面环境
    const tempDesktop = getCurrentDesktop();
    // 查找运行中与指定ID匹配的应用程序实例
    const insWithSameId = tempDesktop.runningApps.find(
      (appIns) => appIns.id === appInsId,
    );
    // 如果找到，返回应用程序实例；否则返回null
    if (insWithSameId) {
      return insWithSameId;
    }
    return null;
  },
  /**
   * 最小化应用程序。
   * @param appInsId 应用程序实例的ID。
   */
  minimizeApp(appInsId: string) {
    // 根据ID查找并获取应用程序实例
    const appIns = actions.findRunningAppById(appInsId);
    // 如果找到应用程序实例，将其设置为最小化状态
    if (appIns) {
      appIns.isMinimized = true;
    }
  },
  showApp(appInsId: string) {
    // 根据ID查找并获取应用程序实例
    const appIns = actions.findRunningAppById(appInsId);
    // 如果找到应用程序实例，将其设置为非最小化状态
    if (appIns) {
      appIns.isMinimized = false;
    }
  },
  /**
   * 触发应用程序的最大化/恢复操作。
   * @param appInsId 应用程序实例的ID。
   */
  triggerMaximizeApp(appInsId: string) {
    // 根据ID查找并获取应用程序实例
    const appIns = actions.findRunningAppById(appInsId);
    // 如果找到应用程序实例，切换其最大化状态
    if (appIns) {
      appIns.isMaximized = !appIns.isMaximized;
    }
  },
  /**
   * 关闭应用程序。
   * @param appInsId 应用程序实例的ID。
   */
  closeApp(appInsId: string) {
    // 获取当前桌面环境
    const tempDesktop = getCurrentDesktop();
    // 查找指定ID的应用程序实例在运行应用程序列表中的索引
    const index = tempDesktop.runningApps.findIndex(
      (appIns) => appIns.id === appInsId,
    );
    // 如果找到了指定ID的应用程序实例，从列表中移除
    if (index !== -1) {
      tempDesktop.runningApps.splice(index, 1);
    }
  },
  /**
   * 将窗口置于最前端。
   * @param appInsId 应用程序实例的ID。
   */
  setWindowPositionForemost(appInsId: string) {
    // 获取当前桌面环境
    const tempDesktop = getCurrentDesktop();
    // 根据ID查找并获取应用程序实例
    const appIns = actions.findRunningAppById(appInsId);
    // 如果找到应用程序实例，调整其Z轴索引以置于最前端
    if (appIns) {
      if (appIns.layout.zIndex < tempDesktop.maxWindowZIndex) {
        tempDesktop.maxWindowZIndex += 1;
        appIns.layout.zIndex = tempDesktop.maxWindowZIndex;
      }
    }
  },
  nextDesktopBackground() {
    const tempDesktop = getCurrentDesktop();
    let index =
      state.wallpapers.findIndex(
        (_, i) => i === tempDesktop.currentWallpaper.index,
      ) || 0;
    if (index + 1 === state.wallpapers.length) {
      index = -1;
    }
    tempDesktop.currentWallpaper = {
      index: index + 1,
      url: wallpapers[index + 1],
    };
  },
  setOSSettingItem(type: string, value: boolean) {
    state.settings[type as keyof OsSettings] = value;
    if (type === 'darkTheme') {
      state.currentTheme = value ? 'dark' : 'light';
      document.body.dataset.theme = state.currentTheme;
    }
  },
  sortDesktopName() {
    state.desktops.forEach((item, index) => {
      state.desktops[index].desktopName = `desktop ${index + 1}`;
    });
  },
  createDesktop() {
    const { currentDesktopIndex } = state;
    const tempDesktop = createDesktop(currentDesktopIndex + 1);
    state.desktops.push(tempDesktop);
    state.currentDesktopIndex = currentDesktopIndex + 1;
    actions.sortDesktopName();
  },
  removeDesktop(index: number) {
    const { currentDesktopIndex } = state;
    if (currentDesktopIndex === 0) {
      return;
    }
    state.desktops.splice(index, 1);
    state.currentDesktopIndex = currentDesktopIndex - 1;
    actions.sortDesktopName();
  },
  setDescktopActive(index: number) {
    state.currentDesktopIndex = index;
  },
  setSignin(signin: boolean) {
    state.settings.isSignin = signin;
  },
  shutdown() {
    state.settings.powerOff = true;
  },
  restart(){
    state.settings.powerOff = true;
    setTimeout(() => {
      state.settings.isSignin = false;
      state.settings.powerOff = false;
    }, 3000);
  },
};
// eslint-disable-next-line
window.getState = () => {
  return JSON.parse(JSON.stringify(state));
};

const useWindows = (desktopIndex = state.currentDesktopIndex) => {
  const snap = useSnapshot(state) as InitState;
  const { desktops } = snap;
  const currentDesktop: Desktop = useMemo<Desktop>(() => {
    return desktops[desktopIndex] as Desktop;
  }, [desktops, desktopIndex]);
  return {
    state: snap,
    currentDesktop,
    ...actions,
    // runApp: actions.runApp,
    // minimizeApp: actions.minimizeApp,
    // triggerMaximizeApp: actions.triggerMaximizeApp,
    // closeApp: actions.closeApp,
    // setWindowPositionForemost: actions.setWindowPositionForemost,
  };
};

export default useWindows;
