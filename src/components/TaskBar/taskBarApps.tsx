import useWindows from '@/hooks/useWindows';
import { AppInfo } from '@/typings';

const TaskBarApp: React.FC<{ appInfo: AppInfo }> = (props) => {
  const { appInfo } = props;
  const { runApp } = useWindows();
  const handleRunApp = () => {
    runApp(appInfo);
  };
  return (
    <div
      onClick={() => handleRunApp()}
      className="task-bar-app flex relative justify-center transition-all items-center h-[40px] w-[40px]"
    >
      <img className="h-[26px] w-[26px]" src={appInfo.icon} alt=""></img>
    </div>
  );
};
export default TaskBarApp;
