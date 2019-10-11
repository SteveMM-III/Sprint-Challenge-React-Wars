import React, { useState, useEffect } from "react";
import axios from 'axios';

import Card from './Card';


const CardCreator = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => { 
        // console.log(response.data.results);
        setInfo(response.data.results); 
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }, []);

  return (
    <div>
      {
        info.map((person, index) => (
          <Card key={index} index={index} person={person} />
        ))
      }
    </div>
  );
};

export default CardCreator;