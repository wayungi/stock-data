/** @format */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './HomePage.module.css';

import Panel from '../partials/Panel';

const HomePage = () => {
  const { status, data } = useSelector((state) => state.games);
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTeams = data.filter((datum) => {
    if (searchTerm === '') return datum;
    return datum.name.toLowerCase().includes(searchTerm);
  });

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input type="search" onChange={(e) => searchHandler(e)} placeholder="Search by league name" />
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
