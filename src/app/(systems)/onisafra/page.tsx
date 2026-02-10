import { DividedScroll } from "@/components/divided-scroll";
import "./_style.scss";
import SystemSummary from "../components/summary";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page onisafra">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              title="Onisafra"
              description="Inteligência e Gestão para o Agronegócio"
              imagePath="/img/system-icons/onisafra.png"
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              A Onisafra é uma startup brasileira que atua no setor de
              agronegócio (AgTech), focada em modernizar a comercialização e a
              gestão da produção rural. A empresa funciona como um ecossistema
              digital que conecta diretamente o pequeno e médio produtor rural
              ao mercado consumidor e a grandes compradores, eliminando
              intermediários e garantindo uma remuneração mais justa no campo.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/onisafra/cover.png"
              alt="cover"
              height={1000}
              width={1000}
            />

            <span className="title">
              Sobre a Navegam Log - App do Motorista
            </span>

            <p>
              O App do Motorista é a extensão vital do ecossistema Navegam no
              campo. O desafio central foi projetar uma interface de alta
              performance para condutores que operam em ambientes dinâmicos,
              garantindo que o registro de entregas e ocorrências fosse feito
              com o mínimo de fricção e máxima precisão.
            </p>

            <div className="gif">
              <Image
                src="/img/system-images/onisafra/onisafra.gif"
                alt="gif"
                height={500}
                width={500}
              />
            </div>

            <div className="image-grid">
              <div className="container full">
                <div className="row">
                  <Image
                    src="/img/system-images/onisafra/screenshot1.png"
                    alt="screenshot"
                    height={300}
                    width={300}
                  />
                  <Image
                    src="/img/system-images/onisafra/screenshot2.png"
                    alt="screenshot"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="row">
                  <Image
                    src="/img/system-images/onisafra/screenshot3.png"
                    alt="screenshot"
                    height={300}
                    width={300}
                  />
                  <Image
                    src="/img/system-images/onisafra/screenshot4.png"
                    alt="screenshot"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <span className="title">Conclusão</span>
            <p>
              O Onisafra posicionou-se como uma ferramenta indispensável para a
              modernização da gestão rural.
            </p>
            <ul>
              <li>
                <b>Precisão Operacional:</b> Aumento na fidelidade dos dados de
                estoque e colheita, reduzindo perdas por falta de controle.
              </li>
              <li>
                <b>Otimização de Tempo:</b> Gestores passaram a gastar menos
                tempo consolidando dados e mais tempo analisando a rentabilidade
                da safra.
              </li>
              <li>
                <b>Escalabilidade de Negócio:</b> A plataforma permitiu o
                gerenciamento de múltiplas propriedades de forma simultânea,
                elevando o patamar de gestão dos produtores parceiros.
              </li>
            </ul>

            <div className="highlight">
              <span>
                <Image
                  src={"/img/icons/award.svg"}
                  alt="award"
                  height={15}
                  width={15}
                />
                <span>Destaque Nacional</span>
              </span>
              <p>
                Esse projeto foi responsável por levar a Navegam ao segundo
                lugar no HackBrazil 2023, competição realizada na{" "}
                <b>Brazil Conference at Harvard & MIT</b>, que premia startups
                com soluções inovadoras para desaﬁos sociais no Brasil.
              </p>
            </div>
          </div>

          <EndSection />
        </SystemContent>
      </DividedScroll>
    </div>
  );
}
