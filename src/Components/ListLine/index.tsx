type ListLineProps = {
  data: {
    lastPrice: string;
    symbol: string;
    bidPrice: string;
    askPrice: string;
    priceChange: string;
  };
};

const ListLine = ({ data }: ListLineProps): JSX.Element => {
  return (
    <div>
      <span>{data.symbol}</span>
      <span>{data.lastPrice}</span>
      <span>{data.bidPrice}</span>
      <span>{data.askPrice}</span>
      <span>{data.priceChange}</span>
    </div>
  );
};

export default ListLine;
