import useWindows from "@/hooks/useWindows";
import { AppInfo } from "@/typings";

interface DesktopAppProps {
  appInfo: AppInfo;
}
const DesktopApp: React.FC<DesktopAppProps> = (props) => {
  const { appInfo } = props;
  const { runApp } = useWindows()
  return (
    <div className="desktop-app" onClick={()=>runApp(appInfo)}>
      <img src={appInfo.icon} alt="app icon" />
      <div>
        <span>{appInfo.name}</span>
      </div>
    </div>
  );
};

export default DesktopApp;
