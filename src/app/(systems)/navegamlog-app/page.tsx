import { DividedScroll } from "@/components/divided-scroll";
import "./_style.scss";
import SystemSummary from "../components/summary";
import SystemContent from "../components/system-content";
import Image from "next/image";
import EndSection from "@/app/(home)/components/end";
export default function Page() {
  return (
    <div className="page system-page navegamlog-app">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              title="Navegam Log - App do Motorista"
              description="Operações em Campo e Last Mile"
              imagePath="/img/system-icons/navegamlog-app.png"
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLE GUIDE", "WIREFRAMES"]}
            >
              O App do Motorista é a extensão vital do ecossistema Navegam no
              campo. O desafio central foi projetar uma interface de alta
              performance para condutores que operam em ambientes dinâmicos,
              garantindo que o registro de entregas e ocorrências fosse feito
              com o mínimo de fricção e máxima precisão.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              className="cover"
              src="/img/system-images/navegamlog-app/cover.png"
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
                src="/img/system-images/navegamlog-app/navegamlog-app.gif"
                alt="gif"
                height={500}
                width={500}
              />
            </div>

            <div className="image-grid">
              <div className="container full">
                <Image
                  src="/img/system-images/navegamlog-app/screenshot1.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
                <Image
                  src="/img/system-images/navegamlog-app/screenshot2.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
                <Image
                  src="/img/system-images/navegamlog-app/screenshot3.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
                <Image
                  src="/img/system-images/navegamlog-app/screenshot4.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
                <Image
                  src="/img/system-images/navegamlog-app/screenshot5.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
                <Image
                  src="/img/system-images/navegamlog-app/screenshot6.png"
                  alt="screenshot"
                  height={300}
                  width={300}
                />
              </div>
              <div className="container centered">
                <Image
                  src="/img/system-images/navegamlog-app/screenshot7.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container fill">
                <Image
                  src="/img/system-images/navegamlog-app/screenshot8.png"
                  alt="screenshot"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <span className="title">Conclusão</span>
            <p>
              O aplicativo digitalizou a ponta final da Navegam Log, gerando
              dados valiosos para a inteligência do negócio.
            </p>
            <ul>
              <li>
                <b>Visibilidade Imediata:</b> A base passou a acompanhar o
                status real das entregas sem a necessidade de ligações ou espera
                pelo retorno do veículo.
              </li>
              <li>
                <b>Eficiência no Last Mile:</b> Redução do tempo de parada em
                cada cliente graças à agilidade na conferência e baixa digital.
              </li>
              <li>
                <b>Redução de Papel:</b> Eliminação de processos físicos,
                reduzindo custos e perdas de documentos comprobatórios.
              </li>
            </ul>
          </div>

          <EndSection />
        </SystemContent>
      </DividedScroll>
    </div>
  );
}
