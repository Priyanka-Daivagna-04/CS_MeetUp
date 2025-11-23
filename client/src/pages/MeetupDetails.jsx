import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeetup, materialUrl } from "../api";

export default function MeetupDetails() {
  const { id } = useParams();
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    getMeetup(id).then(setMeetup);
  }, [id]);

  if (!meetup) return <p>Loading...</p>;

  // Google Calendar URL Generator
  function toGoogleCalendarURL(meetup) {
    const title = encodeURIComponent(meetup.title);
    const details = encodeURIComponent(meetup.description);
    const location = encodeURIComponent(`${meetup.venue}, ${meetup.location}`);

    const [startTime, endTime] = meetup.time.split("–").map((t) => t.trim());
    const start = new Date(`${meetup.date} ${startTime}`);
    const end = new Date(`${meetup.date} ${endTime}`);

    const format = (d) => d.toISOString().replace(/-|:|\.\d+/g, "");

    return (
      `https://www.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}&dates=${format(start)}/${format(end)}` +
      `&details=${details}&location=${location}`
    );
  }

  return (
    <div className="bg-white glow-card p-8 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-purple-700">{meetup.title}</h2>

      <p className="text-gray-500 mt-2">{meetup.date}</p>
      <p>
        <strong>Time:</strong> {meetup.time}
      </p>
      <p>
        <strong>Venue:</strong> {meetup.venue}
      </p>
      <p>
        <strong>Location:</strong> {meetup.location}
      </p>

      <section className="mt-6">
        <a
          href={toGoogleCalendarURL(meetup)}
          target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg inline-block"
        >
          Add to Google Calendar
        </a>
      </section>

      {/* OBJECTIVES */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-purple-700">
          Learning Objectives
        </h3>
        <ul className="list-disc ml-6 mt-2">
          {meetup.objectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      {/* PREREQUISITES */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-purple-700">Prerequisites</h3>
        <ul className="list-disc ml-6 mt-2">
          {meetup.prerequisites.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      {/* MATERIALS */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-purple-700">
          Materials Provided
        </h3>
        <ul className="list-disc ml-6 mt-2">
          {meetup.materials.map((m, i) => (
            <li key={i}>
              <a
                className="text-pink-600 hover:underline"
                href={materialUrl(m)}
                download
                target="_blank"
              >
                {m}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* STRUCTURE */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-purple-700">Meetup Schedule</h3>
        <ul className="ml-4 mt-2">
          {meetup.structure.map((s, i) => (
            <li key={i}>
              <strong>{s.time}</strong> — {s.activity}
            </li>
          ))}
        </ul>
      </section>

      {/* CONTENT */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-purple-700">Learning Content</h3>
        <ul className="list-disc ml-6 mt-2">
          {meetup.content.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
