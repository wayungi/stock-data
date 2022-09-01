/** @format */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Panel from '../partials/Panel';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.games);
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeams = data.filter((datum) => {
    if (searchTerm === '') return datum;
    return datum.name.includes(searchTerm);
  });

  console.log(filteredTeams);

  return (
    <div>
      <form>
        <input type="search" onChange={(e) => searchHandler(e)} placeholder="Search" />
      </form>
      <div>
        {status
          ? filteredTeams.map((datum) => <Panel key={datum.id} datum={datum} />)
          : null}
      </div>
    </div>
  );
};

export default HomePage;
