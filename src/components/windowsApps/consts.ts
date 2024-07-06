import FileExplorer from './FileExplorer';
import RecycleBin from './RecycleBin';
import VSCode from './VSCode';

const appsMap = {
  FileExplorer,
  VSCode,
  RecycleBin,
};
export type AppType = keyof typeof appsMap;

export const getApplicationByAppType = (appType: AppType) => {
  if (!appsMap[appType]) {
    throw new Error(`${appType} is not a valid app type`);
  }
  return appsMap[appType];
};
