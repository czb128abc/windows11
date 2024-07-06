import { resourceMap } from '@/constants/resourceMap';
import type { AppIns } from '@/typings';
import FileExplorer from '../FileExplorer';

type Props = {
  appIns: AppIns;
};

const RecycleBin = (props: Props) => {
  const { appIns } = props;
  return (
    <FileExplorer
      appIns={appIns}
      windowIcon={resourceMap.RecycleBin}
      windowTitle="Recycle bin"
    ></FileExplorer>
  );
};

export default RecycleBin;
