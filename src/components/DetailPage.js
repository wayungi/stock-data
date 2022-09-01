/** @format */

import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DeatilPage = () => {
  const param = useParams();
  const teams = useSelector((state) => state.games.data);
  const team = teams.filter((team) => team.id === param.id);

  // console.log(param.id);
  console.log(team);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>Detail page</div>
    </div>
  );
};

export default DeatilPage;
