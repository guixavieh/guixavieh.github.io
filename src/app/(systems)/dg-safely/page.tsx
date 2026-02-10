import { DividedScroll } from "@/components/divided-scroll";
import SystemSummary from "../components/summary";
import "./_style.scss";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page dg-safely">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              imagePath={"/img/system-icons/dg-safely.png"}
              title={"DG Safely"}
              description={"Gestão Inteligente de Segurança"}
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              O DG Safely foi desenvolvido para ser o pilar de segurança em
              operações de alto risco. O desafio central foi projetar uma
              plataforma que garantisse a integridade dos colaboradores através
              do monitoramento rigoroso de normas, treinamentos e equipamentos,
              transformando dados de conformidade em indicadores visuais para
              uma gestão preventiva e eficiente.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/dg-safely/cover.png"
              alt="cover"
              height={1000}
              width={1000}
            />

            <span className="title">Sobre a DG Safely</span>

            <p>
              O projeto DG Safely consistiu no design de uma Landing Page
              estratégica focada em apresentar soluções de Saúde e Segurança
              Ocupacional. O desafio central foi transformar normas técnicas
              densas em uma comunicação visual clara e persuasiva, capaz de
              converter visitantes em leads qualificados interessados em
              consultoria e gestão de risco.
            </p>

            <div className="image-grid">
              <div className="container first">
                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot1.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container fill">
                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot2.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container full">
                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot3.png"
                  height={600}
                  width={600}
                />

                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot4.png"
                  height={600}
                  width={600}
                />

                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot5.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container gif">
                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/dg-safely.gif"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container notebook">
                <Image
                  alt="screeshot"
                  src="/img/system-images/dg-safely/screenshot6.png"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>

          <EndSection />
        </SystemContent>
      </DividedScroll>
    </div>
  );
}
