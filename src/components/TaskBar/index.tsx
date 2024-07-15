import useWindows, { CommWindowsProps } from '@/hooks/useWindows';
import { SoundOutlined, UpOutlined, WifiOutlined } from '@ant-design/icons';
import { Popover, Space } from 'antd';
import QuickSettings from '../windowsApps/QuickSettings';
import './index.less';
import NewDesktop from './NewDesktop';
import TaskBarApps from './TaskBarApps';
import TimeBar from './TimeBar';
import Start from './Start';
const TaskBar: React.FC<CommWindowsProps> = (props) => {
  const { desktopIndex } = props;
  const { currentDesktop } = useWindows(desktopIndex);
  return (
    <div className="task-bar flex items-center fixed bottom-0 w-full">
      <div className="task-bar-apps flex-1 flex items-center justify-center my-2">
        <Start />
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
          >
            <Space size={4}>
              <WifiOutlined className="icon" />
              <SoundOutlined className="icon" />
            </Space>
          </Popover>
        </div>
        <TimeBar />
      </div>
    </div>
  );
};

export default TaskBar;
