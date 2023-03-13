import { useState } from "react";

import Aside from "./Components/Aside/Aside";
import Monitor from "./Components/Monitor";

function App() {
  const [selectedMonitor, setSelectedMonitor] = useState("");

  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex p-2">
        <Aside className="w-80 h-screen overflow-auto" onSelect={setSelectedMonitor} />
        {selectedMonitor && (
          <Monitor
            monitorId={selectedMonitor}
            className="w-full overflow-auto"
          />
        )}
      </div>
    </div>
  );
}

export default App;
