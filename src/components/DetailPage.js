/** @format */

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
  const param = useParams();
  const teams = useSelector((state) => state.games.data);
  const team = teams.filter((team) => team.id === param.id)[0];

  // console.log(param.id);
  console.log(team);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <h1>{team.name}</h1>
        <div>
          <img src={team.logos.light} alt={team.name} />
        </div>
        <p>
          slug:
          <span>{team.slug}</span>
        </p>
        <p>
          Abbr :
          <span>{team.abbr}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
