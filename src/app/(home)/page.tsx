import Image from "next/image";
import "./page.scss";
import { Topbar } from "./components/topbar";
import SkillsSection from "./components/skills";
import ShowcaseSection from "./components/showcase";
import MoreAboutSection from "./components/more-about";
import ExperienceSection from "./components/experience";
import ContactSection from "./components/contact";
import EndSection from "./components/end";
import { DividedScroll } from "@/components/divided-scroll";
import Link from "next/link";

export function SkillTag(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="component skill-tag">
      <Image src="img/icons/mark.svg" alt="mark" height={12} width={12} />
      <div>{props.children}</div>
    </div>
  );
}

export function Software(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <div className="component software">{props.children}</div>;
}

export function SocialMedia(props: {
  href: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <Link target="_blank" href={props.href} >
      <button className="component social-media">
        <div className="content">{props.children}</div>
      </button>
    </Link>
  );
}

function Fixed() {
  return (
    <div className="home-page fixed">
      <section className="about">
        <h1>Guilherme paiva Xavier</h1>
        <span>UX/UI Designer</span>
        <div className="tags">
          <SkillTag>Mobile & Web</SkillTag>
          <SkillTag>+5 anos de experiencia</SkillTag>
          <SkillTag>Design Systems</SkillTag>
        </div>
        <p className="about">
          Designer UX/UI movido pelo desafio de simplificar fluxos complexos.
          Tenho experiência na construção de produtos digitais robustos, desde
          painéis administrativos ricos em dados até aplicativos focados no
          consumidor final.
        </p>
        <div className="foot-note">
          <button className="contact">Entrar em contato</button>
          <Link target="_blank" href={"/GuilhermePaiva_resume.pdf"}>
            <button className="download-cv">
              <Image
                src="img/icons/download.svg"
                alt="download"
                height={14}
                width={14}
              />
              <span>Baixar currículo</span>
            </button>
          </Link>
        </div>
      </section>
      <section className="software">
        <span className="title">Softwares que eu utilizo</span>
        <div className="software-list">
          <Software>
            <Image
              alt="figma"
              height={22}
              width={22}
              src="img/icons/figma.svg"
            />
          </Software>
          <Software>
            <Image
              alt="photoshop"
              height={22}
              width={22}
              src="img/icons/photoshop.svg"
            />
          </Software>
          <Software>
            <Image
              alt="illustrator"
              height={22}
              width={22}
              src="img/icons/illustrator.svg"
            />
          </Software>
          <Software>
            <Image
              alt="after-effects"
              height={22}
              width={22}
              src="img/icons/after-effects.svg"
            />
          </Software>
          <Software>
            <Image
              alt="premiere"
              height={22}
              width={22}
              src="img/icons/premiere.svg"
            />
          </Software>
          <Software>
            <Image
              alt="vegas"
              height={22}
              width={22}
              src="img/icons/vegas.svg"
            />
          </Software>
        </div>
      </section>
      <section className="social-media">
        <span className="title">Minhas redes</span>
        <div className="social-list">
          <SocialMedia href="https://www.linkedin.com/in/guipx/?isSelfProfile=true">
            <Image
              alt="linkedin"
              height={22}
              width={22}
              src="img/icons/linkedin.svg"
            />
          </SocialMedia>
          <SocialMedia href="https://www.behance.net/Guipaiva">
            <Image
              alt="behance"
              height={22}
              width={22}
              src="img/icons/behance.svg"
            />
          </SocialMedia>
          <SocialMedia href="https://dribbble.com/guixavier">
            <Image
              alt="dribble"
              height={22}
              width={22}
              src="img/icons/dribble.svg"
            />
          </SocialMedia>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page home-page">
      <DividedScroll fixed={<Fixed />}>
        <div className="sections">
          <Topbar />
          <ShowcaseSection />
          <div className="sidescroll">
            <span>Passe pro lado</span>
            <Image
              src={"/img/icons/arrow-right.svg"}
              alt="arrow-righ"
              height={15}
              width={15}
            />
          </div>
          <MoreAboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
          <EndSection />
        </div>
      </DividedScroll>
    </div>
  );
}
