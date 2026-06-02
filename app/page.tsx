import VideoCard from "@/components/VideoCard";
import videosData from "@/videos.json"


export interface Video {
  videoTitle: string;
  views: string;
  publishedDate: string;
  videoURL: string;
  channelName: string;
  channelAvatar: string;
  likes: number;
  dislikes: number;
  thumbnailURL: string;
  categories: string[];
  description: string;
  duration: string;
}
export default function Home() {
  const videos = videosData as Video[]
  
  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
         {
          videos.map((video) => (
            <VideoCard key={video.videoTitle} video={video}/>
          ))
         }
      </div>
    </main>
  );
}
