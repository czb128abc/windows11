import { getResource } from '@/constants/resourceMap';
import useWindows from '@/hooks/useWindows';
import {
  LockOutlined,
  PoweroffOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { Popover } from 'antd';
import { applications } from '../App/Applications';

function Start() {
  const { state, shutdown, restart } = useWindows();
  const { username } = state.user;

  return (
    <Popover
      overlayClassName="task-bar-popover"
      arrow={false}
      autoAdjustOverflow
      content={
        <div className="start-menu-panel w-[640px] h-[400px] relative">
          <div className="flex flex-wrap pb-10 overscroll-auto px-8">
            {applications.map((item) => {
              return (
                <div
                  className="start-menu-item h-[96px] w-[96px] flex flex-col items-center justify-center text-center hover:scale-110 duration-300"
                  key={item.name}
                >
                  <div className="start-menu-item-icon">
                    <img src={item.icon} alt="" className="h-8 w-8" />
                  </div>
                  <div className="start-menu-item-title">{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className="start-menu-footer absolute bottom-0 w-full h-10 flex items-center rounded justify-between px-8 bg-slate-700">
            <div>{username}</div>
            <div className="power-menu w-[32px] h-[32px] flex items-center justify-center">
              <Popover
                arrow={false}
                trigger={['click']}
                content={
                  <div className="power-menu">
                    <div className="power-menu-item">
                      <LockOutlined /> Lock
                    </div>
                    <div className="power-menu-item" onClick={() => shutdown()}>
                      <PoweroffOutlined /> Shutdown
                    </div>
                    <div className="power-menu-item" onClick={() => restart()}>
                      <ReloadOutlined />
                      Restart
                    </div>
                  </div>
                }
              >
                <PoweroffOutlined />
              </Popover>
            </div>
          </div>
        </div>
      }
      trigger="click"
    >
      <div className="task-bar-app">
        <img
          className="h-[26px] w-[26px]"
          src={getResource('Start')}
          alt=""
        ></img>
      </div>
    </Popover>
  );
}

export default Start;
