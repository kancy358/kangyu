import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center bg-[#fefae0]/80 p-8 rounded-xl shadow-lg border-4 border-dashed border-[#dda15e]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#606c38]">
          欢迎来到螺蛳粉和香菜的世界
        </h1>
        <p className="text-lg text-[#283618] max-w-2xl mx-auto font-semibold">
          这里记录着我们的奇妙冒险和学习成果。
          <br />
          你可以去作品集看看我们的收藏，或者和智能机器人聊聊天！
        </p>
      </div>
    </div>
  );
}
