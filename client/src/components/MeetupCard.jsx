import React from "react";
import { Link } from "react-router-dom";

export default function MeetupCard({ m }) {
  return (
    <div className="bg-white glow-card p-6 rounded-xl shadow-xl hover:scale-[1.02] transition">
      <h3 className="text-2xl font-semibold text-purple-700">
        <Link to={`/meetups/${m.id}`}>{m.title}</Link>
      </h3>

      <p className="text-gray-500 mt-1">
        {m.date} | {m.time}
      </p>
      <p className="text-gray-500">{m.venue}</p>

      <p className="mt-4">{m.description}</p>

      <Link
        to={`/meetups/${m.id}`}
        className="text-pink-600 mt-4 inline-block hover:underline"
      >
        View details →
      </Link>
    </div>
  );
}
