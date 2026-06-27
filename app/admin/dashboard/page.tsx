"use client";

import {
useEffect,
useState,
} from "react";

interface Project {
_id: string;
title: string;
mediaType: "image" | "video";
mediaUrl: string;
}

export default function Dashboard() {
const [title, setTitle] =
useState("");

const [file, setFile] =
useState<File | null>(null);

const [projects, setProjects] =
useState<Project[]>([]);

const API =
process.env.NEXT_PUBLIC_API_URL;

const BACKEND =
API?.replace("/api", "");

const loadProjects =
async () => {
const res =
await fetch(
`${API}/projects`
);


  const data =
    await res.json();

  setProjects(data);
};


useEffect(() => {
loadProjects();
}, []);

const uploadProject =
async () => {
if (!file) return;


  const formData =
    new FormData();

  formData.append(
    "title",
    title
  );

  formData.append(
    "media",
    file
  );

  await fetch(
    `${API}/projects/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  setTitle("");
  setFile(null);

  loadProjects();
};


const deleteProject =
async (id: string) => {
const confirmDelete =
confirm(
"Delete this project?"
);


  if (!confirmDelete)
    return;

  await fetch(
    `${API}/projects/${id}`,
    {
      method: "DELETE",
    }
  );

  loadProjects();
};


return ( <div className="min-h-screen bg-[#0f0f0f] text-white p-10">


  <h1 className="text-5xl font-bold mb-10">
    Admin Dashboard
  </h1>

  <div className="bg-[#171717] p-8 rounded-3xl border border-white/10">

    <h2 className="text-2xl mb-6">
      Upload Project
    </h2>

    <input
      type="text"
      placeholder="Project Title"
      className="w-full p-4 rounded-xl bg-black border border-white/10 mb-4"
      value={title}
      onChange={(e) =>
        setTitle(
          e.target.value
        )
      }
    />

    <input
      type="file"
      className="mb-4"
      onChange={(e) =>
        setFile(
          e.target.files?.[0] ||
            null
        )
      }
    />

    <button
      onClick={
        uploadProject
      }
      className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-semibold"
    >
      Upload
    </button>

  </div>

  <h2 className="text-3xl mt-14 mb-8">
    Uploaded Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {projects.map(
      (item) => (
        <div
          key={item._id}
          className="bg-[#171717] rounded-3xl overflow-hidden border border-white/10"
        >

          {item.mediaType ===
          "image" ? (
            <img
              src={`${BACKEND}/uploads/${item.mediaUrl}`}
              alt={
                item.title
              }
              className="h-72 w-full object-cover"
            />
          ) : (
            <video
              controls
              className="h-72 w-full object-cover"
            >
              <source
                src={`${BACKEND}/uploads/${item.mediaUrl}`}
              />
            </video>
          )}

          <div className="p-5">

            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <button
              onClick={() =>
                deleteProject(
                  item._id
                )
              }
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>

        </div>
      )
    )}

  </div>

</div>


);
}
