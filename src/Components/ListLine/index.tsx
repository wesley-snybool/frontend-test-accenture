import { ListLineProps } from "../../types";

const ListLine = ({ symbol, p, a, b, q }: ListLineProps): JSX.Element => {
  return (
    <div>
      <span>{symbol}</span>
      <span>{p}</span>
      <span>{b}</span>
      <span>{a}</span>
      <span>{q}</span>
    </div>
  );
};

export default ListLine;
