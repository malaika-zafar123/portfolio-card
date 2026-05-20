import { useState } from "react";

import Card from "./Components/Card";
import EditForm from "./Components/EditForm";

function App() {

  const [showForm, setShowForm] = useState(false);

  const [user, setUser] = useState({
    name: "Malaika Zafar",
    email: "malaika@gmail.com",
    phone: "0300-0000000",
    skills: "React, JavaScript",
    image:
      "https://plus.unsplash.com/premium_photo-1679064458881-76904cf6d1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhpamFiaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  });

  return (

    <div className="
    w-full 
    bg-gradient-to-br
    from-[#0F172A]
    via-[#1E1B4B]
    to-[#312E81]
    flex
    justify-center
    items-center
    p-5
    ">

      {
        showForm
        ? (
          <EditForm
            user={user}
            setUser={setUser}
            setShowForm={setShowForm}
          />
        )
        : (
          <Card
            user={user}
            setShowForm={setShowForm}
          />
        )
      }

    </div>
  );
}

export default App;