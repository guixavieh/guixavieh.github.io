import { DividedScroll } from "@/components/divided-scroll";
import SystemSummary from "../components/summary";
import "./_style.scss";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page compal">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              imagePath={"/img/system-icons/compal.png"}
              title={"Compal"}
              description={
                "Gestão e Rastreabilidade Logística de Alta Performance"
              }
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              A Compal é uma empresa focada em soluções logísticas de alta
              performance, especializada na automação e inteligência de fluxos
              operacionais. Atuando como um parceiro estratégico para grandes
              operações industriais, a empresa desenvolve tecnologias voltadas
              para a rastreabilidade total de ativos e a otimização da cadeia de
              suprimentos.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/compal/cover.png"
              alt="cover"
              height={1000}
              width={1000}
            />

            <span className="title">Sobre a Compal</span>

            <p>
              O projeto Compal foi desenvolvido para otimizar o controle de
              fluxos logísticos complexos. O desafio central foi projetar uma
              interface capaz de gerenciar grandes volumes de dados operacionais
              em tempo real, transformando gargalos logísticos em processos
              fluidos de movimentação e monitoramento de ativos.
            </p>

            <div className="image-grid">
              <div className="container fill">
                <Image
                  src="/img/system-images/compal/screenshot1.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container fill">
                <Image
                  src="/img/system-images/compal/screenshot2.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container full">
                <Image
                  src="/img/system-images/compal/screenshot3.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container fourth force-divided">
                <Image
                  src="/img/system-images/compal/screenshot4.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container fifth force-divided">
                <Image
                  src="/img/system-images/compal/screenshot5.png"
                  alt="screenshot"
                  height={500}
                  width={500}
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
