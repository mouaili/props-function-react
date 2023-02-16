import React from 'react';

const Child = props => {
  console.log(props);

  const btnResponse =
    props.state.message !== null ? (
      <button onClick={props.responseTotokMsg} className='App-button'>
        Response
      </button>
    ) : (
      <button disabled>Response</button>
    );

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{btnResponse}</p>
      <p>{props.state.childMsg}</p>
    </div>
  );
};

export default Child;
