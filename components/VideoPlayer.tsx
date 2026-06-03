import { Video } from "@/app/page";

type VideoPlayerProps = {
  video: Video;
};

function getEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get("v");
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function VideoPlayer({video}: VideoPlayerProps) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
      <iframe
        id="videoPlayer"
        className="w-full h-full"
        title={video.videoTitle}
        src={getEmbedUrl(video.videoURL)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen=""
      ></iframe>
    </div>
  );
}
