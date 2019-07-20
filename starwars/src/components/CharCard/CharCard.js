import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharCard({ characters }) {
  return (
    <React.Fragment>
      {characters.map(character => (
        <div className='container' key={character.url}>
          <Card key={character.url}>
            <Card.Content>
              <Card.Header className='header'>{character.name}</Card.Header>
              <Card.Description>
                <p>DOB: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <p>Height: {character.height}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Eye Color: {character.eye_color}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      ))}
    </React.Fragment>
  )
}