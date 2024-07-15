import { folderMap } from '@/components/App/folders';
import Window from '@/components/Window';
import type { AppIns } from '@/typings';
import FileExploreQuickLink from './FileExploreQuickLink';
import FileExplorerCommands from './FileExplorerCommands';
import FileExplorerContent from './FileExplorerContent';
import FileExplorerNav from './FileExplorerNav';
import './index.less';

type Props = {
  appIns: AppIns;
  windowTitle?: string;
  windowIcon?: string;
};

const FileExplorer: React.FC<Props> = (props) => {
  const { appIns, windowIcon, windowTitle } = props;
  const path = appIns.data || '';
  return (
    <Window appIns={appIns} windowIcon={windowIcon} windowTitle={windowTitle}>
      <div className="file-explorer h-full w-full flex flex-col">
        <FileExplorerCommands />
        <FileExplorerNav path={path} folderMap={folderMap} />
        <div className="file-explorer-main flex-1 flex flex-row">
          <FileExploreQuickLink path={path} folderMap={folderMap} />
          <FileExplorerContent path={path} folderMap={folderMap} />
        </div>
      </div>
    </Window>
  );
};

export default FileExplorer;
