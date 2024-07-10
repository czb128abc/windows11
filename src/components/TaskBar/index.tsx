import useWindows from '@/hooks/useWindows';
import { SoundOutlined, UpOutlined, WifiOutlined } from '@ant-design/icons';
import { Popover, Space } from 'antd';
import QuickSettings from '../windowsApps/QuickSettings';
import './index.less';
import NewDesktop from './NewDesktop';
import TaskBarApps from './taskBarApps';
const TaskBar: React.FC = () => {
  const { currentDesktop } = useWindows();
  return (
    <div className="task-bar flex items-center fixed bottom-0 w-full">
      <div className="task-bar-apps flex-1 flex items-center justify-center my-2">
        <NewDesktop />
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
          <Popover
            overlayClassName="task-bar-popover"
            arrow={false}
            autoAdjustOverflow
            content={<QuickSettings />}
            trigger="click"
            defaultOpen={true}
          >
            <Space size={4}>
              <WifiOutlined className="icon" />
              <SoundOutlined className="icon" />
            </Space>
          </Popover>
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
