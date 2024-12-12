import React, { useState, useEffect } from 'react';
import { getPredictions, getActual } from '../apiClient';

const EntityGraph = ({ entity, title }) => {
  const [predictions, setPredictions] = useState([]);
  const [actual, setActual] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const predictionsData = await getPredictions(entity);
      const actualData = await getActual(entity);
      setPredictions(predictionsData);
      setActual(actualData);
    };

    fetchData();
  }, [entity]);

  return (
    <div>
      <h2>{title} Graph</h2>
      <p>Graph visualization will go here (use chart libraries like Chart.js or D3.js).</p>
      {/* Pass predictions and actual data to a chart component */}
    </div>
  );
};

export default EntityGraph;
