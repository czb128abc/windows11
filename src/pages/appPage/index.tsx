import '@/assets/css/common.less';
import TaskBar from '@/components/TaskBar';
import Desktop from './components/Desktop';
import useWindows from '@/hooks/useWindows';

const AppPage = () => {
  const{state} = useWindows();
  return (
    <Desktop desktopIndex={state.currentDesktopIndex} >
      <TaskBar desktopIndex={state.currentDesktopIndex}/>
    </Desktop>
  );
};

export default AppPage;
