import { useEffect, useState } from "react";

import * as S from "./styles";
import List from "./Components/List";
import ListLine from "./Components/ListLine";
import { ListLineProps } from "./types";

function App() {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [eventChange, setEventChange] = useState<ListLineProps>({
    a: "",
    b: "",
    p: "",
    q: "",
    s: "",
  });

  const WS_URL = "wss://stream.binance.com:9443/ws/";

  const symbolsEnum: Record<string, string> = {
    BTCUSDT: "btcusdt@trade",
    ETHUSDT: "ethusdt@trade",
    BNBUSDT: "bnbusdt@trade",
  };

  const socketConnections: Record<string, any> = {}; // Armazena as conexões do WebSocket

  const handleAddSymbol = (flag: string) => {
    if (!symbols.includes(flag)) {
      // Cria uma nova conexão WebSocket ao adicionar um novo símbolo
      const socket = new WebSocket(`${WS_URL}${symbolsEnum[flag]}`);
      socketConnections[flag] = socket;
      socket.onopen = () => console.log(`Conectado a ${flag}`);
      socket.onerror = () => console.log(`Erro ao conectar a ${flag}`);
      socket.onmessage = (event) => {
        setEventChange(JSON.parse(event.data));
      };

      setSymbols((prev) => [...prev, flag]);
    } else {
      // Fecha e remove a conexão WebSocket ao remover um símbolo
      const socket = socketConnections[flag];
      if (socket) {
        socket.close();
        delete socketConnections[flag];
      }
      let newState = symbols.filter((item) => item !== flag);
      setSymbols(newState);
    }
  };

  useEffect(() => {
    console.log(symbols);
    console.log(eventChange, "eventos");
  }, [symbols, eventChange]);

  const criptoSymbols = [
    {
      code: "BTCUSDT",
      id: 1,
    },
    {
      code: "ETHUSDT",
      id: 2,
    },
    {
      code: "BNBUSDT",
      id: 3,
    },
  ];

  return (
    <S.Main>
      <S.BoxSelector>
        <S.ContainerCheckBox>
          {criptoSymbols.map((item) => {
            return (
              <div key={`${item.id}`}>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  id={`${item.id}`}
                  name="item.code"
                  onClick={() => handleAddSymbol(item.code)}
                />
                <span>{item.code}</span>
              </div>
            );
          })}
        </S.ContainerCheckBox>
        <S.MainButton>
          <button>Add to List</button>
        </S.MainButton>
      </S.BoxSelector>

      <List>
        {symbols.map((item) => {
          return <ListLine key={`${item}`} {...eventChange} />;
        })}
      </List>
    </S.Main>
  );
}

export default App;
