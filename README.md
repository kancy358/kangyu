<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>剪纸非遗文化 | 传承千年的艺术</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <script>
    // 配置Tailwind自定义主题
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'paper-red': '#8B0000',
            'paper-red-light': '#A52A2A',
            'paper-red-dark': '#6d0000',
            'paper-gold': '#D4AF37',
            'paper-beige': '#F5F5DC',
          },
          fontFamily: {
            'song': ['SimSun', 'STSong', 'serif'],
            'kai': ['KaiTi', 'STKaiti', 'serif']
          },
        },
      }
    }
  </script>
  <style type="text/tailwindcss">
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
      .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      .paper-cut {
        clip-path: polygon(
          0% 5%, 5% 0%, 95% 0%, 100% 5%, 
          100% 95%, 95% 100%, 5% 100%, 0% 95%
        );
      }
      .scroll-reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      .scroll-reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
      .cut-border {
        position: relative;
      }
      .cut-border::after {
        content: '';
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        pointer-events: none;
      }
    }
  </style>
</head>
<body class="bg-paper-beige text-gray-800 font-song">
  <!-- 导航栏 -->
  <nav id="main-nav" class="fixed w-full z-50 transition-all duration-300 bg-transparent">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-paper-red paper-cut flex items-center justify-center">
          <i class="fa fa-scissors text-white text-xl"></i>
        </div>
        <span class="text-2xl font-kai font-bold text-white text-shadow">剪纸非遗</span>
      </a>
      
      <!-- 桌面导航 -->
      <div class="hidden md:flex space-x-8">
        <a href="#about" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg">关于剪纸</a>
        <a href="#types" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg">剪纸种类</a>
        <a href="#process" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg">工艺流程</a>
        <a href="#works" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg">代表作品</a>
        <a href="#inheritor" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg">传承人</a>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <button id="menu-toggle" class="md:hidden text-white text-2xl">
        <i class="fa fa-bars"></i>
      </button>
    </div>
    
    <!-- 移动端导航菜单 -->
    <div id="mobile-menu" class="md:hidden bg-paper-red-dark hidden">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <a href="#about" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg py-2 border-b border-paper-red-light">关于剪纸</a>
        <a href="#types" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg py-2 border-b border-paper-red-light">剪纸种类</a>
        <a href="#process" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg py-2 border-b border-paper-red-light">工艺流程</a>
        <a href="#works" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg py-2 border-b border-paper-red-light">代表作品</a>
        <a href="#inheritor" class="text-white hover:text-paper-gold transition-colors duration-300 font-kai text-lg py-2">传承人</a>
      </div>
    </div>
  </nav>

  <!-- 英雄区域 -->
  <header class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="https://picsum.photos/id/152/1920/1080" alt="剪纸艺术背景" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-paper-red/60"></div>
      
      <!-- 剪纸装饰元素 -->
      <div class="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-70 animate-pulse hidden md:block">
        <img src="https://picsum.photos/id/104/200/200" alt="剪纸装饰" class="w-full h-full object-contain">
      </div>
      <div class="absolute bottom-20 right-10 w-32 h-32 md:w-48 md:h-48 opacity-70 animate-pulse delay-700 hidden md:block">
        <img src="https://picsum.photos/id/106/200/200" alt="剪纸装饰" class="w-full h-full object-contain">
      </div>
    </div>
    
    <div class="container mx-auto px-4 z-10 text-center">
      <h1 class="text-[clamp(2.5rem,8vw,5rem)] font-kai font-bold text-white mb-6 leading-tight text-shadow">
        剪纸艺术<br>千年非遗传承
      </h1>
      <p class="text-[clamp(1rem,3vw,1.5rem)] text-white/90 max-w-2xl mx-auto mb-10 text-shadow">
        一把剪刀，一张红纸，剪出大千世界，传承中华文化
      </p>
      <a href="#about" class="inline-block bg-white text-paper-red hover:bg-paper-gold hover:text-white transition-all duration-300 font-kai text-lg px-8 py-3 rounded-sm paper-cut">
        了解更多 <i class="fa fa-arrow-down ml-2"></i>
      </a>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <i class="fa fa-angle-down text-3xl"></i>
    </div>
  </header>

  <!-- 关于剪纸 -->
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold text-paper-red mb-4">关于剪纸非遗</h2>
        <div class="w-32 h-1 bg-paper-red mx-auto"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 scroll-reveal">
          <div class="paper-cut bg-paper-red p-1">
            <img src="https://picsum.photos/id/175/800/600" alt="剪纸艺术" class="w-full h-auto paper-cut">
          </div>
        </div>
        
        <div class="md:w-1/2 scroll-reveal">
          <h3 class="text-2xl font-kai font-bold text-paper-red-dark mb-6">剪纸：指尖上的非遗艺术</h3>
          <p class="text-lg mb-6 leading-relaxed">
            剪纸是中国最古老的民间艺术之一，距今已有两千多年历史。它以剪刀或刻刀为工具，在纸上剪刻出各种精美图案，寄托着人们对美好生活的向往。
          </p>
          <p class="text-lg mb-6 leading-relaxed">
            2006年，剪纸艺术经国务院批准列入第一批国家级非物质文化遗产名录。2009年，中国剪纸入选联合国教科文组织"人类非物质文化遗产代表作名录"。
          </p>
          <p class="text-lg leading-relaxed">
            剪纸不仅是一种民间艺术，更是中华民族文化的重要载体，反映了不同历史时期的社会生活和民俗风情，具有极高的历史、文化和艺术价值。
          </p>
          
          <div class="mt-8 flex items-center space-x-4">
            <div class="w-1 h-12 bg-paper-red"></div>
            <p class="italic text-gray-600">"一把剪刀，一张红纸，剪出了人间百态，传承了千年文化。"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 剪纸种类 -->
  <section id="types" class="py-20 bg-paper-red text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold mb-4">剪纸种类</h2>
        <div class="w-32 h-1 bg-white mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-white/80">中国剪纸艺术流派众多，各具特色，反映了不同地域的文化传统和审美情趣</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 种类1 -->
        <div class="bg-white/10 p-6 rounded-sm cut-border hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
          <div class="h-48 mb-6 overflow-hidden paper-cut">
            <img src="https://picsum.photos/id/116/600/400" alt="北方剪纸" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-kai font-bold mb-3">北方剪纸</h3>
          <p class="text-white/80">以河北、山西、陕西为代表，风格粗犷豪放，造型简练，线条刚劲有力，多表现戏曲人物、民间故事等题材。</p>
        </div>
        
        <!-- 种类2 -->
        <div class="bg-white/10 p-6 rounded-sm cut-border hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 100ms;">
          <div class="h-48 mb-6 overflow-hidden paper-cut">
            <img src="https://picsum.photos/id/122/600/400" alt="南方剪纸" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-kai font-bold mb-3">南方剪纸</h3>
          <p class="text-white/80">以江苏、浙江、广东为代表，风格细腻秀丽，造型精巧，线条流畅，多表现花鸟鱼虫、吉祥图案等题材。</p>
        </div>
        
        <!-- 种类3 -->
        <div class="bg-white/10 p-6 rounded-sm cut-border hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 200ms;">
          <div class="h-48 mb-6 overflow-hidden paper-cut">
            <img src="https://picsum.photos/id/133/600/400" alt="民俗剪纸" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-2xl font-kai font-bold mb-3">民俗剪纸</h3>
          <p class="text-white/80">与传统节日和民俗活动紧密相关，如春节窗花、婚庆喜字等，寓意吉祥如意，表达了人们对美好生活的向往。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 工艺流程 -->
  <section id="process" class="py-20 bg-paper-beige">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold text-paper-red mb-4">剪纸工艺流程</h2>
        <div class="w-32 h-1 bg-paper-red mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-gray-600">剪纸看似简单，实则需要精湛的技艺和深厚的文化底蕴，每一步都凝聚着匠人的心血</p>
      </div>
      
      <div class="relative">
        <!-- 流程线 -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-paper-red/30 transform -translate-x-1/2"></div>
        
        <!-- 步骤1 -->
        <div class="flex flex-col md:flex-row items-center mb-16 scroll-reveal">
          <div class="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
            <h3 class="text-2xl font-kai font-bold text-paper-red-dark mb-4">选纸与构思</h3>
            <p class="text-gray-700 leading-relaxed">
              根据创作需求选择合适的纸张，通常为红色宣纸或棉纸。然后构思图案，剪纸艺人凭借丰富的经验，在脑海中形成完整的构图。
            </p>
          </div>
          
          <div class="md:w-12 relative z-10 mb-8 md:mb-0">
            <div class="w-10 h-10 rounded-full bg-paper-red text-white flex items-center justify-center mx-auto shadow-lg">
              <span class="font-bold">1</span>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-12 md:order-2">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/145/600/400" alt="选纸与构思" class="w-full h-auto">
            </div>
          </div>
        </div>
        
        <!-- 步骤2 -->
        <div class="flex flex-col md:flex-row items-center mb-16 scroll-reveal">
          <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/160/600/400" alt="起稿与装订" class="w-full h-auto">
            </div>
          </div>
          
          <div class="md:w-12 relative z-10 mb-8 md:mb-0">
            <div class="w-10 h-10 rounded-full bg-paper-red text-white flex items-center justify-center mx-auto shadow-lg">
              <span class="font-bold">2</span>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-12">
            <h3 class="text-2xl font-kai font-bold text-paper-red-dark mb-4">起稿与装订</h3>
            <p class="text-gray-700 leading-relaxed">
              将构思好的图案轻轻画在纸上，或直接在脑海中形成图案。然后将多张纸整齐叠放，用针线或订书机固定，便于批量剪裁。
            </p>
          </div>
        </div>
        
        <!-- 步骤3 -->
        <div class="flex flex-col md:flex-row items-center mb-16 scroll-reveal">
          <div class="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
            <h3 class="text-2xl font-kai font-bold text-paper-red-dark mb-4">剪刻成型</h3>
            <p class="text-gray-700 leading-relaxed">
              这是剪纸最关键的一步，艺人运用各种剪刻技巧，按照图案从内到外、从小到大逐步剪刻。剪刀在艺人手中灵活运转，线条流畅自然。
            </p>
          </div>
          
          <div class="md:w-12 relative z-10 mb-8 md:mb-0">
            <div class="w-10 h-10 rounded-full bg-paper-red text-white flex items-center justify-center mx-auto shadow-lg">
              <span class="font-bold">3</span>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-12 md:order-2">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/177/600/400" alt="剪刻成型" class="w-full h-auto">
            </div>
          </div>
        </div>
        
        <!-- 步骤4 -->
        <div class="flex flex-col md:flex-row items-center scroll-reveal">
          <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/180/600/400" alt="整理与装裱" class="w-full h-auto">
            </div>
          </div>
          
          <div class="md:w-12 relative z-10 mb-8 md:mb-0">
            <div class="w-10 h-10 rounded-full bg-paper-red text-white flex items-center justify-center mx-auto shadow-lg">
              <span class="font-bold">4</span>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-12">
            <h3 class="text-2xl font-kai font-bold text-paper-red-dark mb-4">整理与装裱</h3>
            <p class="text-gray-700 leading-relaxed">
              剪刻完成后，将作品轻轻展开，仔细整理。对于重要作品，还需要进行装裱，以保护作品并增强其观赏效果，便于收藏和展示。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 代表作品 -->
  <section id="works" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold text-paper-red mb-4">代表作品</h2>
        <div class="w-32 h-1 bg-paper-red mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-gray-600">千百年来，剪纸艺人们创作了无数精美的作品，这些作品不仅是艺术的展现，更是文化的传承</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- 作品1 -->
        <div class="group scroll-reveal">
          <div class="aspect-square overflow-hidden paper-cut mb-4">
            <img src="https://picsum.photos/id/192/600/600" alt="剪纸作品" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-lg font-kai font-bold text-paper-red-dark">《连年有余》</h3>
          <p class="text-gray-600 text-sm">传统吉祥图案，寓意年年有余，生活富足</p>
        </div>
        
        <!-- 作品2 -->
        <div class="group scroll-reveal" style="transition-delay: 100ms;">
          <div class="aspect-square overflow-hidden paper-cut mb-4">
            <img src="https://picsum.photos/id/193/600/600" alt="剪纸作品" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-lg font-kai font-bold text-paper-red-dark">《百鸟朝凤》</h3>
          <p class="text-gray-600 text-sm">经典题材，展现了凤凰的高贵与百鸟的和谐</p>
        </div>
        
        <!-- 作品3 -->
        <div class="group scroll-reveal" style="transition-delay: 200ms;">
          <div class="aspect-square overflow-hidden paper-cut mb-4">
            <img src="https://picsum.photos/id/194/600/600" alt="剪纸作品" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-lg font-kai font-bold text-paper-red-dark">《八仙过海》</h3>
          <p class="text-gray-600 text-sm">以神话故事为题材，展现了民间对美好生活的向往</p>
        </div>
        
        <!-- 作品4 -->
        <div class="group scroll-reveal" style="transition-delay: 300ms;">
          <div class="aspect-square overflow-hidden paper-cut mb-4">
            <img src="https://picsum.photos/id/195/600/600" alt="剪纸作品" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          <h3 class="text-lg font-kai font-bold text-paper-red-dark">《清明上河图》</h3>
          <p class="text-gray-600 text-sm">根据古画创作，展现了古代市井生活的繁华景象</p>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button class="bg-paper-red text-white hover:bg-paper-red-dark transition-colors duration-300 font-kai px-6 py-3 paper-cut">
          查看更多作品 <i class="fa fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- 传承人 -->
  <section id="inheritor" class="py-20 bg-paper-red text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 scroll-reveal">
        <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold mb-4">剪纸传承人</h2>
        <div class="w-32 h-1 bg-white mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-white/80">正是这些默默坚守的传承人，让剪纸艺术得以延续和发展，焕发出新的生机</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- 传承人1 -->
        <div class="flex flex-col md:flex-row bg-white/10 p-6 rounded-sm cut-border hover:bg-white/20 transition-all duration-300 scroll-reveal">
          <div class="md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/64/400/500" alt="传承人" class="w-full h-auto">
            </div>
          </div>
          
          <div class="md:w-2/3">
            <h3 class="text-2xl font-kai font-bold mb-2">李芳清</h3>
            <p class="text-paper-gold mb-4">国家级非物质文化遗产传承人</p>
            <p class="text-white/80 mb-4 leading-relaxed">
              李芳清从事剪纸艺术60余年，师从剪纸大师王秀清，擅长传统吉祥图案和民俗题材的创作，其作品线条流畅，造型生动，多次在国内外展览中获奖。
            </p>
            <p class="text-white/80 leading-relaxed">
              近年来，李老致力于剪纸艺术的传承与教学，培养了数百名弟子，出版了多部剪纸技艺著作，为剪纸艺术的传承和发展做出了重要贡献。
            </p>
          </div>
        </div>
        
        <!-- 传承人2 -->
        <div class="flex flex-col md:flex-row bg-white/10 p-6 rounded-sm cut-border hover:bg-white/20 transition-all duration-300 scroll-reveal" style="transition-delay: 200ms;">
          <div class="md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <div class="paper-cut overflow-hidden">
              <img src="https://picsum.photos/id/65/400/500" alt="传承人" class="w-full h-auto">
            </div>
          </div>
          
          <div class="md:w-2/3">
            <h3 class="text-2xl font-kai font-bold mb-2">张明远</h3>
            <p class="text-paper-gold mb-4">省级非物质文化遗产传承人</p>
            <p class="text-white/80 mb-4 leading-relaxed">
              张明远是年轻一代剪纸艺术的代表人物，他在继承传统剪纸技艺的基础上，融入现代设计理念，创作出许多具有时代特色的剪纸作品。
            </p>
            <p class="text-white/80 leading-relaxed">
              他利用新媒体平台推广剪纸艺术，开设线上课程，让更多年轻人了解和喜爱这门传统艺术。其作品《丝路风情》获得中国民间艺术最高奖"山花奖"。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 体验与联系 -->
  <section class="py-20 bg-paper-beige">
    <div class="container mx-auto px-4">
      <div class="bg-white p-8 md:p-12 rounded-sm shadow-lg max-w-4xl mx-auto scroll-reveal">
        <div class="text-center mb-10">
          <h2 class="text-[clamp(1.8rem,5vw,3rem)] font-kai font-bold text-paper-red mb-4">体验剪纸艺术</h2>
          <div class="w-32 h-1 bg-paper-red mx-auto"></div>
          <p class="mt-6 text-gray-600">亲手体验剪纸的乐趣，感受非遗文化的魅力，让传统艺术走进现代生活</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-kai font-bold text-paper-red-dark mb-4">剪纸工作坊</h3>
            <p class="text-gray-700 mb-6">
              定期举办剪纸体验课程，由非遗传承人手把手教学，适合各年龄段参与，让您在轻松愉快的氛围中学习剪纸技艺。
            </p>
            
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <i class="fa fa-calendar text-paper-red mr-3"></i>
                <span>每周六、周日 10:00-16:00</span>
              </div>
              <div class="flex items-center">
                <i class="fa fa-map-marker text-paper-red mr-3"></i>
                <span>非遗文化体验馆，北京市东城区</span>
              </div>
              <div class="flex items-center">
                <i class="fa fa-phone text-paper-red mr-3"></i>
                <span>010-12345678</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-kai font-bold text-paper-red-dark mb-4">预约体验</h3>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-700 mb-2" for="name">姓名</label>
                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 focus:border-paper-red focus:outline-none" placeholder="请输入您的姓名">
              </div>
              
              <div>
                <label class="block text-gray-700 mb-2" for="phone">电话</label>
                <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 focus:border-paper-red focus:outline-none" placeholder="请输入您的电话">
              </div>
              
              <div>
                <label class="block text-gray-700 mb-2" for="date">预约日期</label>
                <input type="date" id="date" class="w-full px-4 py-2 border border-gray-300 focus:border-paper-red focus:outline-none">
              </div>
              
              <button type="submit" class="w-full bg-paper-red text-white hover:bg-paper-red-dark transition-colors duration-300 font-kai py-3 paper-cut">
                提交预约
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 页脚 -->
  <footer class="bg-paper-red-dark text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-white paper-cut flex items-center justify-center">
              <i class="fa fa-scissors text-paper-red text-xl"></i>
            </div>
            <span class="text-2xl font-kai font-bold">剪纸非遗</span>
          </div>
          <p class="text-white/70">
            传承千年剪纸艺术，弘扬中华非遗文化，让传统与现代交融，让艺术走进生活。
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-kai font-bold mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li><a href="#about" class="text-white/70 hover:text-white transition-colors duration-300">关于剪纸</a></li>
            <li><a href="#types" class="text-white/70 hover:text-white transition-colors duration-300">剪纸种类</a></li>
            <li><a href="#process" class="text-white/70 hover:text-white transition-colors duration-300">工艺流程</a></li>
            <li><a href="#works" class="text-white/70 hover:text-white transition-colors duration-300">代表作品</a></li>
            <li><a href="#inheritor" class="text-white/70 hover:text-white transition-colors duration-300">传承人</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-kai font-bold mb-4">联系我们</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fa fa-map-marker text-paper-gold mr-3"></i>
              <span class="text-white/70">北京市东城区非遗文化街123号</span>
            </li>
            <li class="flex items-center">
              <i class="fa fa-phone text-paper-gold mr-3"></i>
              <span class="text-white/70">010-12345678</span>
            </li>
            <li class="flex items-center">
              <i class="fa fa-envelope text-paper-gold mr-3"></i>
              <span class="text-white/70">info@jianzhi.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-kai font-bold mb-4">关注我们</h3>
          <p class="text-white/70 mb-4">关注我们的社交媒体，了解更多剪纸文化资讯</p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-paper-gold transition-colors duration-300 flex items-center justify-center">
              <i class="fa fa-weixin text-xl"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-paper-gold transition-colors duration-300 flex items-center justify-center">
              <i class="fa fa-weibo text-xl"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-paper-gold transition-colors duration-300 flex items-center justify-center">
              <i class="fa fa-instagram text-xl"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/10 hover:bg-paper-gold transition-colors duration-300 flex items-center justify-center">
              <i class="fa fa-youtube-play text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
        <p>© 2023 剪纸非遗文化网 版权所有 | 京ICP备12345678号</p>
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <script>
    // 导航栏滚动效果
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('bg-paper-red-dark', 'shadow-md');
        nav.classList.remove('bg-transparent');
      } else {
        nav.classList.remove('bg-paper-red-dark', 'shadow-md');
        nav.classList.add('bg-transparent');
      }
    });
    
    // 移动端菜单
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 关闭移动菜单（如果打开）
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          const icon = menuToggle.querySelector('i');
          icon.classList.replace('fa-times', 'fa-bars');
        }
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // 滚动显示动画
    function checkScroll() {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    
    // 初始检查
    window.addEventListener('load', checkScroll);
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
  </script>
</body>
</html>
