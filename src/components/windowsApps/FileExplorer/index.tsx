import Window from '@/components/Window';
import type { AppIns } from '@/typings';

type Props = {
    appIns: AppIns;
};

const FileExplorer = (props: Props) => {
    const { appIns } = props;
  return <Window appIns={appIns}>fileExplorer</Window>;
};

export default FileExplorer;
