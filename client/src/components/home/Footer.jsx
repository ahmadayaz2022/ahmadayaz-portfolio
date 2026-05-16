function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Ahmad Ayaz
        </h2>

        <p className="text-gray-400 mb-8">
          Full-Stack MERN Developer & Junior Software Engineer
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/ahmadayaz2022"
            target="_blank"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ahmadayaz99/"
            target="_blank"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Ahmad Ayaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;