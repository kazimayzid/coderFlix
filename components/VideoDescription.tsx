import { Video } from "@/app/page";

export default function VideoDescription({video} : {video:Video}) {
  return (
    <div className="mt-4">
      <div className="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
        <p
          id="videoDescription"
          className="text-sm text-gray-200 whitespace-pre-line line-clamp-3"
        >
          {video.description}
        </p>
        <button
          id="toggleDescription"
          className="mt-3 text-sm font-medium text-gray-300 hover:text-white"
          type="button"
        >
          Show more
        </button>
      </div>
    </div>
  );
}
