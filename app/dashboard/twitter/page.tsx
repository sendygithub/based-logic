"use client";

import Image from "next/image";
import { useState } from "react";

export default function TwitterFollowingPage() {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const res = await fetch(`/api/twitter/?id=${userId}`);
      const json = await res.json();

      const entries =
        json?.data?.user?.result?.timeline?.timeline?.instructions
          ?.find((i: any) => i.type === "TimelineAddEntries")
          ?.entries || [];

      const parsedUsers = entries.map((item: any) => {
        const user = item?.content?.itemContent?.user_results?.result;
        return user;
      }).filter(Boolean);

      setUsers(parsedUsers);
    } catch (err) {
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">
        Twitter Following Viewer
      </h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Masukkan Twitter User ID (contoh: 44196397)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          {loading ? "Loading..." : "Cari"}
        </button>
      </form>

      {/* ERROR */}
      {error && <p className="text-red-500">{error}</p>}

      {/* RESULT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="border rounded p-4 flex gap-3"
          >
            <Image
              src={user.legacy.profile_image_url_https}
              alt={user.legacy.name}
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="font-semibold">
                {user.legacy.name}
              </p>
              <p className="text-sm text-gray-500">
                @{user.legacy.screen_name}
              </p>
              <p className="text-xs mt-1">
                Followers: {user.legacy.followers_count.toLocaleString()}
              </p>
              <p className="text-xs mt-2 text-gray-600 line-clamp-3">
                {user.legacy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
