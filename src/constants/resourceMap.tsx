import Board from './../assets/images/icons/board.png';
import Eadge from './../assets/images/icons/eadge.png';
import Explorer from './../assets/images/icons/explorer.png';
import Folder from './../assets/images/icons/folder-empty.png';
import MailIcon from './../assets/images/icons/mail.png';
import NotepadIcon from './../assets/images/icons/notepad.png';
import RecycleBin from './../assets/images/icons/recycle-bin.png';
import Settings from './../assets/images/icons/settings.png';
import Spotify from './../assets/images/icons/spotify.png';
import Store from './../assets/images/icons/store.png';
import ThisPC from './../assets/images/icons/this-pc.png';
import SwitchDesktop from './../assets/images/icons/switch-desktop.png';
import VSCodeIcon from './../assets/images/icons/vscode.png';
import darkWallpaper from './../assets/images/wallpaper/dark/img0.jpg';
import lightWallpaper from './../assets/images/wallpaper/light/img0.jpg';


export const resourceMap = {
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
  Board,
  VSCodeIcon,
  SwitchDesktop,
  darkWallpapers:[darkWallpaper,],
  lightWallpapers:[lightWallpaper,]
};

export function getResource(name: string) {
  const resource = resourceMap[name as keyof typeof resourceMap] as string;
  return resource || resourceMap.Folder;
}
