import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DeatilPage = () => {
  const param = useParams();
  const teams = useSelector((state) => state.games.data);
  const team = teams.filter((team) => team.id === param.id);

  // console.log(param.id);
  console.log(team);

  return (<div>Detail page</div>);
};

export default DeatilPage;
