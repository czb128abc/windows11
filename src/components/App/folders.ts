import { Folder } from '@/typings';
import Desktop from './../../assets/icons/desktop-folder-icon.png';
import DiskWins from './../../assets/icons/disk-wins.png';
import Disk from './../../assets/icons/disk.png';
import Docs from './../../assets/icons/docs-folder.png';
import Download from './../../assets/icons/download-folder.png';
import Music from './../../assets/icons/music-folder.png';
import Network from './../../assets/icons/netword-pc.png';
import OneDrive from './../../assets/icons/one-drive.png';
import Pictures from './../../assets/icons/pictures-folder.png';
import RecycleBin from './../../assets/icons/recycle-bin.png';
import ThisPC from './../../assets/icons/this-pc.png';
import Video from './../../assets/icons/video-folder.png';

export const folders: Folder[] = [
  {
    name: 'Local Disk (C:)',
    header: 'C:',
    path: 'C:',
    icon: Disk,
  },
  {
    name: 'Local Disk (C:)',
    header: 'Local Disk (C:)',
    path: 'This PC:/C',
    icon: DiskWins,
  },
  {
    name: 'This PC',
    header: 'This PC',
    path: 'This PC:',
    icon: ThisPC,
  },
  {
    name: 'desktop',
    header: 'Desktop',
    path: 'This PC:/desktop',
    icon: Desktop,
  },
  {
    name: 'downloads',
    header: 'Downloads',
    path: 'This PC:/downloads',
    icon: Download,
  },
  {
    name: 'pictures',
    header: 'Pictures',
    path: 'This PC:/pictures',
    icon: Pictures,
  },
  {
    name: 'music',
    header: 'Music',
    path: 'This PC:/music',
    icon: Music,
  },
  {
    name: 'videos',
    header: 'Videos',
    path: 'This PC:/videos',
    icon: Video,
  },
  {
    name: 'documents',
    header: 'Documents',
    path: 'This PC:/documents',
    icon: Docs,
  },
  {
    name: 'onedrive',
    header: 'onedrive',
    path: 'onedrive:',
    icon: OneDrive,
  },
  {
    name: 'network',
    header: 'Network',
    path: 'network:',
    icon: Network,
  },
  {
    name: 'wins 11 github',
    header: 'Wins 11 Github',
    path: 'This PC:/desktop/wins-11-github',
    icon: undefined,
  },
  {
    name: 'vito-portfolio-main',
    header: 'vito-portfolio-main',
    path: 'This PC:/desktop/portfolio',
    icon: undefined,
  },
  {
    name: 'program files(x86)',
    header: 'Program Files (x86)',
    path: 'C:/Program Files(x86)',
    icon: undefined,
  },
  {
    name: 'program files',
    header: 'Program Files',
    path: 'C:/Program Files',
    icon: undefined,
  },
  {
    name: 'DRIVERS',
    header: 'DRIVERS',
    path: 'C:/DRIVERS',
    icon: undefined,
  },
  {
    name: 'config',
    header: 'config',
    path: 'C:/config',
    icon: undefined,
  },
  {
    name: 'programData',
    header: 'ProgramData',
    path: 'C:/programData',
    icon: undefined,
  },
  {
    name: 'users',
    header: 'Users',
    path: 'C:/users',
    icon: undefined,
  },
  {
    name: 'wins32-loader',
    header: 'wins32-loader',
    path: 'C:/wins32-loader',
    icon: undefined,
  },
  {
    name: 'temp',
    header: 'Temp',
    path: 'C:/Temp',
    icon: undefined,
  },
  {
    name: 'perfLogs',
    header: 'perfLogs',
    path: 'C:/perfLogs',
    icon: undefined,
  },
  {
    name: 'recycle bin',
    header: 'Recycle bin',
    path: 'Recycle bin:',
    icon: RecycleBin,
  },
];

function getParentPath(path: string) {
  // 查找最后一个斜杠的位置
  const lastSlashIndex = path.lastIndexOf('/');

  // 如果找到了斜杠并且它不是第一个字符，则返回父路径
  if (lastSlashIndex > 0) {
    return path.substring(0, lastSlashIndex);
  }

  // 如果没有找到斜杠或者它是第一个字符，说明这是根路径，返回空字符串或根据需求处理
  return '';
}

function calcToFolderMap() {
  const tempMap: Record<string, Folder> = {
    root: {
      name: '',
      header: '',
      path: '',
      icon: undefined,
      childern: [],
    },
  };
  folders.forEach((item) => {
    tempMap[item.path] = item;
    tempMap[item.path].childern = [];
    tempMap[item.path].parent = getParentPath(item.path);
  });

  Object.keys(tempMap).forEach((item) => {
    const parent = tempMap[item].parent || 'root';
    tempMap[parent].childern?.push(tempMap[item]);
  });

  return tempMap;
}

export const folderMap = calcToFolderMap();

export const quickLinks = [
  'This PC:/desktop',
  'This PC:/downloads',
  'This PC:/pictures',
  'This PC:/music',
  'This PC:/videos',
];
