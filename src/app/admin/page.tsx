"use client";
import { useState } from "react";

export default function AdminSlots() {
  const [date, setDate] = useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    const res = await fetch("/api/slots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date }),
    });

    if (res.ok) {
      alert("✅ Slot added!");
      setDate("");
    } else {
      alert("❌ Failed to add slot");
    }
  };

  return (
    <form onSubmit={handleAdd} className="p-4 mt-20 border rounded-lg">
      <label>Add Available Slot</label>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="block w-full border p-2 mt-2 rounded"
      />
      <button
        type="submit"
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Save Slot
      </button>
    </form>
  );
}
