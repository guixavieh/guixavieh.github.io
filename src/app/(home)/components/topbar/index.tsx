import Link from "next/link";
import "./_style.scss";

export function Topbar() {
  return (
    <div className="component topbar">
      <nav>
        <Link href={"/#about"}>
          <button>Sobre</button>
        </Link>
        <Link href={"/#skills"}>
          <button>Habilidades</button>
        </Link>
        <Link href={"/#experience"}>
          <button>Experiência</button>
        </Link>
        <Link href={"/#contact"}>
          <button>Contato</button>
        </Link>
      </nav>
    </div>
  );
}
