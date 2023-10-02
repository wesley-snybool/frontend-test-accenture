import { useEffect, useState } from "react";
import * as S from "./styles";
import List from "./Components/List";
import ListLine from "./Components/ListLine";
import { ListLineProps } from "./types";

function App() {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [symbolData, setSymbolData] = useState<Record<string, ListLineProps>>(
    {}
  );

  const WS_URL = "wss://stream.binance.com:9443/ws/";

  const symbolsEnum: Record<string, string> = {
    BTCUSDT: "btcusdt@trade",
    ETHUSDT: "ethusdt@trade",
    BNBUSDT: "bnbusdt@trade",
    LTCBTC: "ltcbtc@trade",
  };

  const socketConnections: Record<string, WebSocket> = {};

  const handleAddSymbol = (flag: string) => {
    if (!symbols.includes(flag)) {
      const socket = new WebSocket(`${WS_URL}${symbolsEnum[flag]}`);
      socketConnections[flag] = socket;
      socket.onopen = () => console.log(`Conectado a ${flag}`);
      socket.onerror = () => console.log(`Erro ao conectar a ${flag}`);
      socket.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        console.log(JSON.parse(event.data));

        setSymbolData((prevData) => ({
          ...prevData,
          [flag]: eventData,
        }));
      };

      setSymbols((prev) => [...prev, flag]);
    } else {
      const socket = socketConnections[flag];
      if (socket) {
        socket.close();
        delete socketConnections[flag];
      }
      let newState = symbols.filter((item) => item !== flag);
      setSymbols(newState);

      setSymbolData((prevData) => {
        const newData = { ...prevData };
        delete newData[flag];
        return newData;
      });
    }
  };

  useEffect(() => {
    console.log(symbols);
  }, [symbols]);

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
    {
      code: "LTCBTC",
      id: 4,
    },
    {
      code: "NEOBTC",
      id: 5,
    },
    {
      code: "BNBBTC",
      id: 6,
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
          const symbolInfo = symbolData[item];
          return <>{symbolInfo && <ListLine key={item} {...symbolInfo} />}</>;
        })}
      </List>
    </S.Main>
  );
}

export default App;
