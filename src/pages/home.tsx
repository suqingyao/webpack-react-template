import island from '@/assets/island.png';
import wallpaper from '@/assets/wallhaven-o3o817.png';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const goPage = () => {
    navigate('/about');
  };

  return (
    <div>
      {' '}
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
      <button
        className="text-2xl text-green-400 underline-red-500"
        onClick={goPage}
      >
        about
      </button>
    </div>
  );
};

export default Home;
