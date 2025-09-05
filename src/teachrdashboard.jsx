import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function TeacherDashboard() {
  const [modules, setModules] = useState([]);
  const [title, setTitle] = useState("");

  async function fetchModules() {
    let { data } = await supabase.from("modules").select("*");
    setModules(data || []);
  }

  async function addModule() {
    const user = await supabase.auth.getUser();
    await supabase.from("modules").insert([{ title, teacher_id: user.data.user.id }]);
    setTitle("");
    fetchModules();
  }

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold">Teacher Dashboard</h2>
      <input
        className="border p-1 mr-2"
        placeholder="Module Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={addModule}>
        Add Module
      </button>
      <ul className="mt-4">
        {modules.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherDashboard;
