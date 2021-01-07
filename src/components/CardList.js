import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // Sample Error
  if(false) {
    throw new Error('NOOO there has been an error');
  }
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        }) 
      }
    </div>
  );
}

export default CardList;