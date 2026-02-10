import { DividedScroll } from "@/components/divided-scroll";
import SystemSummary from "../components/summary";
import "./_style.scss";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page navegam-passagens">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              imagePath={"/img/system-icons/navegam-passagens.png"}
              title={"Navegam Passagens"}
              description={
                "A Digitalização do Transporte Multimodal na Amazônia"
              }
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              O Navegam Passagens é uma plataforma de e-commerce especializada
              na venda de bilhetes para o transporte multimodal, conectando
              viajantes a uma vasta rede de rotas fluviais e rodoviárias. A
              empresa atua como um facilitador estratégico na região Norte,
              digitalizando um mercado que historicamente dependia de processos
              manuais e pontos de venda físicos.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/navegam-passagens/cover.png"
              alt="cover"
              height={1000}
              width={1000}
            />

            <span className="title">Sobre o Navegam Passagens</span>

            <p>
              O Navegam Passagens foi projetado para ser a principal ponte entre
              viajantes e empresas de transporte na região. O desafio central
              foi criar um e-commerce fluido e confiável, capaz de lidar com as
              particularidades das rotas fluviais e rodoviárias, transformando
              uma jornada de compra tradicionalmente complexa em um processo
              digital de poucos cliques.
            </p>

            {/* <div className="gif">
              <Image
                src="/img/system-images/navegam-passagens/passagens.gif"
                alt="gif"
                height={500}
                width={500}
              />
            </div> */}

            <div className="image-grid">
              <div className="container first force-divided">
                <Image
                  src="/img/system-images/navegam-passagens/screenshot1.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container second force-divided">
                <Image
                  src="/img/system-images/navegam-passagens/screenshot2.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div className="gif">
              <Image
                src="/img/system-images/navegam-passagens/passagens2.gif"
                alt="gif"
                height={500}
                width={500}
              />
            </div>
          </div>

          <EndSection />
        </SystemContent>
      </DividedScroll>
    </div>
  );
}
