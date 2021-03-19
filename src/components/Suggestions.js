import React from 'react';
import Links from './Links';

const Suggestions = (props) => {
  return (
    <ul className="list-group list-group-flush mt-2">
      <li className="list-group-item list-group-item-info shadow">Movies</li>
      {props.movies.map((suggest) => {
        return (
          <Links
            key={suggest.imdbID}
            suggestion={suggest}
            search={props.search}
          />
        );
      })}

      <li className="list-group-item list-group-item-info shadow">TV Series</li>
      {props.series.map((suggest) => {
        return (
          <Links
            key={suggest.imdbID}
            suggestion={suggest}
            search={props.search}
          />
        );
      })}
    </ul>
  );
};

export default Suggestions;
