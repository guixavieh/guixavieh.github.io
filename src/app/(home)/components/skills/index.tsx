"use client";
import Image from "next/image";
import { useState } from "react";
import "./_style.scss";

interface ISkillProps {
  title: string;
  description: string;
}

const skills: ISkillProps[] = [
  {
    title: "Product Design",
    description:
      "Liderar o ciclo do produto do conceito ao lançamento, alinhando objetivos de negócio às necessidades do usuário.",
  },
  {
    title: "UI Design",
    description:
      'Criação de interfaces visuais refinadas ("pixel-perfect") com foco em tipografia, cores e hierarquia visual.',
  },
  {
    title: "UX Design",
    description:
      "Desenhar fluxos lógicos e centrados no usuário para resolver problemas complexos e reduzir atritos.",
  },
  {
    title: "Design Systems",
    description:
      "Construção de bibliotecas de componentes escaláveis para garantir consistência visual e agilidade no código.",
  },
  {
    title: "Arquitetura da Informação",
    description:
      "Estruturar dados complexos e navegação para tornar informações densas fáceis de escanear e entender.",
  },
  {
    title: "Prototipagem de Alta Fidelidade",
    description:
      "Criar protótipos interativos no Figma para simular a experiência final em testes e validações.",
  },
  {
    title: "Visualização de Dados",
    description:
      "Traduzir métricas e dados brutos em gráficos claros e acionáveis que facilitam a tomada de decisão.",
  },
  {
    title: "User Research",
    description:
      "Conduzir entrevistas e análise de dados para descobrir dores reais e embasar decisões de design.",
  },
  {
    title: "Testes de Usabilidade",
    description:
      "Validar soluções com usuários reais para identificar falhas e ajustar o produto antes do desenvolvimento.",
  },
  {
    title: "Design Responsivo",
    description:
      "Conduzir entrevistas e análise de dados para descobrir dores reais e embasar decisões de design.",
  },
  {
    title: "Motion Design",
    description:
      "Melhorar a usabilidade e o feedback do sistema através de animações funcionais e micro-interações.",
  },
  {
    title: "Integração com IA",
    description:
      "Uso de ferramentas de Inteligência Artificial para otimizar fluxos, gerar assets e aumentar a produtividade.",
  },
];

function SkillBox(props: ISkillProps) {
  return (
    <div className="component skill-box">
      <Image
        alt="star-banner"
        height={25}
        width={25}
        src="img/icons/star-banner.svg"
      />
      <span className="title">{props.title}</span>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default function SkillsSection() {
  const [open, setOpen] = useState(false);

  const firstSkills = skills.slice(0, 4);

  return (
    <section id="skills" className="skills">
      <div className="title">Habilidades</div>
      <div className="skills-list">
        {(open ? skills : firstSkills).map((s) => {
          return <SkillBox key={"s_" + s.title} {...s} />;
        })}
      </div>
      <div onClick={() => setOpen((l) => !l)} className="show-more">
        {open ? (
          <span>-</span>
        ) : (
          <Image
            src={"/img/icons/plus.svg"}
            alt="plus"
            height={15}
            width={15}
          />
        )}
        <span className="button">
          Ver {open ? "menos" : "mais"} habilidades
        </span>
      </div>
    </section>
  );
}
