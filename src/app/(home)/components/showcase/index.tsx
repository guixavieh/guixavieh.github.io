import Link from "next/link";
import "./_style.scss";
import Image from "next/image";

function ProjectShowcase(props: { bgUrl: string; name: string; href: string }) {
  return (
    <Link className="component project-showcase" href={props.href}>

      <Image src={props.bgUrl} alt="cover" height={1000} width={1000} />
      <div className="floating-tip">{props.name}</div>
    </Link>
  );
}

export default function ShowcaseSection() {
  return (
    <section className="showcase">
      <ProjectShowcase
        bgUrl="/img/navegamlog-dash.png"
        name="Navegam Log - Sistema Web"
        href="navegamlog-web"
      />
      <ProjectShowcase
        bgUrl="/img/navegamlog-app.png"
        name="Navegam Log - Sistema App do Motorista"
        href="navegamlog-app"
      />
      <ProjectShowcase
        bgUrl="/img/navegam-passagens.png"
        name="Navegam Passagens"
        href="navegam-passagens"
      />
      <ProjectShowcase
        href="forestfi"
        bgUrl="/img/forestfi.png"
        name="Forestfi"
      />
      <ProjectShowcase
        href="onisafra"
        bgUrl="/img/onisafra.png"
        name="Onisafra"
      />
      <ProjectShowcase
        href="dg-safely"
        bgUrl="/img/dg-safely.png"
        name="DG Safely"
      />
      <ProjectShowcase href="compal" bgUrl="/img/compal.png" name="Compal" />
    </section>
  );
}
