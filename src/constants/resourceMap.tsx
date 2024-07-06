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
import VSCodeIcon from './../assets/images/icons/vscode.png';

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
};

export function getResource(name: string) {
  const resource = resourceMap[name as keyof typeof resourceMap];
  return resource || resourceMap.Folder;
}
