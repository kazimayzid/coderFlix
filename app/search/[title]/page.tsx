import VideoCard from "@/components/VideoCard";
import videos from "@/videos.json";

export default function SearchPage({ params }: { params: { title: string } }) {
  const { title } = params;
  const searchVideo = videos.filter((video) => {
    const searchTerm = title.toLowerCase();

    const titleMatch = video.videoTitle.toLowerCase().includes(searchTerm);
    const categoriesMatch = video.categories.some((category) => {
      category.toLowerCase().includes(searchTerm);
    });
    return titleMatch || categoriesMatch;
  });

  console.log(searchVideo);

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-2">Search Results</h1>
      <p className="text-gray-400 mb-8">
        {searchVideo.length} results for "{title}"
      </p>
      <div
        id="similarVideos"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        aria-live="polite"
      >
        {searchVideo.map((item) => (
          <VideoCard key={item.videoTitle} video={item} />
        ))}
      </div>
    </main>
  );
}
