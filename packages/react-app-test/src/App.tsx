import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import fetch from "./fetch";

function App() {
  const [result, setResult] = useState<any>()
  
  useEffect(() => {
    (async () => {
      // const a = await fetch.fetchVocabulary({
      //   schemaName: "Jobs",
      //   fieldName: "JobStatus",
      // });
      // const b = await fetch.fetchUserMetadata({})
      // console.log(a);
      // console.log(b);
      // setResult(a.data.result)
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(result)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
