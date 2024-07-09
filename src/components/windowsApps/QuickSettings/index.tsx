import useWindows from '@/hooks/useWindows';
import { OsSettings } from '@/typings';
import {
  BulbOutlined,
  DingtalkCircleFilled,
  SmileOutlined,
  SoundOutlined,
  WifiOutlined,
} from '@ant-design/icons';
import { useAntdConfigSetter } from '@umijs/max';
import { Button, Slider, Space, theme } from 'antd';
import classNames from 'classnames';
import { useEffect } from 'react';
import './index.less';
const { darkAlgorithm, defaultAlgorithm } = theme;

const dark = {
  token: {
    colorBgBase: '#12141b',
    colorPrimary: '#4cc2ff',
    colorInfo: '#4cc2ff',
    colorTextBase: '#ffffff',
  },
};
const light = {
  token: {
    colorBgBase: '#ffffff',
    colorPrimary: '#4cc2ff',
    colorInfo: '#4cc2ff',
    colorTextBase: '#12141b',
  },
};
const themeMap = {
  dark,
  light,
};

type SettingItem = {
  type: keyof OsSettings;
  title: string;
  customRender: boolean;
  icon: React.FC;
};

const settingList: SettingItem[] = [
  {
    type: 'wifi',
    title: 'wifi',
    customRender: false,
    icon: WifiOutlined,
  },
  {
    type: 'bluetooth',
    title: 'Bluetooth',
    customRender: false,
    icon: BulbOutlined,
  },
  // {
  //     type: 'flightMode',
  //     title: 'flightMode',
  //     customRender: false,
  //     icon: <WifiOutlined>,
  // },
  {
    type: 'darkTheme',
    title: 'theme',
    icon: DingtalkCircleFilled,
    customRender: true,
  },
];

const QuickSettings = () => {
  const { state, setOSSettingItem } = useWindows();
  const { settings } = state;
  const setAntdConfig = useAntdConfigSetter();
  const handleSetttingItemClick = (item: SettingItem) => {
    setOSSettingItem(item.type, !settings[item.type]);
    if (item.type === 'darkTheme') {
      const isDarkTheme = !settings.darkTheme;
      const tempTheme = isDarkTheme ? themeMap.dark : themeMap.light;
      const algorithm = isDarkTheme ? [darkAlgorithm] : [defaultAlgorithm];
      setAntdConfig({
        theme: { token: tempTheme.token },
        algorithm,
      });
    }
  };
  useEffect(() => {
    const isDarkTheme = true;
    const tempTheme = isDarkTheme ? themeMap.dark : themeMap.light;
    const algorithm = isDarkTheme ? [darkAlgorithm] : [defaultAlgorithm];
    setAntdConfig({
      theme: { token: tempTheme.token },
      algorithm,
    });
  }, []);
  return (
    <div className="w-[360px] px-2 py-2.5">
      <div className="quick-settings flex flex-wrap justify-between">
        {settingList.map((item) => {
          const Temp = item.icon;
          const selected = settings[item.type] || false;
          return (
            <div key={item.type} className="w-[30%] flex-1">
              <div
                className={classNames(
                  'quick-setting-flag border-r-8 cursor-pointer rounded',
                  {
                    selected: selected,
                  },
                )}
                onClick={() => handleSetttingItemClick(item)}
              >
                <div className="flex items-center justify-center h-[48px]">
                  {item.customRender ? (
                    <div>{selected ? 'light' : 'dark'}</div>
                  ) : (
                    <Temp />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center h-[40px]">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sliders">
        <div className="slider-item">
          <div className="icon">
            <SmileOutlined />
          </div>
          <div className="flex-1">
            <Slider></Slider>
          </div>
        </div>
        <div className="slider-item">
          <div className="icon">
            <SoundOutlined />
          </div>
          <div className="flex-1">
            <Slider></Slider>
          </div>
        </div>
        <Space>
          <Button type="primary">yes</Button>
          <Button>yes</Button>
          <Button>yes</Button>
        </Space>
      </div>
    </div>
  );
};

export default QuickSettings;
