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
    "في زوم تك، نتفوق بتقديم أنظمة أمان متكاملة ومبتكرة، مصممة بعناية لتمنحك راحة البال، حيث نضع بين يديك تقنيات متقدمة توفر حماية فائقة وسهولة تامة في الاستخدام. نعمل لنكون الشريك الموثوق لكل من يبحث عن أمان مستدام وثقة بلا حدود.",
    "نوفر لك في زوم تك حلولاً شاملة ومُخصصة لتلبية جميع احتياجاتك الأمنية، من الكاميرات ذات الدقة العالية إلى أنظمة الإنذار الذكية. نؤمن بأن الأمان ليس مجرد خيار، بل أساس للحياة اليومية، ونعمل بجد لنحمي ما يهمك.",
    "زوم تك - أكثر من مجرد مزود للحلول الأمنية. نحن شريكك الاستراتيجي في بناء بيئة آمنة ومريحة، حيث نمزج بين الابتكار والتكنولوجيا لضمان أقصى درجات الحماية.",
    "في زوم تك، نسعى لتوفير حلول مراقبة متطورة تجمع بين الأداء التقني العالي والتصميم الذكي، لتأمين ممتلكاتك وحماية أحبائك على مدار الساعة، مع ضمان تجربة استخدام مريحة وسلسة تضع الأمان بين يديك."
  ];


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
