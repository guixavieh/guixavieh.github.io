import Image from "next/image";
import "./_style.scss";
import Link from "next/link";

interface IProps {
  imagePath: string;
  title: string;
  description: string;
  tags: string[];
  children?: React.ReactNode | React.ReactNode[];
}

export default function SystemSummary(props: IProps) {
  return (
    <div className="component system-summary">
      <Link href={"/"}>
        <button className="back">Voltar</button>
      </Link>
      <div className="header">
        <div className="top">
          <Image
            src={props.imagePath}
            height={20}
            width={20}
            alt="system-icon"
          />
          <span className="title">{props.title}</span>
        </div>
        <span className="description">{props.description}</span>
      </div>
      <main>{props.children}</main>
      <hr />
      <div className="tag-list">
        {props.tags.map((t) => (
          <span key={`tag_${t}`} className="tag">
            {t}
          </span>
        ))}
      </div>
      <Link href={`/#contact`}><button className="contact">Vamos conversar</button></Link>
    </div>
  );
}
