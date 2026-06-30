function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] pt-5">
      <nav className="section glass-card rounded-full px-6 py-4">
        <div className="flex items-center justify-between">

          <div className="text-xl font-bold tracking-tight text-slate-900">
            Teslim Yussuph
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="rounded-full bg-teal-500 px-8 py-3 text-white font-medium shadow-lg">
            Book Call
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;