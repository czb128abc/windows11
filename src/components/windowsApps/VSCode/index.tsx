import Window from '@/components/Window';
import type { AppIns } from '@/typings';

type Props = {
  appIns: AppIns;
};

const VSCode = (props: Props) => {
  const { appIns } = props;
  return (
    <Window appIns={appIns}>
      <div className="vscode-container h-full w-full">
        <iframe
          src="https://github1s.com/czb128abc/windows11"
          frameBorder={0}
          height={'100%'}
          width="100%"
        />
      </div>
    </Window>
  );
};

export default VSCode;
