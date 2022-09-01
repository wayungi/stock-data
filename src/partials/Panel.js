/** @format */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Panel = (props) => {
  const { datum } = props;
  const {
    logos: { dark },
    name,
    id,
  } = datum;

  return (
    <Link to={`/details/${id}`}>
      <div>
        <div>
          <img src={dark} alt={name} />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

Panel.defaultProps = {
  id: 0,
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
  id: PropTypes.number,
  dark: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.instanceOf(Object),
  datum: PropTypes.instanceOf(Object),
};

export default Panel;
