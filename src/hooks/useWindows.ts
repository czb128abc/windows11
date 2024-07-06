import {
  desktopApps,
  recommendedAppsInStartMenu,
} from '@/components/App/Applications';
import type { AppInfo, AppIns, Desktop, InitState } from '@/typings';
import { proxy, useSnapshot } from '@umijs/max';
import { useMemo } from 'react';

function getDefaultAppInfo(list: AppInfo[]) {
  return list.map((app) => {
    return {
      icon: app.icon,
      name: app.name,
      singleInstance: true,
      appType: app.appType,
    };
  });
}

function createDesktop() {
  const desktop: Desktop = {
    runningApps: [],
    desktopApps: getDefaultAppInfo(desktopApps),
    recommendedAppsInStartMenu: getDefaultAppInfo(recommendedAppsInStartMenu),
    maxWindowZIndex: 100,
  };
  return desktop;
}

function createInitState(): InitState {
  return {
    desktops: [createDesktop()],
    currentDesktopIndex: 0,
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
    const tempDesktop = getCurrentDesktop();
    // 解构获取appInfo中的单一实例属性
    const { singleInstance } = appInfo;
    // 增加桌面窗口最大Z轴索引值
    tempDesktop.maxWindowZIndex += 1;
    // 根据是否为单一实例生成应用实例ID
    const appInsId = singleInstance
      ? appInfo.name
      : `${appInfo.name}-${Math.random()}`;
    // 查找是否有相同ID的应用实例已运行
    const insWithSameId = tempDesktop.runningApps.find(
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
      layout: {
        x: 0,
        y: 0,
        width: 500,
        height: 400,
        zIndex: tempDesktop.maxWindowZIndex,
      },
    };
    // 将新应用实例添加到运行中的应用列表
    tempDesktop.runningApps.push(appIns);
    console.log(
      '🚀 ~ runApp ~ tempDesktop:',
      JSON.parse(JSON.stringify(tempDesktop)),
    );
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
};

const useWindows = () => {
  const snap = useSnapshot(state) as InitState;
  const { currentDesktopIndex, desktops } = snap;
  const currentDesktop = useMemo<Desktop>(() => {
    return desktops[currentDesktopIndex] as Desktop;
  }, [desktops, currentDesktopIndex]);
  return {
    state: snap,
    currentDesktop,
    runApp: actions.runApp,
    minimizeApp: actions.minimizeApp,
    triggerMaximizeApp: actions.triggerMaximizeApp,
    closeApp: actions.closeApp,
    setWindowPositionForemost: actions.setWindowPositionForemost,
  };
};

export default useWindows;
