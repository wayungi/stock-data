/** @format */
import { useSelector } from 'react-redux';
import Panel from '../partials/Panel';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.games);
  console.log(data);

  return (
    <div>
      <Panel />
    </div>
  );
};

export default HomePage;
