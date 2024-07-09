import Icon, { DownOutlined } from '@ant-design/icons';
import { ReactComponent as RenameSvg }   from '@/assets/svg/rename.svg'
import { ReactComponent as NewSvg }   from '@/assets/svg/new.svg'
import { ReactComponent as CopySvg }   from '@/assets/svg/copy.svg'
import { ReactComponent as CutSvg }   from '@/assets/svg/cut.svg'
import { ReactComponent as PasteSvg }   from '@/assets/svg/paste.svg'
import { ReactComponent as ModernShareSvg }   from '@/assets/svg/modern-share.svg'
import { ReactComponent as RecycleSvg }   from '@/assets/svg/recycle.svg'
import { ReactComponent as SortSvg }   from '@/assets/svg/sort.svg'
import { ReactComponent as ViewSvg }   from '@/assets/svg/view.svg'

const commands = [
  {
    type: 'new',
    text: 'new',
    iconRender: <Icon component={NewSvg} />,
    showMore: true,
  },
  {
    type: 'cut',
    text: 'Cut',
    iconRender: <Icon component={CutSvg} />,
  },
  {
    type: 'copy',
    text: 'Copy',
    iconRender: <Icon component={CopySvg} />,
  },
  {
    type: 'paste',
    text: 'Paste',
    iconRender: <Icon component={PasteSvg} />,
  },
  {
    type: 'rename',
    text: 'Rename',
    iconRender: <Icon component={RenameSvg} />,
  },
  {
    type: 'modernShare',
    text: 'ModernShare',
    iconRender: <Icon component={ModernShareSvg} />,
  },
  {
    type: 'recycle',
    text: 'Recycle',
    iconRender: <Icon component={RecycleSvg} />,
  },
  {
    type: 'sort',
    text: 'Sort',
    iconRender: <Icon component={SortSvg} />,
    showMore: true,
  },
  {
    type: 'view',
    text: 'View',
    iconRender: <Icon component={ViewSvg} />,
    showMore: true,
  },
];

function FileExplorerCommands() {
  return (
    <div className="file-explorer-commands flex flex-row gap-[4px] py-1 pl-1">
      {commands.map((item) => {
        return (
          <div key={item.type} className={`command-item ${item.showMore ? 'w-[92px]': 'w-[42px]'} h-[40px] flex items-center justify-center`}>
            {item.showMore && (
              <div className='flex gap-[8px]'>
                <span>{item.text}</span>
                {item.iconRender}
                <DownOutlined className='down-outlined' />
              </div>
            )}
            {!item.showMore && item.iconRender}
          </div>
        );
      })}
    </div>
  );
}

export default FileExplorerCommands;
