import { ListLineProps } from "../../types";

const ListLine = ({ data }: ListLineProps): JSX.Element => {
  return (
    <div>
      <span>{data.symbol}</span>
      <span>{data.p}</span>
      <span>{data.b}</span>
      <span>{data.a}</span>
      <span>{data.q}</span>
    </div>
  );
};

export default ListLine;
