/** @format */
import { useSelector } from 'react-redux';
import Panel from '../partials/Panel';
import Search from '../partials/Search';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.games);
  return (
    <div>
      <Search />
      <div>
        {status
          ? data.map((datum) => <Panel key={datum.id} datum={datum} />)
          : null}
      </div>
    </div>
  );
};

export default HomePage;
