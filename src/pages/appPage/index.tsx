import '@/assets/css/common.less';
import TaskBar from '@/components/TaskBar';
import { themeMap } from '@/constants';
import useWindows from '@/hooks/useWindows';
import { useAntdConfigSetter } from '@umijs/max';
import { theme } from 'antd';
import { useEffect } from 'react';
import Desktop from './components/Desktop';
import Shutdown from './components/Shutdown';
import Signin from './components/Signin';
const { darkAlgorithm, defaultAlgorithm } = theme;

const AppPage = () => {
  const { state, setOSSettingItem } = useWindows();
  const setAntdConfig = useAntdConfigSetter();
  const { isSignin, powerOff } = state.settings;
  useEffect(() => {
    const isDarkTheme = true;
    const tempTheme = isDarkTheme ? themeMap.dark : themeMap.light;
    const algorithm = isDarkTheme ? [darkAlgorithm] : [defaultAlgorithm];
    const config = {
      theme: { token: tempTheme.token },
      algorithm,
    };
    setAntdConfig(config);

    setOSSettingItem('darkTheme', true);
  }, []);
  if (!isSignin) {
    return <Signin />;
  }
  if (powerOff) return <Shutdown />;
  return (
    <Desktop desktopIndex={state.currentDesktopIndex}>
      <TaskBar desktopIndex={state.currentDesktopIndex} />
    </Desktop>
  );
};

export default AppPage;
