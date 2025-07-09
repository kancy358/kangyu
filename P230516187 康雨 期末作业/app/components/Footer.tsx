import WakaTimeStats from './WakaTimeStats';

export default function Footer() {
  return (
    <footer className="bg-[#fefae0]/80 text-[#606c38] p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center font-semibold">
        <div className="mb-2">
          <WakaTimeStats />
        </div>
        <p>
          由一只爱吃螺蛳粉的猫和一棵想当咸鱼的香菜联手打造
        </p>
        <p>&copy; {new Date().getFullYear()} - 愿每天都有好心情！</p>
      </div>
    </footer>
  );
} 