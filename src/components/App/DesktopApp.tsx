import useWindows from '@/hooks/useWindows';
import { AppInfo } from '@/typings';

interface DesktopAppProps {
  appInfo: AppInfo;
}
const DesktopApp: React.FC<DesktopAppProps> = (props) => {
  const { appInfo } = props;
  const { runApp } = useWindows();
  return (
    <div
      className="desktop-app transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white"
      onClick={() => runApp(appInfo, true)}
    >
      <img src={appInfo.icon} alt="app icon" />
      <div className="pt-1">
        <span>{appInfo.name}</span>
      </div>
    </div>
  );
};

export default DesktopApp;
