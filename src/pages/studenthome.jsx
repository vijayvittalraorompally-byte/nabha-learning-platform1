import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function StudentHome() {
  const [modules, setModules] = useState([]);

  async function fetchModules() {
    let { data } = await supabase.from("modules").select("*");
    setModules(data || []);
  }

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Student Dashboard</h2>
      <ul>
        {modules.map((m) => (
          <li key={m.id} className="border p-2 my-2">
            <h3 className="font-semibold">{m.title}</h3>
            <p>{m.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentHome;
