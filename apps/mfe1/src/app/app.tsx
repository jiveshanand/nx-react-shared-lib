// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

// import NxWelcome from './nx-welcome';
import { useSharedStore } from '@my-workspace/shared';

export function App() {
  const { data, setData } = useSharedStore();
  console.log(useSharedStore());
  const triggerAction = () => {
    setData('Hello from MF1');
  };
  return (
    <div>
      <button onClick={triggerAction}>Trigger Action in MF1</button>
      {/* <NxWelcome title="mfe1" /> */}
      <div>Data in MF1: {data}</div>
    </div>
  );
}

export default App;
