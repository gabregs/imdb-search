import React from 'react';
import parse from 'html-react-parser';

const Movies = (props) => {
  const { Title, imdbID } = props.suggestion;

  let regex = new RegExp(props.search, 'i');
  let title = parse(Title.replace(regex, props.search.bold()));

  console.log(props.search);

  return (
    <a
      type="button"
      href={`https://www.imdb.com/title/${imdbID}/`}
      className="btn list-group-item list-group-item-action shadow"
    >
      {title}
    </a>
  );
};

export default Movies;
