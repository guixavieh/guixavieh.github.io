import Link from "next/link";
import "./_style.scss";

export function LogTopbar() {
  return (
    <div className="component log-topbar">
      <nav>
        <Link href={"/navegamlog-web#general"}>
          <button>Visão geral</button>
        </Link>
        <Link href={"/navegamlog-web#execution"}>
          <button>Execução</button>
        </Link>
        <Link href={"/navegamlog-web#result"}>
          <button>Resultado</button>
        </Link>
        <Link href={"/navegamlog-web#conclusion"}>
          <button>Conclusão</button>
        </Link>
      </nav>
    </div>
  );
}
