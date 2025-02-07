import island from '@/assets/island.png';
import wallpaper from '@/assets/wallhaven-o3o817.png';
import './styles/index.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Hello React!</h1>
      <p>
        <img
          src={island}
          alt="cover"
        />
        <img
          src={wallpaper}
          style={{ height: '200px' }}
          alt="cover"
        />

        <img
          src="/island.png"
          alt=""
        />
      </p>
      <p className="bless">god bless you</p>

      <p className="text-4xl text-red-400">i love you</p>
    </div>
  );
};

export default App;
