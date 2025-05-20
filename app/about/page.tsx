import Link from "next/link";

Link

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-black rounded-lg shadow-lg mt-12 text-gray-200">
      <h1 className="text-3xl font-extrabold mb-6 tracking-tight text-white">
        About This App
      </h1>

      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        This is a simple <span className="font-semibold text-green-400">todo app</span> designed to help you organize your daily tasks quickly and efficiently.
        It was built to solve the problem of losing track of important chores and deadlines.
      </p>

      <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-400 pl-4 text-white">
        Who I Am
      </h2>
      <p className="mb-8 leading-relaxed text-gray-300">
        Hi! I'm <span className="font-semibold text-green-400">Sonali Bhatt</span>, a web developer passionate about creating useful and easy-to-use applications.
        I built this app as a practice project and to improve my Next.js skills.
      </p>

      <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-400 pl-4 text-white">
        How to Use
      </h2>
      <p className="mb-8 leading-relaxed text-gray-300">
        Simply create an account, add your todos, and mark them complete as you go. Your tasks will be saved
        so you can stay organized anywhere.
      </p>

      <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-400 pl-4 text-white">
        Get in Touch
      </h2>
      <p className="leading-relaxed text-gray-300">
        If you have any feedback or questions, feel free to reach out to me at{' '}
        <Link href="mailto:bhattsonali@gmail.com" className="text-green-400 underline hover:text-green-600 transition">
          bhattsonali@gmail.com
        </Link>.
      </p>
      

    </div>
  );
}
