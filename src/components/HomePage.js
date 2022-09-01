/** @format */
import { useSelector } from 'react-redux';
import Panel from '../partials/Panel';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.games);
  return (
    <div>{status ? data.map((datum) => <Panel key={datum.id} datum={datum} />) : null}</div>
  );
};

export default HomePage;
