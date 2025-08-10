import { VideoText } from "@/components/ui/video-text-props";

export function VideoTextDemo() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <VideoText src="https://cdn.magicui.design/ocean-small.webm">
        Transform
      </VideoText>
    </div>
  );
}
