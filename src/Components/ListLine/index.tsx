import { ListLineProps } from "../../types";

import * as S from "./styles";

const ListLine = ({ s, p, a, b, q }: ListLineProps): JSX.Element => {
  return (
    <S.Main>
      <span>{s}</span>
      <span>{Number(p).toFixed(2)}</span>
      <span>{Number(b).toFixed(2)}</span>
      <span>{Number(a).toFixed(2)}</span>
      <span>{Number(q).toFixed(2)}</span>
    </S.Main>
  );
};

export default ListLine;
