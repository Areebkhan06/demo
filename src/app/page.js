export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 px-3 py-2 rounded-lg shadow-md">
              🎓
            </div>
            EduPortal
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <a href="#" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-md">
              Home
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium">
              Results
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium">
              Quiz
            </a>
            <a href="#" className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-medium">
              Notes
            </a>
          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24 max-w-4xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-5 py-2 rounded-full text-sm mb-8">
          ● Welcome to Your Learning Hub
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900">
          Your Gateway to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Academic
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Success
          </span>
        </h1>

        <p className="text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Access your exam results, take interactive quizzes, and explore
          comprehensive study notes all in one place. Learning made simple
          and effective.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
            View My Results →
          </button>
          <button className="border border-slate-300 bg-white px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition">
            Start a Quiz
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-emerald-500 text-sm font-medium">
          <span>✔ Free Access</span>
          <span>✔ Updated Daily</span>
          <span>✔ 24/7 Available</span>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

          {[
            { value: "500+", label: "Active Students" },
            { value: "50+", label: "Subjects Covered" },
            { value: "95%", label: "Success Rate" },
            { value: "1000+", label: "Quizzes Completed" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-lg transition"
            >
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 stroke-blue-600"
                  fill="none"
                  strokeWidth="40"
                >
                  <path d="M320 320C390.7 320 448 262.7 448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320z" />
                </svg>
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900">
                {stat.value}
              </h2>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}