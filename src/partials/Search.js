/** @format */

const Search = (props) => {
  console.log(props);

  const searchHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <input type="search" onChange={(e) => searchHandler(e)} />
    </form>
  );
};

export default Search;
