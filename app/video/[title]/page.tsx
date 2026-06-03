import Primary from "@/components/Primary";
import SimilarVideos from "@/components/SimilarVideos";
import videos from "@/videos.json";
import slugify from "@sindresorhus/slugify";
import { notFound } from "next/navigation";

type Video = {
  videoTitle: string;
};

export default function VideoDetails({
  params,
}: {
  params: { title: string };
}) {
  

  const video = (videos as Video[]).find(
    (item) =>
      slugify(item.videoTitle, {
        lowercase: true,
      }) === params.title,
  );

  if (!video) {
  notFound();
}

  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <Primary video={video}/>
          <SimilarVideos video={video}/>
        </div>
      </div>
    </main>
  );
}
