import "./_style.scss";

interface IProps {
  fixed?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
}

export function DividedScroll(props: IProps) {
  return (
    <div className="component divided-scroll">
      <div className="left-side">{props.fixed}</div>
      <div className="right-side">{props.children}</div>
    </div>
  );
}
