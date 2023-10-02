type ListLineProps = {
  data: {
    p: string;
    symbol: string;
    a: string;
    b: string;
    q: string;
  };
};

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
