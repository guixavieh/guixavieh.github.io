import { DividedScroll } from "@/components/divided-scroll";
import "./_style.scss";
import SystemSummary from "../components/summary";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page forestfi">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              title="Forestfi"
              description="Tokenização e Monitoramento Ambiental"
              imagePath="/img/system-icons/forestfi.png"
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              O Forestfi é uma solução tecnológica voltada para o mercado de
              créditos de carbono e monitoramento ambiental. A plataforma nasceu
              com o propósito de conectar a preservação das florestas ao mercado
              financeiro, utilizando dados de alta precisão para garantir que
              ativos ambientais sejam geridos com total transparência e
              segurança.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/forestfi/cover.png"
              alt="cover"
              height={1000}
              width={1000}
            />

            <span className="title">Sobre o Forestfi</span>

            <p>
              O Forestfi nasceu para conectar a preservação ambiental ao mercado
              financeiro. O desafio central foi projetar uma plataforma de alta
              precisão que permitisse o monitoramento de áreas florestais e a
              gestão de ativos ambientais, transformando dados complexos de
              geolocalização em uma interface confiável e transparente para
              investidores e conservacionistas.
            </p>

            <div className="gif">
              <Image
                src="/img/system-images/forestfi/forestfi.gif"
                alt="gif"
                height={500}
                width={500}
              />
            </div>

            <div className="image-grid">
              <div className="container">
                <Image
                  alt="screeshot"
                  src="/img/system-images/forestfi/screenshot1.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container">
                <Image
                  alt="screeshot"
                  src="/img/system-images/forestfi/screenshot2.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="full double">
                <Image
                  alt="screeshot"
                  className="wide"
                  src="/img/system-images/forestfi/screenshot3.png"
                  height={600}
                  width={600}
                />

                <Image
                  alt="screeshot"
                  src="/img/system-images/forestfi/screenshot4.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container force-divided">
                <Image
                  alt="screeshot"
                  src="/img/system-images/forestfi/screenshot5.png"
                  height={600}
                  width={600}
                />
              </div>

              <div className="container force-divided">
                <Image
                  alt="screeshot"
                  src="/img/system-images/forestfi/screenshot6.png"
                  height={600}
                  width={600}
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
