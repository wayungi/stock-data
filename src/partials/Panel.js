/** @format */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Panel.module.css';

const Panel = (props) => {
  const { datum } = props;
  const {
    logos: { dark },
    name,
    id,
  } = datum;

  return (
    <Link to={`/details/${id}`} className={styles.link}>
      <div className={styles.panel}>
        <div className={styles.pane}>
          <img src={dark} alt={name} />
        </div>
        <div>
          <p className={styles.title}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

Panel.defaultProps = {
  id: '',
  dark: '',
  name: 'no team',
  logos: {
    dark: '',
  },
  datum: {
    id: 0,
    name: '',
    slug: '',
    abbr: '',
    logos: {},
  },
};

Panel.propTypes = {
  id: PropTypes.string,
  dark: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.instanceOf(Object),
  datum: PropTypes.instanceOf(Object),
};

export default Panel;
