import { Video } from "@/app/page";
import Image from "next/image";

export default function ChannelProfile({video}:{video:Video}) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <Image
          id="channelAvatar"
          src={video.channelAvatar}
          alt={video.channelName}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 flex-shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <p id="channelTitle" className="font-medium leading-tight truncate">
            {video.channelName}
          </p>
          <p className="text-xs text-gray-400">Publisher</p>
        </div>
      </div>
    </div>
  );
}
