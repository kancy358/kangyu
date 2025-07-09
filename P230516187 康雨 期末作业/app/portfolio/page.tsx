import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// 定义作品类型
type Assignment = {
  filename: string;
  name: string;
};

// 辅助函数，用于将文件名转换为更易读的标题
function formatAssignmentName(filename: string): string {
  return filename
    .replace('.html', '') // 移除扩展名
    .replace(/[-_]/g, ' ') // 将连字符和下划线替换为空格
    .replace(/\b\w/g, (char) => char.toUpperCase()); // 将每个单词的首字母大写
}

export default function PortfolioPage() {
  // 在服务器端读取 public 目录下的文件
  const assignmentsDirectory = path.join(process.cwd(), 'public', 'assignments');
  let assignments: Assignment[] = [];

  try {
    const filenames = fs.readdirSync(assignmentsDirectory);
    assignments = filenames
      .filter((file) => file.endsWith('.html'))
      .map((filename) => ({
        filename,
        name: formatAssignmentName(filename),
      }));
  } catch (error) {
    console.error('无法读取作品集目录:', error);
    return (
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">我的作品集</h1>
        <p className="text-red-500">加载作品列表时出错，请检查服务器日志。</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#606c38]">我的作品集</h1>
      {assignments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {assignments.map((assignment, index) => (
            <Link key={assignment.filename} href={`/portfolio/${assignment.filename}`}>
              <div className="group block bg-[#fffef4] rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full border-4 border-dashed border-[#dda15e]">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#bc6c25] mb-2 group-hover:text-[#283618]">{assignment.name}</h2>
                  <p className="text-[#606c38]">一个奇思妙想</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-[#fefae0]/80 rounded-lg border-2 border-dashed border-[#dda15e]">
          <h2 className="text-2xl font-bold text-[#bc6c25] mb-4">空空如也的宝箱！</h2>
          <p className="text-lg text-[#606c38]">
            这里还没有作品哦，快去 `public/assignments` 文件夹里塞满你的宝贝吧！
          </p>
        </div>
      )}
    </div>
  );
} 