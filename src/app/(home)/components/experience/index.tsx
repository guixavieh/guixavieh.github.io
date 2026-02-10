import "./_style.scss";

function Experience(props: {
  company: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="component experience">
      <div className="header">
        <span className="company">{props.company}</span>
        <span className="title">{props.title}</span>
      </div>
      <p>{props.children}</p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <span className="title">Experiência</span>
      <div className="list">
        <Experience
          company="Navegam"
          title="Lead Product Designer - 2024 • Agora"
        >
          Liderança de design em ecossistemas de logística complexos na região
          Amazônica. Responsável pela estratégia de produto, desde a concepção
          de painéis administrativos até aplicativos móveis, além da criação e
          gestão do Design System da empresa.
        </Experience>

        <Experience company="Navegam" title="UX/UI Designer - 2022 • 2024">
          Atuação full-time no desenvolvimento e sustentação das interfaces. Fui
          responsável por refinar fluxos de usuários e implementar novas
          features que amadureceram os produtos digitais da empresa,
          consolidando a base para minha futura liderança. Consultoria focada na
          estruturação dos produtos digitais de Passagens e Logística. Atuei na
          prototipagem de alta fidelidade e na comunicação direta com as áreas
          de negócio, refinando funcionalidades complexas que posteriormente
          foram integradas ao ecossistema oficial da empresa.
        </Experience>

        <Experience company="On Desk" title="UX/UI Designer Junior - 2021">
          Atuação na agência experimental On Desk, desenvolvendo interfaces
          digitais para clientes reais. Aplicação de metodologias de Discovery e
          Prototipagem em projetos de captação, entregando soluções que
          alinharam requisitos de design a demandas de mercado.
        </Experience>

        <Experience company="Freelancer" title="Graphic Designer - 2020">
          Atuação independente com foco em Social Media e peças publicitárias. O
          desenvolvimento de identidades visuais e branding neste período criou
          a base estética e de composição que utilizo hoje no design de
          interfaces.
        </Experience>
      </div>
    </section>
  );
}
