import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {

fetch("/api/hello")
  .then(res => res.json())
  .then(data => setMessage(data.message))
  .then(console.log(message));
  
      
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
