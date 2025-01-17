// Applications images

import { resourceMap } from '@/constants/resourceMap';
import type { AppInfo } from '@/typings';

const {
  Explorer,
  Folder,
  ThisPC,
  Eadge,
  Settings,
  MailIcon,
  RecycleBin,
  Store,
  Spotify,
  NotepadIcon,
  // Board,
  VSCodeIcon,
} = resourceMap;

// const Component = ()=>(<div>ss</div>);
// const FileExplorer = Component;
// const Edge = Component;
// const Mail = Component;
// const RecycleBinComponent = Component;
// const Notepad = Component;
// const VSCode = Component;

export const applications: AppInfo[] = [
  {
    icon: Explorer,
    appType: 'FileExplorer',
    name: 'Explorer',
    singleInstance: true,
  },
  {
    icon: Eadge,
    appType: 'Edge',
    name: 'Edge',
    singleInstance: true,
    removeHeader: true,
  },
  {
    icon: Settings,
    appType: 'FileExplorer',
    singleInstance: true,
    name: 'Settings',
  },
  {
    icon: MailIcon,
    appType: 'Mail',
    singleInstance: true,
    name: 'Mail',
  },
  {
    icon: RecycleBin,
    appType: 'RecycleBin: ',
    singleInstance: true,
    name: 'Recycle bin',
  },
  {
    icon: Store,
    appType: 'FileExplorer',
    singleInstance: true,
    name: 'Microsoft Storeasdfa',
  },
  {
    icon: Spotify,
    appType: 'FileExplorer',
    singleInstance: true,
    name: 'Spotiy',
  },
  {
    icon: NotepadIcon,
    appType: 'Notepad',
    singleInstance: true,
    name: 'Notepad',
  },
  {
    icon: VSCodeIcon,
    appType: 'VSCode',
    singleInstance: true,
    name: 'Visual Studio Code',
  },
];

export const desktopApps = [
  {
    icon: ThisPC,
    appType: 'FileExplorer',
    data: 'This PC:',
    name: 'This PC',
  },
  {
    icon: RecycleBin,
    appType: 'RecycleBin',
    name: 'Recycle bin',
  },
  {
    icon: Eadge,
    appType: 'FileExplorer',
    name: 'Edge',
  },
  {
    icon: VSCodeIcon,
    appType: 'VSCode',
    name: 'Visual Studio Code',
  },
  {
    icon: NotepadIcon,
    appType: 'FileExplorer',
    name: 'Notepad',
  },
  {
    icon: Folder,
    appType: 'FileExplorer',
    data: 'This PC:/desktop/wins-11-github',
    name: 'Wins 11 github',
  },
  {
    icon: Folder,
    appType: 'FileExplorer',
    data: 'This PC:/desktop/portfolio',
    name: 'vito-portfolio-main',
  },
];

// recommended applications in start menu
export const recommendedAppsInStartMenu = [
  {
    icon: Eadge,
    appType: 'FileExplorer',
    name: 'Edge',
  },
  {
    icon: Settings,
    appType: 'FileExplorer',
    name: 'Settings',
  },
  {
    icon: MailIcon,
    appType: 'FileExplorer',
    name: 'Mail',
  },
  {
    icon: RecycleBin,
    appType: 'RecycleBin',
    name: 'Recycle bin',
  },
  {
    icon: Store,
    appType: 'FileExplorer',
    name: 'Microsoft Storeasdfa',
  },
  {
    icon: Spotify,
    appType: 'FileExplorer',
    name: 'Spotiy',
  },
];
