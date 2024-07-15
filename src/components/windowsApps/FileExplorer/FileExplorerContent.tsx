import { resourceMap } from '@/constants/resourceMap';
import { FileExplorerProps } from '@/typings';

const FileExplorerContent: React.FC<FileExplorerProps> = ({
  folderMap,
  path,
}) => {
  const folder = folderMap[path];
  const childern = folder?.childern || [];
  const isEmpty = childern?.length === 0;
  return (
    <div className="file-explorer-content flex-1 p-2 pt-0">
      {isEmpty && <div className="text-center flex-1">This folder is empty.</div>}
      {!isEmpty &&
        childern?.map((item) => (
          <div key={item.path} className="file-explorer-content-item">
            <div className="w-[72px] h-[72px]">
              <img
                className="f-ull w-full"
                src={item.icon || resourceMap.Folder}
                alt=""
              ></img>
            </div>
            <div className="text-center text-ellipsis">{item.name}</div>
          </div>
        ))}
    </div>
  );
};

export default FileExplorerContent;
