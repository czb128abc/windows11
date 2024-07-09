import App from '@/components/App';
import TaskBar from '@/components/TaskBar';
import Wallpaper from '@/components/Wallpaper';
import { useContextMenu } from 'react-contexify';

import WindowMenu, { MENU_ID } from '@/components/WindowMenu';
import {
  AppType,
  getApplicationByAppType,
} from '@/components/windowsApps/consts';
import useWindows from '@/hooks/useWindows';
import 'react-contexify/dist/ReactContexify.css';
import classNames from 'classnames';

const Desktop: React.FC = () => {
  const { currentDesktop, state } = useWindows();
  const { runningApps } = currentDesktop;
  const { show } = useContextMenu({
    id: MENU_ID,
  });


  return (
    <div className={classNames('desktop',{'dark-theme': state.settings.darkTheme})} onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> show({ event: e })}>
      <Wallpaper />
      <App />
      <TaskBar />
      {runningApps.map((appIns) => {
        const Temp = getApplicationByAppType(appIns.appInfo.appType as AppType);
        return <Temp key={appIns.id} appIns={appIns}></Temp>;
      })}
      <WindowMenu />
    </div>
  );
};

export default Desktop;
