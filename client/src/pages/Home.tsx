import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Globe, Users, Calendar, Award } from "lucide-react";
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

  return (
    <div className="w-full bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C41E3A] to-[#FF6B6B] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

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
            Lighthouse Gospel
            <br />
            Film Festival
          </h1>

          {/* Subtitle */}
          <div className="space-y-3 mb-8">
            <p className="text-xl md:text-2xl font-light text-gray-200">
              燈塔福音影展
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
          <button className="lgff-btn inline-flex items-center gap-2 group">
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
                燈塔福音影展（Lighthouse Gospel Film Festival, LGFF）由臺北基督學院發起，聚焦全球基督徒學生的劇情影像創作，鼓勵青年以電影敘事回應信仰、盼望、救贖與生命更新。
              </p>
            </div>

            {/* English Version */}
            <div className="lgff-card">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-[#C41E3A]">
                English
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-200 font-light">
                Lighthouse Gospel Film Festival (LGFF), initiated by Taipei Christian College, is a global platform for gospel-centered narrative films by Christian students, cultivating a new generation of storytellers who bear witness through cinema.
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
                Taipei Christian College
              </p>
            </div>

            <div className="space-y-3 text-gray-400">
              <p className="text-lg">
                <strong className="text-white">影展名稱：</strong>
              </p>
              <p className="text-lg md:text-xl font-serif">
                Lighthouse Gospel Film Festival (LGFF)
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
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="lgff-btn group inline-flex items-center gap-2">
              Submit Your Film
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="lgff-btn-outline inline-flex items-center gap-2">
              Join the Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm md:text-base">
              © 2026 Lighthouse Gospel Film Festival. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Initiated by Taipei Christian College | 由臺北基督學院發起
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
