// Use Render backend URL in production, localhost in development
const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const getMeetups = () =>
    fetch(`${BASE}/api/meetups`).then((res) => res.json());

export const getMeetup = (id) =>
    fetch(`${BASE}/api/meetups/${id}`).then((res) => res.json());

export const materialUrl = (file) => `${BASE}/materials/${file}`;
