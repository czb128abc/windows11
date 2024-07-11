import useWindows from '@/hooks/useWindows';
import { Button, message } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs'
import './index.less';
function Signin() {
  const [messageApi, contextHolder] = message.useMessage();

  const { state, setSignin } = useWindows();
  const [lockScreen, setLockScreen] = useState(true);
  const date = new Date();
  return (
    <div className="signin">
      {contextHolder}
      {lockScreen && (
        <div className="lock-screen" onClick={() => setLockScreen(false)}>
          <div className="text-center">
            <div className="time text-6xl pb-2">
             {dayjs(date).format('HH:mm')}
            </div>
            <div className="date text-2xl">{dayjs(date).format("YYYY/MM/DD")}</div>
          </div>
        </div>
      )}
      <div className="signin-form gap-5">
        <div className="h-[180px] w-[184px] rounded-full shadow-2xl bg-indigo-500 hover:bg-indigo-700 cursor-pointer"></div>
        <div className="text-2xl">{state.user.username}</div>
        <div>
          <Button
            onClick={() => {
              messageApi.open({
                type: 'loading',
                content: 'Sigin in ...',
                duration: 0,
              });
              setTimeout(() => {
                setSignin(true);
              }, 2000);
            }}
            className="py-2 px-12 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
