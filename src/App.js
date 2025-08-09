import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Old: calling full backend URL
// fetch("https://demoweabapp-dccjdxazfabfdqhv.canadacentral-01.azurewebsites.net/api/hello")

// New: call relative path
fetch("/api/")
  .then(res => res.json())
  .then(data => setMessage(data.message));

      
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
