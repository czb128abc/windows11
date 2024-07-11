import { getResource } from '@/constants/resourceMap';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function Shutdown() {
  const [powerOff, setPowerOff] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPowerOff(true);
    }, 5000);
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] absolute top0 left-0 z-50 bg-black flex items-center justify-center">
      {!powerOff && (
        <div className="text-center">
          <div className="mb-10">
            <img src={getResource('Start')}></img>
          </div>
          <div className="text-3xl">
            <LoadingOutlined></LoadingOutlined>
            <span className="text-white text-4xl pl-4">Shutdown...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shutdown;
