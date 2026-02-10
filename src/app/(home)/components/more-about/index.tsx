import "./_style.scss";

export default function MoreAboutSection() {
  return (
    <section id="more-about" className="more-about">
      <span className="title">Mais sobre mim</span>
      <p>
        Sou um Product Designer focado na excelência técnica e visual. Minha
        especialidade é transformar requisitos complexos em interfaces limpas e
        pixel-perfect. Com um background sólido em Design Gráfico, atuo
        diretamente na construção de componentes e protótipos de alta
        fidelidade, garantindo que cada interação seja intuitiva. Gosto de estar
        imerso nos detalhes do projeto, entregando soluções que unem
        funcionalidade robusta com uma estética refinada.
      </p>

      <span className="smaller-title">Minha formação</span>
      <div className="formation">
        <p>
          {" "}
          Designer multidisciplinar com formação em Design Gráfico (Faculdade
          Martha Falcão) e especialização em UX Design (Faculdade Anhanguera).
        </p>
      </div>
    </section>
  );
}
