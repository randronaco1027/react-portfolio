import React from 'react';
import ProjectList from '../ProjectList';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">Gobbler</h1>
      <p>Gobbler</p>
      <ProjectList  />
    </section>
  );
}
export default Portfolio;
