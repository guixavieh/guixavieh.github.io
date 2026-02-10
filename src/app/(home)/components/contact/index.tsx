import "./_style.scss";

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <span className="title">Contato</span>
      <span className="description">
        Entre em contato comigo através do formulário abaixo ou através das
        minhas redes
      </span>
      <form
        action="mailto:you@email.com?subject=Contact from Portfolio"
        method="POST"
        encType="text/plain"
      >
        <input type="text" placeholder="Seu nome" />
        <input type="text" placeholder="Seu e-mail" />
        <textarea placeholder="Deixe sua mensagem..." />
        <button>Enviar mensagem</button>
      </form>
    </section>
  );
}
