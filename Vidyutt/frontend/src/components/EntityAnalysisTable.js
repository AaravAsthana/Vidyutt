import React, { useState, useEffect } from 'react';
import { getPredictions, getActual } from '../apiClient';

const EntityAnalysisTable = ({ entity, title }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const predictionsData = await getPredictions(entity);
      const actualData = await getActual(entity);

      // Combine predictions and actual data into table format
      const combinedData = predictionsData.map((prediction, index) => ({
        time: prediction.time,
        predictedValue: prediction.value,
        actualValue: actualData[index]?.value || 'N/A',
      }));
      setTableData(combinedData);
    };

    fetchData();
  }, [entity]);

  return (
    <div>
      <h2>{title} Analysis Table</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Predicted Value</th>
            <th>Actual Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.predictedValue}</td>
              <td>{row.actualValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntityAnalysisTable;
