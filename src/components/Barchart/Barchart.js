import "./Barchart.css";
import { useEffect, useState } from "react";

function Barchart() {
  const [maxValue, setMaxvalue] = useState(0);
  const chartData = [
    { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
    { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
    { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
    { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
    { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
    {
      id: "dep-6",
      name: "Human Resourcing",
      ticketCount: 35,
      colour: "#1D1E33",
    },
    { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
  ];

  useEffect(() => {
    let updateMaxValue = 0;
    chartData.map((data) => {
      if (data.ticketCount > updateMaxValue) {
        updateMaxValue = data.ticketCount;
      }
    });
    setMaxvalue(updateMaxValue);
  }, []);

  const getData = () =>
    new Promise((resolve) => {
      setTimeout(resolve, 500, chartData);
    });

  return (
    <div className="App">
      <div className="barchart-container">
        {chartData?.map((item, index) => {
          return (
            <div
              className="barchart"
              key={index}
              title={item.name + " " + item.ticketCount}
              style={{
                width: "20px",
                height: `${(item.ticketCount / maxValue) * 100}%`,
                backgroundColor: item.colour,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Barchart;
