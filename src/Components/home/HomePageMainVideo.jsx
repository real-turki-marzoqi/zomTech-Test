import { useRef, useState } from "react";
import Video1 from "../../videos/homePageFirstVideo.mp4";
import video4 from "../../videos/homePage2.mp4";
import video3 from "../../videos/homePageSecondVideo.mp4";
import video2 from "../../videos/homePage4.mp4";


const HomePageMainVideo = () => {
  const videoRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [Video1, video2, video3, video4];
  const texts = [
    "نوفر في زوم تك أنظمة أمان مبتكرة تجمع بين الجودة العالية وسهولة الاستخدام، لنكون الخيار الأول لكل من يبحث عن الحماية المثلى",
    " نوفر لك في زوم تك حلولاً متكاملة للأمان، تجمع بين الكاميرات المتطورة وأنظمة الإنذار الذكية لتلبية احتياجاتك الأمنية المتنوعة",
    " زوم تك - شريكك في الحماية والأمان",
    " في زوم تك، نقدم حلول مراقبة متطورة تجمع بين التقنية الحديثة وسهولة الاستخدام، لضمان حماية شاملة لممتلكاتك وأحبائك على مدار الساعة.",
  ]; // النصوص التي ستظهر على الفيديوهات

  const handleVideoEnd = () => {
    const nextIndex = videoIndex + 1;
    if (nextIndex < videos.length) {
      setVideoIndex(nextIndex);
    } else {
      setVideoIndex(0);
    }
  };

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        key={videoIndex}
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video>

      <div className="text-overlay">
        {texts[videoIndex]} {/* عرض النص المقابل لكل فيديو */}
      </div>
    </div>
  );
};

export default HomePageMainVideo;
