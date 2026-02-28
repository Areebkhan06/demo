export default function Home() {
  const stats = [
    {
      value: "500+",
      label: "Active Students",
      icon: (
        // Users icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 fill-blue-600">
          <path d="M320 320C390.7 320 448 262.7 448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320zM160 352C71.6 352 0 423.6 0 512C0 530.7 15.3 546 34 546L606 546C624.7 546 640 530.7 640 512C640 423.6 568.4 352 480 352L160 352z"/>
        </svg>
      ),
    },
    {
      value: "50+",
      label: "Subjects Covered",
      icon: (
        // Book icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 fill-blue-600">
          <path d="M96 64C60.7 64 32 92.7 32 128L32 512C32 547.3 60.7 576 96 576L544 576C579.3 576 608 547.3 608 512L608 128C608 92.7 579.3 64 544 64L96 64zM160 160L480 160L480 224L160 224L160 160z"/>
        </svg>
      ),
    },
    {
      value: "95%",
      label: "Success Rate",
      icon: (
        // Trophy icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 fill-blue-600">
          <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9z"/>
        </svg>
      ),
    },
    {
      value: "1000+",
      label: "Quizzes Completed",
      icon: (
        // Clipboard icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 fill-blue-600">
          <path d="M192 64C174.3 64 160 78.3 160 96L160 128L128 128C92.7 128 64 156.7 64 192L64 544C64 579.3 92.7 608 128 608L512 608C547.3 608 576 579.3 576 544L576 192C576 156.7 547.3 128 512 128L480 128L480 96C480 78.3 465.7 64 448 64L192 64zM224 224L416 224L416 288L224 288L224 224z"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2.5 font-bold text-lg text-slate-900">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 px-2.5 py-2 rounded-xl text-base shadow">
              🎓
            </div>
            EduPortal
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow">
              Home
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 text-sm font-medium transition-colors">
              Results
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 text-sm font-medium transition-colors">
              Quiz
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 text-sm font-medium transition-colors">
              Notes
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <span className="block w-5 h-0.5 bg-slate-500 rounded"></span>
            <span className="block w-5 h-0.5 bg-slate-500 rounded"></span>
            <span className="block w-5 h-0.5 bg-slate-500 rounded"></span>
          </button>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-20 md:py-28 max-w-3xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-500 px-5 py-2 rounded-full text-xs sm:text-sm font-medium mb-8">
          ● Welcome to Your Learning Hub
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900">
          Your Gateway to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Academic
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Success
          </span>
        </h1>

        <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Access your exam results, take interactive quizzes, and explore
          comprehensive study notes all in one place. Learning made simple
          and effective.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
          <button className="w-full sm:w-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            View My Results →
          </button>
          <button className="w-full sm:w-auto border border-slate-300 bg-white text-slate-700 px-7 py-3 rounded-full text-sm font-semibold hover:bg-slate-50 hover:-translate-y-0.5 transition-all">
            Start a Quiz
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-emerald-500 text-xs sm:text-sm font-medium">
          <span>✔ Free Access</span>
          <span>✔ Updated Daily</span>
          <span>✔ 24/7 Available</span>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all text-center"
            >
              <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-xl">
                {stat.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                {stat.value}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}