import { Video } from "@/app/page";
import slugify from "@sindresorhus/slugify";
import Image from "next/image";
import Link from "next/link";

export default function SimilarVideoCard({similarVideo}: {similarVideo: Video}) {
  return (
    <Link
      href={`/video/${slugify(similarVideo.videoTitle, {
        lowercase: true,
      })}`}
      className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
    >
      <div className="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
        <Image
          src={similarVideo.thumbnailURL}
          alt={similarVideo.videoTitle}
          loading="lazy"
          fill
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {similarVideo.duration}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
          {similarVideo.videoTitle}
        </p>
        <p className="text-xs text-gray-400 mt-1 truncate">
          {similarVideo.channelName}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
          <span>{similarVideo.views}</span>
          <span>•</span>
          <span>{similarVideo.publishedDate}</span>
        </div>
      </div>
    </Link>
  );
}
