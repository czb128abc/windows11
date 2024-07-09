import useWindows from '@/hooks/useWindows';
import './index.less';

const Wallpaper = () => {
  const { currentDesktop } = useWindows();
  const url = currentDesktop.currentWallpaper.url;
  return (
    <div
      className="wallpaper-background"
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default Wallpaper;
