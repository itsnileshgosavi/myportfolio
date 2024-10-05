import { Linkedin, Github, Mail } from "lucide-react";
export default function Socials() {
  return (
    <>
      
      <section className="flex justify-center items-center space-x-5">
        <a
          href="https://www.linkedin.com/in/nilesh-gosavi77/"
          className="group flex justify-center  p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          <Linkedin size={20} />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Linkedin
          </span>
        </a>
        <a
          href="https://github.com/itsnileshgosavi/"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-slate-700 from-gray-800  text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          <Github size={20} />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Github
          </span>
        </a>
        <a
          href="mailto:itsnileshgosavi@gmail.com"
          className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-blue-600 text-white from-gray-800 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          <Mail size={20} />
          <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
            Email
          </span>
        </a>
      </section>
    </>
  );
}
