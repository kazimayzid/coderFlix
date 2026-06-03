import { Video } from "@/app/page";
import SimilarVideoCard from "./SimilarVideoCard";
import videos from "@/videos.json"
export default function SimilarVideos({video}:{video:Video}) {
  const similarVideos = videos.filter((item) => {
    if (item.videoURL === video.videoURL) return false;
    return item.categories.some((category) => video.categories.includes(category))
  })
  console.log(similarVideos);
  
  return (
    <aside className="lg:col-span-4">
      <h2 className="text-base font-medium mb-4">Similar videos</h2>
      <div id="similarVideos" className="space-y-3" aria-live="polite">
        {
          similarVideos.map((similarVideo) => (

            <SimilarVideoCard key={similarVideo.videoTitle} similarVideo={similarVideo}/>
          ))
        }
      </div>
    </aside>
  );
}
