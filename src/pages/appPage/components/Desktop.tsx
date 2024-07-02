import App from "@/components/App";
import TaskBar from "@/components/TaskBar";
import FileExplorer from "@/components/windowsApps/FileExplorer";
import useWindows from "@/hooks/useWindows";

const Desktop: React.FC = () => {
  const { currentDesktop } = useWindows();
  const { runningApps } = currentDesktop;
  return (
    <div className="desktop">
      <App />
      <TaskBar />
      {
        runningApps.map((appIns) => {
          return <FileExplorer key={appIns.id} appIns={appIns} ></FileExplorer>;
        })
      }
    </div>
  );
};

export default Desktop;
