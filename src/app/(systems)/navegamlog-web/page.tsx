import { DividedScroll } from "@/components/divided-scroll";
import SystemSummary from "../components/summary";
import "./_style.scss";
import Image from "next/image";
import SystemContent from "../components/system-content";
import EndSection from "@/app/(home)/components/end";

export default function NavegamlogWebPage() {
  return (
    <div className="page system-page navegamlog">
      <DividedScroll
        fixed={
          <div className="padded">
            <SystemSummary
              title="Navegam Log"
              description="Operações e Logística"
              imagePath="/img/system-icons/navegamlog.png"
              tags={["UX/UI DESIGN", "PROTOTYPE", "STYLEGUIDE", "WIREFRAMES"]}
            >
              O Navegam Log atua como o &quot;cérebro&quot; da operação
              logística, gerenciando o transporte multimodal de cargas. O
              desafio central foi transformar uma ferramenta densa em dados em
              uma interface intuitiva, capaz de lidar com as especificidades do
              transporte fluvial, rodoviário e aéreo simultaneamente.
            </SystemSummary>
          </div>
        }
      >
        <SystemContent>
          <div className="card">
            <Image
              src={"/img/system-images/navegamlog-web/cover.png"}
              alt="cover"
              height={1000}
              width={1000}
              className="cover"
            />
            <span className="title">Sobre a Navegam Log</span>
            <p>
              O Navegam Log é uma solução robusta voltada para a gestão e
              inteligência logística. O projeto nasceu da necessidade de
              centralizar operações complexas, permitindo o acompanhamento de
              fretes, gestão de documentos e monitoramento de cargas em tempo
              real. Como uma peça central no ecossistema da Navegam, o sistema
              visa transformar dados brutos em decisões estratégicas para
              transportadores e embarcadores.
            </p>
            <div className="divided-description">
              <span className="title">O Desafio</span>
              <p>
                O setor logístico lida com um volume massivo de variáveis e
                imprevistos. O desafio principal era projetar uma plataforma que
                conseguisse condensar fluxos densos de informação (como
                atualizações de status e tratativas de exceções) em uma
                interface intuitiva. Precisávamos reduzir a curva de aprendizado
                dos operadores e eliminar falhas de comunicação que geravam
                prejuízos operacionais, tudo isso mantendo a escalabilidade para
                futuras funcionalidades.
              </p>
            </div>

            <div className="divided-description">
              <span className="title">Meu Papel</span>
              <p>
                Como Designer responsável, atuei de ponta a ponta na experiência
                do produto, desde o levantamento de requisitos até a entrega das
                interfaces finais. O trabalho focou na reestruturação da
                arquitetura de informação e na criação de fluxos de navegação
                que simplificassem tarefas críticas, como gestão de ocorrências
                e visualização de status em tempo real.
              </p>
            </div>
          </div>
          <div className="card">
            <span className="title">Discovery & Pesquisa</span>
            <p>
              O desafio na Navegam Log foi mapear as dores de uma operação com
              múltiplos fluxos de frete. Através de imersão e entrevistas,
              identificamos que a fragmentação da informação era o maior
              gargalo. O objetivo foi transformar incertezas técnicas em
              requisitos de design para garantir rastreabilidade e eficiência.
            </p>
            <ul>
              <li>
                <b>Personas:</b> Foco no Gestor (estratégia), Analista (operação
                web) e Entregador (ponta final).
              </li>
              <li>
                <b>Dores (Pain Points):</b> Dados espalhados, dificuldade no
                tratamento de exceções, baixa visibilidade em tempo real e alta
                carga cognitiva.
              </li>
              <li>
                <b>Ideias de Solução:</b> Centralização em um dashboard único,
                automação de status de frete e otimização de landing pages para
                captura de dados.
              </li>
            </ul>
            <div className="image-grid">
              <div className="popping-cards">
                <Image
                  className="p1"
                  src="/img/system-images/navegamlog-web/p1.png"
                  alt="employee-description"
                  height={250}
                  width={150}
                />
                <Image
                  className="p2"
                  src="/img/system-images/navegamlog-web/p2.png"
                  alt="employee-description"
                  height={250}
                  width={150}
                />
                <Image
                  className="p3"
                  src="/img/system-images/navegamlog-web/p3.png"
                  alt="employee-description"
                  height={250}
                  width={150}
                />
                <div className="bar"></div>
              </div>
              <div className="container dark">
                <Image
                  className="first-image"
                  src="/img/system-images/navegamlog-web/painpoints.png"
                  alt="diagram"
                  height={500}
                  width={500}
                />
              </div>
              <div className="container light">
                <Image
                  className="second-image"
                  src="/img/system-images/navegamlog-web/ideas.png"
                  alt="diagram"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <span className="title">Estrutura & Arquitetura</span>
            <p>
              Com as dores mapeadas, o foco migrou para a estruturação lógica do
              ecossistema. Como Lead Designer, minha prioridade foi garantir que
              a robustez técnica do backend da Navegam fosse traduzida em uma
              experiência de usuário intuitiva e escalável.
            </p>
            <ul>
              <li>
                <b>Arquitetura de Informação:</b> Reformulei a hierarquia de
                dados para centralizar fluxos que antes operavam em silos,
                garantindo que o Analista de Logística mantivesse o contexto
                global da operação sem sobrecarga cognitiva.
              </li>
              <li>
                <b>Mapeamento de Fluxos Críticos:</b> Desenhei a jornada de
                ponta a ponta para o tratamento de exceções (cargas paradas ou
                avarias), transformando processos técnicos complexos em fluxos
                de trabalho visuais e auditáveis.
              </li>
              <li>
                <b>Design de Sistemas e Escalabilidade:</b> Estabeleci as bases
                para uma interface modular através de wireframes, validando a
                disposição de dashboards e filtros de busca avançada antes da
                camada visual, garantindo que a estrutura suportasse o
                crescimento do volume de fretes.
              </li>
              <li>
                <b>Refinamento de Requisitos:</b> Atuei na ponte entre
                tecnologia e negócio para converter as &quot;incertezas
                técnicas&quot; em requisitos de interface claros, focando em
                reduzir a fricção na consulta de dados por nota fiscal ou
                cliente.
              </li>
            </ul>
            <div className="image-grid">
              <div className="container full">
                <Image
                  src="/img/system-images/navegamlog-web/diagram.png"
                  alt="diagram"
                  height={500}
                  width={800}
                />
              </div>
              <div className="container full triple">
                <Image
                  src="/img/system-images/navegamlog-web/screenshot1.png"
                  alt="screenshot"
                  height={500}
                  width={800}
                />
                <Image
                  src="/img/system-images/navegamlog-web/screenshot2.png"
                  alt="screenshot"
                  height={500}
                  width={800}
                />
                <Image
                  src="/img/system-images/navegamlog-web/screenshot3.png"
                  alt="screenshot"
                  height={500}
                  width={800}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <span className="title">Resultado</span>
            <p>
              A estrutura validada ganhou vida em uma interface focada em
              usabilidade e redução de estresse visual.
            </p>
            <ul>
              <li>
                <b>Visualização Semafórica:</b> Usei um sistema de cores para os
                status de entrega, permitindo que o gestor identifique urgências
                instantaneamente.
              </li>
              <li>
                <b>Componentização:</b> Desenvolvi uma biblioteca de componentes
                padronizada para garantir consistência visual em todo o sistema
                web.
              </li>
              <li>
                <b>Hierarquia Visual:</b> Tabelas e cards foram otimizados para
                leitura rápida de dados densos, mantendo a interface limpa.
              </li>
            </ul>
            <div className="quad-gif">
              <Image
                alt="gif"
                src="/img/system-images/navegamlog-web/quad.gif"
                height={600}
                width={600}
              />
            </div>
            {/* <span className="title">Interface</span>
            <h1>Imagens</h1> */}
          </div>
          <div className="card">
            <span className="title">Conclusão</span>
            <p>
              A implementação do novo ecossistema do Navegam Log não apenas
              resolveu gargalos operacionais, mas transformou-se em uma vantagem
              competitiva que impulsionou os números da empresa entre 2024 e
              2026.
            </p>
            <ul>
              <li>
                <b>Crescimento da Base de Usuários:</b> Com uma interface mais
                intuitiva e menos técnica, conseguimos reduzir a curva de
                aprendizado, permitindo a entrada de novos parceiros logísticos
                e um aumento significativo no volume de usuários ativos na
                plataforma.
              </li>
              <li>
                <b>Impulso em Vendas e Conversão:</b> A otimização do fluxo de
                entrada e a visibilidade em tempo real serviram como argumento
                de venda decisivo, ajudando a Navegam a fechar contratos maiores
                com clientes que exigiam rastreabilidade total.
              </li>
              <li>
                <b>Eficiência e Retenção:</b> Ao eliminar a fragmentação da
                informação, aumentamos a satisfação dos clientes internos e
                externos, reduzindo drasticamente o churn (cancelamento) de
                parceiros que antes sofriam com a falta de dados.
              </li>
              <li>
                <b>Redução de Custos Operacionais:</b> A centralização no
                dashboard único permitiu que a equipe gerenciasse um volume 3x
                maior de fretes sem a necessidade de novas contratações,
                otimizando o ROI do departamento de tecnologia.
              </li>
            </ul>
            <p>
              {" "}
              Liderar o design da Navegam foi um desafio de alta complexidade
              que exigiu converter incertezas técnicas em soluções intuitivas.
              Este projeto não apenas entregou um produto funcional, mas
              estabeleceu um novo padrão de excelência em tecnologia para a
              empresa.
            </p>
          </div>
          <EndSection />
        </SystemContent>
      </DividedScroll>
    </div>
  );
}
