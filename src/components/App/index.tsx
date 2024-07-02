import useWindows from '@/hooks/useWindows';
import DesktopApp from './DesktopApp';

const App: React.FC = () => {
  const { currentDesktop } = useWindows();
  const { desktopApps, } = currentDesktop;
  return (
    <div className="h-full w-full relative flex flex-col flex-wrap content-start gap-x-1 px-1">
      {desktopApps.map((app) => {
        return <DesktopApp key={app.name} appInfo={app} />;
      })}
    </div>
  );
};

export default App;
