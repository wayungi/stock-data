/** @format */

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './DetailPage.module.css';

const DetailPage = () => {
  const param = useParams() || { id: 'arg.1' };
  const teams = useSelector((state) => state.games.data);
  const {
    name,
    slug,
    abbr,
    logos: { dark },
  } = teams.filter((team) => team.id === param.id)[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.league}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.imageTag}>
          <img src={dark} alt={name} />
        </div>
        <p className={styles.slugTag}>
          slug:
          <span className={styles.slug}>{slug}</span>
        </p>
        <p className={styles.abbrTag}>
          Abbreviation :
          <span className={styles.abbr}>{abbr}</span>
        </p>
      </div>
      <Link to="/" className={styles.link}>Back</Link>
    </div>
  );
};

export default DetailPage;
