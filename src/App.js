import { useState } from "react";
import "./App.scss";

const currSeries = [
  {
    name: "SpongeBob",
    episodes: 200,
  },
  {
    name: "The Punisher",
    episodes: 15,
  },
];

export default function App() {
  const [seriesList, setSeriesList] = useState(currSeries);

  function addNewSeries(series) {
    setSeriesList([...seriesList, series]);
  }

  return (
    <div className="app-container">
      <SeriesInput addNewSeries={addNewSeries} />
      <CurrentSeriesList seriesList={seriesList} />
    </div>
  );
}

function SeriesInput({ addNewSeries }) {
  const [seriesTyped, setSeriesTyped] = useState("");
  const [episodeLength, setEpisodeLength] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const newSeries = {
      name: seriesTyped,
      episodes: episodeLength,
    };

    addNewSeries(newSeries);

    // Reset input fields after submission
    setSeriesTyped("");
    setEpisodeLength("");
  }

  return (
    <div className="series-input-container">
      <form onSubmit={handleSubmit}>
        <p>Add Series</p>
        <input
          type="text"
          value={seriesTyped}
          onChange={(e) => setSeriesTyped(e.target.value)}
        />
        <input
          type="text"
          value={episodeLength}
          onChange={(e) => setEpisodeLength(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function CurrentSeriesList({ seriesList }) {
  return (
    <div className="curr-series-list-container">
      {seriesList.map((series) => (
        <Series series={series} key={series.name} />
      ))}
    </div>
  );
}

function Series({ series }) {
  return (
    <div className="series-container">
      <p>{series.name}</p>
      <p>X from {series.episodes} episodes</p>
      <div className="btn-container">
        <button>▲</button>
        <button>▼</button>
      </div>
      <button>Delete</button>
    </div>
  );
}
