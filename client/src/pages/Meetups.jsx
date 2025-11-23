import React, { useEffect, useState } from "react";
import { getMeetups } from "../api";
import MeetupCard from "../components/MeetupCard";

export default function Meetups() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    getMeetups().then(setMeetups);
  }, []);

  return (
    <div className="grid gap-6">
      {meetups.map((m) => (
        <MeetupCard key={m.id} m={m} />
      ))}
    </div>
  );
}
