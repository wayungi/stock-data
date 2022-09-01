/** @format */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Panel.module.css';

const Panel = (props) => {
  const { datum } = props;
  const {
    logos: { light },
    name,
    id,
  } = datum;

  return (
    <div className={styles.panel}>
      <Link to={`/details/${id}`} className={styles.link}>
        <div className={styles.restore}>
          <div className={styles.pane}>
            <img src={light} alt={name} />
          </div>
          <div>
            <p className={styles.title}>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Panel.defaultProps = {
  id: '',
  light: '',
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
  light: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.instanceOf(Object),
  datum: PropTypes.instanceOf(Object),
};

export default Panel;
