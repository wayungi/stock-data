/** @format */
import PropTypes from 'prop-types';

const Panel = (props) => {
  const {
    logos: { dark },
    name,
  } = props;
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
};

Panel.propTypes = {
  dark: PropTypes.string,
  name: PropTypes.string,
  logos: PropTypes.instanceOf(Object),
};

export default Panel;
