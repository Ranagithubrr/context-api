import { useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import { NamecontextProvider } from "./contexts/Namecontext";
import { UsercontextProvider } from "./contexts/Usercontext";

function App() {
  const [name, setName] = useState("Rana");

  const Changename = () => {
    setName("Masud");
    console.log('current name is:', name)
  }
  return (
    <div>
      <NamecontextProvider>
        <UsercontextProvider>

          <div className="card w-50 mt-5 m-auto p-2">
            <h3 className="text-center">React Context Api</h3>
            <div className="row">
              <Component1 />             
            </div>
            <button className="btn btn-success" onClick={() => Changename()}>Change Name</button>
          </div>
        </UsercontextProvider>
      </NamecontextProvider>
    </div>
  );
}

export default App;
