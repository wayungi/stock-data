/** @format */
import PropTypes from 'prop-types';

const Panel = (props) => {
  const { datum } = props;
  const {
    logos: { dark },
    name,
  } = datum;
  return (
    <div>
      <div>
        <img src={dark} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

Panel.defaultProps = {
  dark: '',
  name: 'no team',
  logos: {
    dark: '',
  },
  datum: {
    id: 0, name: '', slug: '', abbr: '', logos: {},
  },
};

Panel.propTypes = {
  dark: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.instanceOf(Object),
  datum: PropTypes.instanceOf(Object),
};

export default Panel;
