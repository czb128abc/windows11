import useWindows, { CommWindowsProps } from '@/hooks/useWindows';
import './index.less';

const Wallpaper: React.FC<CommWindowsProps> = ({ desktopIndex }) => {
  const { currentDesktop } = useWindows(desktopIndex);
  const url = currentDesktop.currentWallpaper.url;
  return (
    <div
      className="wallpaper-background"
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default Wallpaper;
