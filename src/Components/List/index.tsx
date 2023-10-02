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
        <span>Symbol</span>
        <span>Symbol</span>
        <span>Symbol</span>
        <span>Symbol</span>
        <span>Symbol</span>
      </header>
      <div>{children}</div>
    </S.ListMain>
  );
};

export default List;
