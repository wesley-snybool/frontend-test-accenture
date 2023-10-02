import { ListLineProps } from "../../types";

import * as S from "./styles";

const ListLine = ({ s, p, a, b, q }: ListLineProps): JSX.Element => {
  return (
    <S.Main>
      <span>{s}</span>
      <span>{p}</span>
      <span>{b}</span>
      <span>{a}</span>
      <span>{q}</span>
    </S.Main>
  );
};

export default ListLine;
