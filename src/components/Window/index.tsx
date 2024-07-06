import useWindows from '@/hooks/useWindows';
import { AppInfo, AppIns } from '@/typings';
import {
  BorderOutlined,
  CloseOutlined,
  FullscreenExitOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { applications } from '../App/Applications';
import './index.less';

type Props = {
  children?: React.ReactNode;
  appIns: AppIns;
  windowTitle?: string;
  windowIcon?: string;
};

export function getApplicationByAppType(appType: string): AppInfo {
  const application = applications.find((item) => item.appType === appType);
  return application || applications[0];
}

const Window = (props: Props) => {
  const {
    triggerMaximizeApp,
    minimizeApp,
    closeApp,
    setWindowPositionForemost,
  } = useWindows();
  const [disableDrag, setDisableDrag] = useState(true);
  const { children, appIns, windowIcon, windowTitle } = props;
  const { isMinimized, isMaximized, layout, id } = appIns;
  const appInfo = getApplicationByAppType(appIns.appInfo.appType);
  const style: React.CSSProperties = {
    zIndex: layout.zIndex,
    width: layout.width + 'px',
    height: layout.height + 'px',
  };
  if (isMinimized) {
    style.display = 'none';
  }

  const canDraggable = !(disableDrag || isMaximized);
  return (
    <Draggable disabled={!canDraggable} bounds="parent">
      <div
        className={classNames({
          'app-window': true,
          'full-screen': isMaximized,
          hidden: appInfo.removeHeader,
        })}
        style={style}
        onClick={() => {
          setWindowPositionForemost(id);
        }}
      >
        <div
          className={classNames({
            'app-window-header': true,
            'cursor-move': canDraggable,
          })}
          onMouseDown={() => {
            setDisableDrag(false);
          }}
          onMouseOut={() => {
            setDisableDrag(true);
          }}
        >
          <Space align="center">
            <div className="app-window-icon">
              <img
                src={windowIcon || appInfo.icon}
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="app-window-title">
              {windowTitle || appInfo.name}
            </div>
          </Space>
          <div className="app-window-toolbar">
            <Space size={1}>
              <div
                className="toolbar-btn"
                onClick={() => {
                  minimizeApp(id);
                }}
              >
                <MinusOutlined />
              </div>
              {isMaximized ? (
                <div
                  className="toolbar-btn"
                  onClick={() => {
                    triggerMaximizeApp(id);
                  }}
                >
                  <FullscreenExitOutlined />
                </div>
              ) : (
                <div
                  className="toolbar-btn"
                  onClick={() => {
                    triggerMaximizeApp(id);
                  }}
                >
                  <BorderOutlined />
                </div>
              )}
              <div
                className="toolbar-btn btn-close"
                onClick={() => {
                  closeApp(id);
                }}
              >
                <CloseOutlined />
              </div>
            </Space>
          </div>
        </div>
        <div className="app-window-content">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
