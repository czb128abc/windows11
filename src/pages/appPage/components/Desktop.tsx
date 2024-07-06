import App from '@/components/App';
import TaskBar from '@/components/TaskBar';
import {
  AppType,
  getApplicationByAppType,
} from '@/components/windowsApps/consts';
import useWindows from '@/hooks/useWindows';

const Desktop: React.FC = () => {
  const { currentDesktop } = useWindows();
  const { runningApps } = currentDesktop;
  return (
    <div className="desktop">
      <App />
      <TaskBar />
      {runningApps.map((appIns) => {
        const Temp = getApplicationByAppType(appIns.appInfo.appType as AppType);
        return <Temp key={appIns.id} appIns={appIns}></Temp>;
      })}
    </div>
  );
};

export default Desktop;
