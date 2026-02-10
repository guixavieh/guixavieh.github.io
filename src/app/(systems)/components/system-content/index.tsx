import "./_style.scss";

interface IProps {
  children?: React.ReactNode[] | React.ReactNode;
}

export default function SystemContent(props: IProps) {
  return <div className="component system-content">{props.children}</div>;
}
