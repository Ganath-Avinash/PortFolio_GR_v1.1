export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-4 tracking-tight">Ganath Avinash G R</h3>
          <p className="text-zinc-500 text-sm">
            AI Engineer & Full Stack Developer.<br/>
            Building intelligent and scalable solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#coding-stats" className="hover:text-black dark:hover:text-white transition-colors">Featured</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><a href="https://www.linkedin.com/in/ganath-avinash" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/Ganath-Avinash" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
            <li><a href="mailto:ganathavinash.gr@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Ganath Avinash G R. All rights reserved.
        </p>
        <p className="text-zinc-400 text-sm text-center md:text-right">
          Built with React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
