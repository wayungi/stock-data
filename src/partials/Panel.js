/** @format */
import PropTypes from 'prop-types';

const Panel = (props) => {
  const { imgUrl, name } = props;
  return (
    <div>
      <div>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

Panel.defaultProps = {
  imgUrl: '',
  name: 'no team',
};

Panel.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
};

export default Panel;
