import Image from "next/image";
import Card from './components/card';

export default function Home() {

  const socialLinks = [
    { 
      icon: "instagram.svg", 
      alt: "Instagram",
      link: "https://www.instagram.com/esprazj/"
    },
    { 
      icon: "github.svg", 
      alt: "Github",
      link: "https://github.com/RicoPleasure"
    },
    {
      icon: "linkedin.svg", 
      alt: "Linkedin",
      link: "https://linkedin.com/in/enrico-prazeres-4b44a7214"
    }
  ];

  const techLogos = [
    { 
      icon: "devicon-html5-plain", 
      alt: "html5"
    },
    { 
      icon: "devicon-css3-plain", 
      alt: "css3"
    },
    { 
      icon: "devicon-tailwindcss-original", 
      alt: "tailwindcss"
    },
    { 
      icon: "devicon-sass-original", 
      alt: "sass"
    },
    { 
      icon: "devicon-javascript-plain", 
      alt: "javascript"
    },
    { 
      icon: "devicon-typescript-plain", 
      alt: "typescript"
    },
    { 
      icon: "devicon-nextjs-plain", 
      alt: "nextjs"
    },
    { 
      icon: "devicon-react-original", 
      alt: "react"
    },
    { 
      icon: "devicon-python-plain", 
      alt: "python"
    },
    { 
      icon: "devicon-elixir-plain", 
      alt: "elixir"
    },
    { 
      icon: "devicon-phoenix-original", 
      alt: "phoenix"
    },
    { 
      icon: "devicon-haskell-plain", 
      alt: "haskell"
    },
    { 
      icon: "devicon-bash-plain", 
      alt: "bash"
    },
    { 
      icon: "devicon-archlinux-plain", 
      alt: "arch"
    },
    { 
      icon: "devicon-git-plain", 
      alt: "git"
    },
    { 
      icon: "devicon-github-plain", 
      alt: "github"
    },
    { 
      icon: "devicon-figma-plain", 
      alt: "figma"
    },
    { 
      icon: "devicon-markdown-plain", 
      alt: "markdown"
    },
  ];

  const projects = [
    {
      techs: ["devicon-elixir-plain", "devicon-phoenix-plain", "devicon-tailwindcss-plain"], 
      link: "https://github.com/RicoPleasure/matrix-calculator",
      text: "Matrix Calculator",
      span: " - Operations between matrices and single operations."
    },
    {
      techs: ["devicon-nextjs-plain", "devicon-typescript-plain", "devicon-tailwindcss-plain"],
      link: "https://github.com/RicoPleasure/task-manager",
      text: "Task Manager",
      span: " - Saves your notes into note boxes (just like Google Keep)."
    },
    {
      techs: ["devicon-react-plain", "devicon-javascript-plain", "devicon-tailwindcss-plain"],
      link: "https://github.com/RicoPleasure/portfolio-website",
      text: "Old Portfolio Website",
      span: " - The one I used before developing this one."
    },
    {
      techs: ["devicon-nextjs-plain", "devicon-typescript-plain", "devicon-tailwindcss-plain", "devicon-css3-plain"],
      link: "https://github.com/RicoPleasure/portfolio",
      text: "Portfolio",
      span: " - The website you are exploring right now, my current portfolio."
    },
  ]

  interface Social {
    icon: string
    alt: string
    link: string
  }

  const SocialButton = ({icon, link, alt}: Social) => {
    return (
      <a href={link} target="_blank" className="select-none">
        <Image src={icon} width={30} height={30} alt={alt} />
      </a>
    ) 
  }

  interface ProjectInfo {
    techs: string[],
    link: string,
    text: string,
    span: string
  }

  const Project = ({techs, link, text, span}: ProjectInfo) => {
    return (
      <div className="w-full flex pt-4 pb-6 pt-4">
        <div className="w-full flex flex-col space-y-2">
          <div>
            <div className="flex space-x-3">
              {techs.map((tech, index) => (
                <i className={`${tech} text-3xl`} key={index}></i>
              ))}
            </div>
          </div>
          <div>
              <p>{text}<span className={`hidden sm:inline`}>{span}</span></p>
          </div>  
        </div>
        <div>
          <a href={link} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex justify-center xl:px-[220px] 2xl:px-[360px] py-20">
        <main className={`w-[90%] sm:w-[80%] text-white flex flex-col place-items-center`}>

          <Card color="bg-[#000000]" >
            <div className="w-full flex place-items-center justify-evenly p-10 md:px-36 sm:pb-32 sm:pt-24">
              <h1 className="text-6xl font-semibold leading-none hidden sm:block">esprazj</h1>
              <Image src="logo-white.svg" width={100} height={100} alt="logo" className="select-none hidden"></Image>
              <Image src="logo-white.svg" width={120} height={120} alt="logo" className="select-none"></Image>
            </div>
          </Card>

          <Card color="bg-[#000000]" >
            <div className="w-full flex flex-col">
              <div className="flex flex-col place-items-center px-10 text-center sm:px-24 pb-6 pt-4">
                <span className="text-4xl">These are my social media</span>
                <p>Contact me, let's learn together!</p>
              </div>
              <div className="w-full flex justify-evenly px-10 xl:px-56 py-5 border-t rounded-b-2xl">
                {socialLinks.map((info, index) => (
                  <SocialButton link={info.link} icon={info.icon} alt={info.alt} key={index}></SocialButton>
                ))}
              </div>
            </div>
          </Card>

          <Card color="bg-[#000000]" >
            <div className="w-full flex flex-col">
              <div className="flex flex-col place-items-center px-24 pb-6 pt-4">
                <span className="text-4xl">Skills</span>
              </div>
              <div className="w-full grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-y-6 place-items-center px-6 sm:px-16 py-5 border-t rounded-b-2xl">
                {techLogos.map((tech, index) => (
                  <i className={`${tech.icon} text-4xl`} key={index}></i>
                ))}
              </div>
            </div>
          </Card>

          <Card color="bg-[#000000]" >
          <div className="flex flex-col place-items-center px-24 pb-6 pt-4">
                <span className="text-4xl">Projects</span>
              </div>
            <div className="w-full px-10 py-4 border-t">
              {projects.map((project, index) => (
                <Project techs={project.techs} link={project.link} text={project.text} key={index} span={project.span} />
              ))}
            </div>
          </Card>

          <Card color="bg-[#000000]" >
            <div className="w-full px-10 text-center sm:px-24 flex justify-center pb-2">
              <h1 className="text-lg">"There is no great genius without some touch of madness"</h1>                    
            </div>
          </Card>
        </main>
      </div>
    </>
  );
}
