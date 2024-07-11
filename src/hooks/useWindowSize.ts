import { useSize } from 'ahooks';

const useWindowSize = () => {
  const size = useSize(document.querySelector('body'));
  return {
    width: size?.width || 0,
    height: size?.height || 0,
  };
};

export default useWindowSize;
