import { Video } from "@/app/page";
import ChannelProfile from "./ChannelProfile";
import VideoDescription from "./VideoDescription";
import VideoMeta from "./VideoMeta";
import VideoPlayer from "./VideoPlayer";

export default function Primary({video}: {video: Video}) {
    return (
        <section className="lg:col-span-8">
            <VideoPlayer video={video}/>
            <div className="mt-4">
                <VideoMeta video={video}/>
                <ChannelProfile video={video}/>
                <VideoDescription video={video}/>
            </div>
        </section>
    )
}