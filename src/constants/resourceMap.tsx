import Explorer from "./../assets/icons/explorer.png";
import Folder from "./../assets/icons/folder-empty.png";
import ThisPC from "./../assets/icons/this-pc.png";
import Eadge from "./../assets/icons/eadge.png";
import Settings from "./../assets/icons/settings.png";
import MailIcon from "./../assets/icons/mail.png";
import RecycleBin from "./../assets/icons/recycle-bin.png";
import Store from "./../assets/icons/store.png";
import Spotify from "./../assets/icons/spotify.png";
import NotepadIcon from "./../assets/icons/notepad.png";
import Board from "./../assets/icons/board.png";
import VSCodeIcon from "./../assets/icons/vscode.png";

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
}

export function getResource(name: string) {
    const resource =  resourceMap[name as keyof typeof resourceMap];
    return resource || resourceMap.Folder;
}