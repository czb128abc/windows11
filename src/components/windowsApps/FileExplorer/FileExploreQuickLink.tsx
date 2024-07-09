import { folderMap, quickLinks } from '@/components/App/folders';
import { resourceMap } from '@/constants/resourceMap';
import { FileExplorerProps } from '@/typings';
import React from 'react';

const FileExploreQuickLink: React.FC<FileExplorerProps> = () => {
  return (
    <div className="file-explorer-quick-link w-[200px] px-1">
      <div>
        {quickLinks.map((item) => {
          const str = folderMap[item].icon || resourceMap.Folder;
          return (
            <div key={item} className="quick-link-item flex items-center gap-2 p-2">
              <div className="w-[20px] h-[20px]">
                <img className='f-ull w-full' src={str} alt=""></img>
              </div>
              <div>{folderMap[item].header}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileExploreQuickLink;
