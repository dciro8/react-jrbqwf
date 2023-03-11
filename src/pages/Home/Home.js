import * as React from 'react';

const Home = () => {
  const [characterList, setChactersList] = React.useState([]);

  React.useEffect(() => {
    const list = fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then((response) => response.json())
      .then((data) => setChactersList(data.result))
      .catch(console.error);
  }, []);
  return <main> hola Mundo </main>;
};
export default Home;
