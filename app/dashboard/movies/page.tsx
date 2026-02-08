import Image from "next/image";

type Movie = {
  id: string;
  primaryTitle: string;
  description: string | null;
  primaryImage: string | null;
  startYear: number | null;
  type: string;
  genres: string[] | null;
};

async function getMovies(): Promise<Movie[]> {
  const res = await fetch(
    "https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000138/titles",
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
        "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data film");
  }

  const raw = await res.json();

  // NORMALISASI DATA
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return raw.map((m: any) => ({
    ...m,
    genres: m.genres ?? [],
  }));
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Filmografi
        </h1>
        <p className="text-gray-500 mt-1">
          Daftar judul film dari IMDb
        </p>
      </div>

      {/* GRID */}
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="group bg-white rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden"
          >
            {/* POSTER */}
            <div className="relative aspect-[2/3] bg-gray-100">
              {movie.primaryImage ? (
                <Image
                  src={movie.primaryImage}
                  alt={movie.primaryTitle}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}

              {/* BADGE TYPE */}
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {movie.type.toUpperCase()}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">
              <h2 className="font-semibold leading-tight line-clamp-2">
                {movie.primaryTitle}
              </h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {movie.description ?? "Deskripsi tidak tersedia."}
              </p>

              {/* META */}
              <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                <span>{movie.startYear ?? "—"}</span>
              </div>

              {/* GENRES */}
              {movie.genres && movie.genres.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {movie.genres.slice(0, 3).map((genres) => (
                    <span
                      key={genres}
                      className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full"
                    >
                      {genres}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
