import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p> Random Pad is a website created for mental leisure. You can construct a to-do list, record important notes in notepad, 
            relax and laugh at the jokepad, or scroll for hours in the memePad. We hope you enjoy this website as much as we have
            enjoyed creating it. This is a fullstack application geared toward practicing different technologies which include 
            React.js, Javascript, Node.js, AWS, postgreSQL, HTML, and CSS. </p>
      </div>
    </div>
  );
}

export default AboutPage;
