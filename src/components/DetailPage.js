/** @format */

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const param = useParams() || { id: 'arg.1' };
  const teams = useSelector((state) => state.games.data);
  const {
    name,
    slug,
    abbr,
    logos: { light },
  } = teams.filter((team) => team.id === param.id)[0];

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <h1>{name}</h1>
        <div>
          <img src={light} alt={name} />
        </div>
        <p>
          slug:
          <span>{slug}</span>
        </p>
        <p>
          Abbr :
          <span>{abbr}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
