function SideBar() {
  return (
    <>
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
        style={{ backgroundColor: "#007979" }}
>
  <div className="flex flex-col h-full px-4 py-5">

    {/* Logo Section */}
    <div className="text-center mb-8">
      <img
        src="/eonix-logo.png"
        alt="Eonix Solutions"
        className="w-44 mx-auto mb-2"
      />

      <h2 className="text-[#FDEB9E] text-3xl font-bold">
        EonixTrack
      </h2>

      <p className="text-white/80 text-sm">
        Student Progress Dashboard
      </p>
    </div>

    {/* Menu */}
    <ul className="space-y-3">

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12L12 3l9 9M5 10v10h14V10"
            />
          </svg>
          Dashboard
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <path d="M12 7v5l3 3" strokeWidth="2" />
          </svg>
          Check In / Out
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              d="M8 3h8l5 5v13H8V3z"
            />
          </svg>
          Daily Progress
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="15"
              rx="2"
              strokeWidth="2"
            />
          </svg>
          History
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" strokeWidth="2" />
            <path
              d="M4 20c0-4 4-6 8-6s8 2 8 6"
              strokeWidth="2"
            />
          </svg>
          My Profile
        </a>
      </li>
    </ul>

    <div className="border-t border-white/20 my-6"></div>

    <div className="flex-grow"></div>

    {/* Bottom Menu */}
    <ul className="space-y-2">

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          ⚙️ Settings
        </a>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-4 rounded-xl text-white hover:bg-[#FDEB9E] hover:text-black transition"
        >
          ↪ Logout
        </a>
      </li>
    </ul>

    <div className="border-t border-white/20 my-5"></div>

    {/* Profile Card */}
    <div className="border border-white/20 rounded-xl p-3">
      <div className="flex items-center gap-3">
        <img
          src="/profile.jpg"
          alt="User"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h4 className="text-white font-semibold">
            Shahama
          </h4>

          <p className="text-white/70 text-sm">
            Intern
          </p>
        </div>
      </div>
    </div>

  </div>
</aside>aste your entire sidebar code here 
    </>
  );
}

export default SideBar;