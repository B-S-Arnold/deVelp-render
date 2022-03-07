import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function DevelopersList() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/developers/');
      const responseData = await response.json();
      console.log(responseData)
      setDevelopers(responseData['developers']);
    }
    fetchData();
  }, []);

  const devsComponents = developers?.map((dev) => {
    return (
      <li key={dev.id}>
        <NavLink to={`/developers/${dev.id}`}>{dev.name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Developers List: </h1>
      <ul>{devsComponents}</ul>
    </>
  );
}

export default DevelopersList;
