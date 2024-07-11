import App from '@/components/App';
import Wallpaper from '@/components/Wallpaper';
import { useContextMenu } from 'react-contexify';

import WindowMenu, { MENU_ID } from '@/components/WindowMenu';
import {
  AppType,
  getApplicationByAppType,
} from '@/components/windowsApps/consts';
import useWindows, { CommWindowsProps } from '@/hooks/useWindows';
import classNames from 'classnames';
import 'react-contexify/dist/ReactContexify.css';

const Desktop: React.FC<CommWindowsProps> = (props) => {
  const {  desktopIndex, children } = props;
  const { currentDesktop, state } = useWindows(desktopIndex);
  const { runningApps } = currentDesktop;
  const { show } = useContextMenu({
    id: MENU_ID,
  });

  return (
    <div
      className={classNames('desktop', {
        'dark-theme': state.settings.darkTheme,
      })}
      onContextMenu={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        show({ event: e })
      }
    >
      <Wallpaper />
      <App />
      {children}
      {runningApps.map((appIns) => {
        const Temp = getApplicationByAppType(appIns.appInfo.appType as AppType);
        return <Temp key={appIns.id} appIns={appIns}></Temp>;
      })}
      <WindowMenu />
    </div>
  );
};

export default Desktop;
