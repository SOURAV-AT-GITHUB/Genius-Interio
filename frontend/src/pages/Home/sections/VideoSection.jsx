export default function VideoSection() {
  return (
    <section className="relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-[450px] object-cover"
        poster="https://static.vecteezy.com/system/resources/thumbnails/040/567/392/large/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.jpg"
        data-video-player-target="player"
        data-poster="https://static.vecteezy.com/system/resources/thumbnails/040/567/392/large/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.jpg"
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/040/567/392/mp4/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.mp4"
          type="video/mp4"
        />
        <source
          src="https://static.vecteezy.com/system/resources/previews/040/567/392/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.webm"
          type="video/webm"
        />
      </video>
      <div className="flex items-center justify-between relative w-[90%] m-auto  p-4 lg:px-16 lg:py-6 ">
        <div>
          <h4 className="md:text-3xl lg:text-5xl font-semibold">5K+</h4>
          <p className="text-sm">Complete Projects</p>
        </div>
        <div>
          <h4 className="md:text-3xl lg:text-5xl font-semibold">60+</h4>
          <p className="text-sm">Team Members</p>
        </div>
        <div>
          <h4 className="md:text-3xl lg:text-5xl font-semibold">10+</h4>
          <p className="text-sm">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
