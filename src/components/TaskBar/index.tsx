import useWindows from '@/hooks/useWindows';
import { SoundOutlined, UpOutlined, WifiOutlined } from '@ant-design/icons';
import './index.less';
import TaskBarApps from './taskBarApps';

const TaskBar: React.FC = () => {
  const { currentDesktop } = useWindows();
  return (
    <div className="task-bar flex items-center fixed bottom-0 w-full">
      <div className="task-bar-apps flex-1 flex items-center justify-center my-2">
        {currentDesktop.recommendedAppsInStartMenu.map((item) => {
          return <TaskBarApps key={item.name} appInfo={item} />;
        })}
      </div>
      <div className="task-bar-right-panel">
        <div className="bar-status running-bar">
          <UpOutlined className="icon" />
        </div>
        <div className="bar-status language-bar">ENG</div>
        <div className="bar-status status-bar">
          <WifiOutlined className="icon" />
          <SoundOutlined className="icon" />
        </div>
        <div className="bar-status time-bar">
          <div className="date--time-clock">7:28 PM</div>
          <div className="date--time-date">6/29/2024</div>
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
