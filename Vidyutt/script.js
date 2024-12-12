function storeDate() {
    const date = document.getElementById("dateInput").value;
    if (!date) {
        alert("⚠️ Please select a date!");
    } else {
        alert(`✅ Date stored successfully: ${date}`);
        console.log(`Stored date: ${date}`);
    }
}

function fetchPredictions() {
    // Hide the input and output sections
    document.querySelector(".input-section").style.display = "none";
    document.querySelector(".output-section").style.display = "none";
    // Move sections to the left
    //document.querySelector(".container").classList.add("shift-left");

    // Show the dynamic content area
    const dynamicContent = document.querySelector(".dynamic-content");
    dynamicContent.classList.add("visible");

    // Move the graph to the top
    const graphContainer = document.querySelector(".graph-container");
    graphContainer.style.marginTop = "0";
    graphContainer.style.marginBottom = "20px";

    // Increase the size of the graph
    const predictionGraph = document.getElementById("predictionGraph");
    predictionGraph.style.width = "1000px";
    predictionGraph.style.height = "600px";

    // Example: Dummy predictions and actual values
    const predictions = [];
    const actualValues = [];
    for (let i = 0; i < 288; i++) {
        const time = `${String(Math.floor(i / 12)).padStart(2, '0')}:${String((i % 12) * 5).padStart(2, '0')}`;
        predictions.push({ time, value: Math.random() * 100 });
        actualValues.push({ time, value: Math.random() * 100 });
    }

    // Populate the predictions table
    const tableBody = document.querySelector("#predictionsTable tbody");
    tableBody.innerHTML = ""; // Clear previous data
    for (let i = 0; i < 12; i++) {
        const row = document.createElement("tr");
        const prediction = predictions[i * 24];
        const actualValue = actualValues[i * 24];
        row.innerHTML = `
            <td>${prediction.time}</td>
            <td>${prediction.value.toFixed(2)}</td>
            <td>${actualValue.value.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }

    // Populate the summary table
    const summaryTable = document.createElement("table");
    summaryTable.id = "summaryTable";
    summaryTable.innerHTML = `
        <thead>
            <tr>
                <th>Entity</th>
                <th>Peak Load</th>
                <th>Peak Load Time</th>
                <th>Min Load</th>
                <th>Min Load Time</th>
                <th>Avg Load</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Entity 1</td>
                <td>${Math.max(...predictions.map((pred) => pred.value)).toFixed(2)}</td>
                <td>${predictions[predictions.findIndex((pred) => pred.value === Math.max(...predictions.map((pred) => pred.value)))].time}</td>
                <td>${Math.min(...predictions.map((pred) => pred.value)).toFixed(2)}</td>
                <td>${predictions[predictions.findIndex((pred) => pred.value === Math.min(...predictions.map((pred) => pred.value)))].time}</td>
                <td>${(predictions.reduce((acc, pred) => acc + pred.value, 0) / predictions.length).toFixed(2)}</td>
            </tr>
        </tbody>
    `;
    dynamicContent.insertBefore(summaryTable, graphContainer.nextSibling);

    // Generate graph
    const ctx = document.getElementById("predictionGraph").getContext("2d");
    const labels = predictions.map((pred) => pred.time);
    const predictionData = predictions.map((pred) => pred.value);
    const actualData = actualValues.map((actual) => actual.value);
    new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: "Predictions",
                    data: predictionData,
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    tension: 0.4
                },
                {
                    label: "Actual Values",
                    data: actualData,
                    borderColor: "rgba(54, 162, 235, 1)",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#fff"
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: "#fff", autoSkip: true, maxTicksLimit: 12 }
                },
                y: {
                    ticks: { color: "#fff" }
                }
            }
        }
    });
}