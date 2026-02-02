import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Globe, Users, Calendar, Award, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * LGFF Home Page - Single Page Scroll Experience
 * Design Philosophy: Cinematic Minimalism with Spiritual Depth
 * 
 * Sections:
 * 1. Hero - Festival Identification
 * 2. Visual Axis - Festival Imagery
 * 3. Festival Statement - Mission & Vision
 * 4. Call for Submissions - Info Cards
 * 5. Key Dates - Important Timeline
 * 6. Organizer - About & Credits
 * 7. CTA - Action Buttons
 */

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSubmitMenu, setShowSubmitMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-submit-menu]')) {
        setShowSubmitMenu(false);
      }
    };

    if (showSubmitMenu) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showSubmitMenu]);

  return (
    <div className="w-full bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C41E3A] to-[#FF6B6B] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Festival Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#1A1A1A] border border-[#C41E3A]/30 rounded-sm max-w-4xl w-full my-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Lighthouse Film Festival
              </h2>
              <p className="text-xl text-[#C41E3A] font-serif mb-8">
                燈塔影展｜全球基督徒學生劇情長片徵件公告（2026）
              </p>

              {/* Section 1: Festival Position */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">一、影展定位</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>燈塔影展（Lighthouse Gospel Film Festival, LFF）</strong>由臺北基督學院發起，聚焦全球基督徒學生的福音影像創作。本影展致力於鼓勵青年以劇情敘事呈現信仰、盼望、救贖與生命更新的故事，並透過作品交流與策展實踐，培育新世代以影像作見證的創作者。
                </p>
                <p className="text-gray-300 leading-relaxed italic">
                  Lighthouse Film Festival (LFF), initiated by Christ's College Taipei, is a global platform dedicated to gospel-centered narrative feature films created by Christian student filmmakers. We invite stories of faith, hope, redemption, and transformation, and seek to cultivate the next generation of storytellers who bear witness through cinema.
                </p>
              </div>

              {/* Section 2: Submission Categories */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">二、徵件類別（本屆限定）</h3>
                <p className="text-gray-300">
                  <strong>劇情片／劇情長片</strong>（Narrative Feature Film / Fiction）
                </p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• 本屆僅徵選劇情片</li>
                  <li>• 片長規範：20–90 分鐘</li>
                  <li>• 本屆不收：紀錄片、動畫、MV、實驗片</li>
                </ul>
              </div>

              {/* Section 3: Eligibility */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">三、參賽資格（本屆限定）</h3>
                <div>
                  <p className="text-white font-semibold mb-2">中文</p>
                  <ul className="text-gray-300 space-y-2 ml-4">
                    <li>• 限學生身分參賽：報名者須為在學學生（大學、研究所、神學院或同等教育／訓練機構皆可）。</li>
                    <li>• 可個人或團隊報名；若為團隊，導演或主要創作者須具學生身分。</li>
                    <li>• 參賽者需可提供有效學生身分證明（學生證、在學證明或註冊證明等）。</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Themes */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">四、作品主題方向（建議但不設限）</h3>
                <p className="text-gray-300 mb-3">本影展鼓勵作品以福音為核心，呈現以下方向之一或多項：</p>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• 信仰敘事、生命見證、呼召與回應</li>
                  <li>• 盼望、赦免、重建、愛與真理</li>
                  <li>• 青年信仰處境、關係修復、傷痛與醫治</li>
                  <li>• 以基督信仰價值回應世界議題（家庭、正義、饒恕、良善、誠實等）</li>
                </ul>
              </div>

              {/* Section 5: Subtitles */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">五、字幕規則（重要）</h3>
                <p className="text-gray-300">
                  <strong>參賽作品須提供英文字幕（English Subtitles Required）。</strong>
                </p>
                <p className="text-gray-300">
                  若原片語言非英文，請提供可清楚閱讀之英文字幕檔（建議 SRT 格式）或內嵌字幕版本。
                </p>
              </div>

              {/* Section 6: Judging Criteria */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">六、評選重點（評審標準）</h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• 福音核心與價值清晰度</li>
                  <li>• 劇情敘事完整性與角色塑造</li>
                  <li>• 主題深度與情感真實性</li>
                  <li>• 影像語言與整體完成度</li>
                  <li>• 創意與表達風格</li>
                </ul>
              </div>

              {/* Section 7: Deadline */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">七、徵件截止日期</h3>
                <p className="text-[#C41E3A] font-bold text-lg">
                  收件截止：3/31（23:59，GMT+8）
                </p>
                <p className="text-gray-300 italic">
                  Submission Deadline: March 31 (23:59, GMT+8)
                </p>
              </div>

              {/* Section 8: Copyright */}
              <div className="mb-8 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white">八、著作權與授權聲明</h3>
                <p className="text-gray-300 mb-3">
                  參賽者須保證作品為原創或已取得合法授權（含音樂、影像素材、劇本改編等）。
                </p>
                <p className="text-gray-300">
                  參賽者同意主辦單位得於影展推廣、徵件宣傳、入圍公告與成果展示之範圍內，使用作品之片名、劇照、海報、預告片與片段（非商業用途），並註明創作者資訊。
                </p>
              </div>

              {/* Section 9: Organizer */}
              <div className="mb-8 space-y-4 border-t border-white/10 pt-8">
                <h3 className="text-2xl font-serif font-bold text-white">九、主辦單位</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>主辦：</strong>臺北基督學院 Christ's College Taipei</p>
                  <p><strong>影展名稱：</strong>Lighthouse Film Festival (LFF)｜燈塔影展</p>
                  <p><strong>報名費：</strong>免費（Free）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== SECTION 1: HERO - FESTIVAL IDENTIFICATION ===== */}
      <section className="lgff-section min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="lgff-content text-center animate-fade-in-up">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img
              src="/images/lgff-logo.jpg"
              alt="LGFF Logo"
              className="h-32 md:h-48 object-contain animate-light-beam"
            />
          </div>

          {/* Main Title */}
          <h1 className="lgff-title text-5xl md:text-7xl font-serif font-bold mb-6">
            Lighthouse
            <br />
            Film Festival
          </h1>

          {/* Subtitle */}
          <div className="space-y-3 mb-8">
            <p className="text-xl md:text-2xl font-light text-gray-200">
              燈塔影展
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              Global Christian Student Film Festival
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-2 mb-12">
            <p className="text-2xl md:text-3xl font-serif italic text-[#C41E3A]">
              Bearing Witness Through Cinema
            </p>
            <p className="text-xl md:text-2xl font-serif italic text-gray-300">
              以影像，為光作見證
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="lgff-btn inline-flex items-center gap-2 group"
          >
            Explore the Festival
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ===== SECTION 2: VISUAL AXIS - FESTIVAL IMAGERY ===== */}
      <section className="lgff-section relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/call-for-entries-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="lgff-content text-center">
          <div className="space-y-6">
            <h2 className="lgff-title text-5xl md:text-6xl font-serif font-bold">
              CALL FOR ENTRIES
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              2026 徵件年度視覺主圖
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Now Open for Submissions
            </p>

            {/* Decorative Divider */}
            <div className="flex justify-center gap-2 py-8">
              <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
              <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
              <div className="w-2 h-2 bg-[#C41E3A] rounded-full" />
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              夜海風暴中燈塔發光，象徵在世界中持守真理
              <br />
              電影膠片元素暗示影像使命
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FESTIVAL STATEMENT ===== */}
      <section className="lgff-section relative">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/festival-statement-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="lgff-content">
          <h2 className="lgff-title text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Festival Statement
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Chinese Version */}
            <div className="lgff-card">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C41E3A]">
                中文
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-200 font-light">
                燈塔影展（Lighthouse  Film Festival, LFF）由臺北基督學院發起，聚焦全球基督徒學生的劇情影像創作，鼓勵青年以電影敘事回應信仰、盼望、救贖與生命更新。
              </p>
            </div>

            {/* English Version */}
            <div className="lgff-card">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C41E3A]">
                English
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-200 font-light">
                Lighthouse Film Festival (LFF), initiated by Christ's College Taipei , is a global platform for gospel-centered narrative films by Christian students, cultivating a new generation of storytellers who bear witness through cinema.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="lgff-divider mt-12" />
        </div>
      </section>

      {/* ===== SECTION 4: CALL FOR SUBMISSIONS ===== */}
      <section className="lgff-section relative">
        <div className="lgff-content">
          <h2 className="lgff-title text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            徵件資訊
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-400">
              Call for Submissions
            </span>
          </h2>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Film Type */}
            <div className="lgff-card group">
              <div className="flex items-start gap-4">
                <Film className="w-8 h-8 md:w-10 md:h-10 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    🎞 徵件類型
                  </h3>
                  <p className="text-gray-300 font-light">
                    <strong>劇情片</strong> (Narrative Fiction Only)
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    片長：20–90 分鐘
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Eligibility */}
            <div className="lgff-card group">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    🎓 參賽資格
                  </h3>
                  <p className="text-gray-300 font-light">
                    全球在學學生
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    大學 / 研究所 / 神學院
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Themes */}
            <div className="lgff-card group">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    🌍 主題方向
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    信仰、盼望、救贖、生命轉化、愛與真理
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Subtitles */}
            <div className="lgff-card group">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                    🌐 字幕要求
                  </h3>
                  <p className="text-gray-300 font-light">
                    所有影片須提供 <strong>英文字幕</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lgff-divider mt-12" />
        </div>
      </section>

      {/* ===== SECTION 5: KEY DATES ===== */}
      <section className="lgff-section relative">
        <div className="lgff-content">
          <h2 className="lgff-title text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            重要日期
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-400">
              Key Dates
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {/* Submission Deadline */}
            <div className="lgff-card">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">
                    徵件截止
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-[#C41E3A]">
                    March 31, 2026
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    23:59 (GMT+8)
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Fee */}
            <div className="lgff-card">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">
                    報名費用
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif font-bold text-[#C41E3A]">
                    免費
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Free Submission
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lgff-divider mt-12" />
        </div>
      </section>

      {/* ===== SECTION 6: ORGANIZER ===== */}
      <section className="lgff-section relative">
        <div className="lgff-content text-center">
          <h2 className="lgff-title text-4xl md:text-5xl font-serif font-bold mb-8">
            主辦單位
            <br />
            <span className="text-2xl md:text-3xl font-light text-gray-400">
              Organizer
            </span>
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="lgff-card">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#C41E3A] mb-4">
                臺北基督學院
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Christ's College Taipei
              </p>
            </div>

            <div className="space-y-3 text-gray-400">
              <p className="text-lg">
                <strong className="text-white">影展名稱：</strong>
              </p>
              <p className="text-lg md:text-xl font-serif">
                Lighthouse Film Festival (LFF)
              </p>
            </div>
          </div>

          <div className="lgff-divider mt-12" />
        </div>
      </section>

      {/* ===== SECTION 7: CTA - ACTION BUTTONS ===== */}
      <section className="lgff-section relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/cta-section-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="lgff-content text-center">
          <h2 className="lgff-title text-4xl md:text-6xl font-serif font-bold mb-8">
            準備好了嗎？
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
            讓你的影像，成為燈塔之光
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center relative" data-submit-menu>
            <div className="relative inline-block">
              <button
                onClick={() => setShowSubmitMenu(!showSubmitMenu)}
                className="lgff-btn group inline-flex items-center gap-2"
              >
                Submit Your Film
                <ChevronDown className="w-5 h-5 transition-transform" style={{ transform: showSubmitMenu ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>

              {/* Dropdown Menu */}
              {showSubmitMenu && (
                <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 bg-[#1A1A1A] border border-[#C41E3A]/50 rounded-sm shadow-2xl z-10 min-w-max overflow-hidden">
                  <button
                    onClick={() => {
                      setShowSubmitMenu(false);
                      // Handle YouTube/Vimeo submission
                    }}
                    className="w-full text-left px-6 py-4 text-gray-200 hover:bg-[#C41E3A]/20 hover:text-white transition-colors border-b border-[#C41E3A]/20"
                  >
                    <div className="font-semibold">YouTube/Vimeo 私密鏈接</div>
                    <div className="text-xs text-gray-400 mt-1">上傳至影片平台並提供私密連結</div>
                  </button>
                  <button
                    onClick={() => {
                      setShowSubmitMenu(false);
                      // Handle Google Drive submission
                    }}
                    className="w-full text-left px-6 py-4 text-gray-200 hover:bg-[#C41E3A]/20 hover:text-white transition-colors"
                  >
                    <div className="font-semibold">Google Drive 鏈接</div>
                    <div className="text-xs text-gray-400 mt-1">上傳至 Google Drive 並分享連結</div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm md:text-base">
              © 2026 Lighthouse  Film Festival. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Initiated by Christ's College Taipei| 由臺北基督學院發起
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
