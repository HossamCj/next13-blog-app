import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className="bg-slate-600 text-white p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link
                        href="/"
                        className="text-white/90 no-underline hover:text-white"
                    >
                        HossamCj
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link
                        href="https://www.linkedin.com/in/hossam-hassan-mohamed-738420145/?locale=en_US"
                        className="text-white/90 hover:text-white"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://www.github.com/Hossamcj"
                        className="text-white/90 hover:text-white"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
