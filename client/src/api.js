// HARDCODED BACKEND URL (Render)
const BASE = "https://cs-meetup.onrender.com";

export const getMeetups = () =>
    fetch(`${BASE}/api/meetups`).then((res) => res.json());

export const getMeetup = (id) =>
    fetch(`${BASE}/api/meetups/${id}`).then((res) => res.json());

export const materialUrl = (file) => `${BASE}/materials/${file}`;