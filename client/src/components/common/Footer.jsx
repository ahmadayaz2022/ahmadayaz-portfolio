function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        Ahmad Ayaz
      </h2>

      <p className="text-gray-400">
        Junior Software Engineer | MERN Stack Developer
      </p>

      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/ahmadayaz2022"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ahmadayaz99/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        © 2026 Ahmad Ayaz. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;