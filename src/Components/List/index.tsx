import { ReactNode } from "react";
import * as S from "./styles";

type ListProps = {
  children: ReactNode;
};

const List = ({ children }: ListProps): JSX.Element => {
  return (
    <S.ListMain>
      <header>
        <span>Symbol</span>
        <span>Last Price</span>
        <span>Bid Price</span>
        <span>Ask Price</span>
        <span>Price Change</span>
      </header>
      <div>{children}</div>
    </S.ListMain>
  );
};

export default List;
