import Window from '@/components/Window';
import type { AppIns } from '@/typings';

type Props = {
  appIns: AppIns;
  windowTitle?: string;
  windowIcon?: string;
};

const FileExplorer: React.FC<Props> = (props) => {
  const { appIns, windowIcon, windowTitle } = props;
  return (
    <Window appIns={appIns} windowIcon={windowIcon} windowTitle={windowTitle}>
      fileExplorer
    </Window>
  );
};

export default FileExplorer;
