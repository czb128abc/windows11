import useWindows from '@/hooks/useWindows';
import { AppInfo } from '@/typings';
import classNames from 'classnames';
import { useMemo } from 'react';

type AppKeyMap = {
  openedKeyMap: Record<string, boolean>;
  runningKeyMap: Record<string, boolean>;
};

const TaskBarApp: React.FC<{ appInfo: AppInfo }> = (props) => {
  const { appInfo } = props;
  const { runApp, currentDesktop } = useWindows();
  const { runningApps } = currentDesktop;
  const appKeyMap = useMemo(() => {
    const keyMap: AppKeyMap = {
      openedKeyMap: {},
      runningKeyMap: {},
    };
    runningApps.forEach((app) => {
      keyMap.runningKeyMap[app.appInfo.appType] = true;
      if (!app.isMinimized) {
        keyMap.openedKeyMap[app.appInfo.appType] = true;
      }
    });
    return keyMap;
  }, [runningApps]);
  const handleRunApp = () => {
    runApp(appInfo, true);
  };
  return (
    <div
      onClick={() => handleRunApp()}
      className="task-bar-app"
    >
      <img className="h-[26px] w-[26px]" src={appInfo.icon} alt=""></img>
      <div className="task-bar-app-badge">
        <div
          className={classNames({
            'task-bar-app-badge-inner':
              appKeyMap.runningKeyMap[appInfo.appType],
            running: appKeyMap.runningKeyMap[appInfo.appType],
            opened: appKeyMap.openedKeyMap[appInfo.appType],
          })}
        ></div>
      </div>
    </div>
  );
};
export default TaskBarApp;
