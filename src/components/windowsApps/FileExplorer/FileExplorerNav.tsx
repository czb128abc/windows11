import { FileExplorerProps } from '@/typings';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import React from 'react';

const FileExplorerNav: React.FC<FileExplorerProps> = ({ path }) => {
  return (
    <div className="file-explorer-nav">
      <div className="nav-left flex gap-1 px-3">
        <div className="nav-arrow">
          <ArrowLeftOutlined />
        </div>
        <div className="nav-arrow">
          <ArrowRightOutlined />
        </div>
        <div className="nav-arrow">
          <ArrowUpOutlined />
        </div>
      </div>
      <div className="nav-center flex-1">
        <div className="nav-path">{path}</div>
      </div>
      <div className="nav-right"></div>
    </div>
  );
};

export default FileExplorerNav;
