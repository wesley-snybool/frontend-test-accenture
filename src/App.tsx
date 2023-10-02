import { useEffect, useMemo, useState } from "react";

import useWebSocket, { ReadyState } from "react-use-websocket";

import axios from "axios";

import { useId } from "react";

import * as S from "./styles";
import Table from "./Components/List";
import List from "./Components/List";
import ListLine from "./Components/ListLine";

function App() {
  const [symbols, setSymbols] = useState<string[]>([]);

  const WS_URL = "wss://stream.binance.com:9443/ws/";
  const currencyPairs = ["btcusdt@trade", "ethusdt@trade", "bnbusdt@trade"];

  enum SymbolsEnum {
    "BTCUSDT" = "ethusdt@trade",
    "ETHUSDT" = "ethusdt@trade",
    "BNBUSDT" = "bnbusdt@trade",
  }

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

  /*   currencyPairs.forEach((currency) => {
    const { lastJsonMessage } = useWebSocket<{ p: string }>(
      `${WS_URL}${currency}`,
      {
        onOpen: () => console.log(`Conectado a ${currency}`),
        onError: () => console.log(`Erro ao conectar a ${currency}`),
        shouldReconnect: () => true,
        reconnectInterval: 1000,
        onMessage: () => {
          console.log(lastJsonMessage);
        },
      }
    );
  }); */

  const handleAddSymbol = (flag: string) => {
    if (!symbols.includes(flag)) {
      setSymbols((prev) => [...prev, flag]);
    } else {
      let newState = symbols.filter((item) => item !== flag);
      setSymbols(newState);
    }
  };

  const handleAddCripto = () => {};

  useEffect(() => {
    console.log(symbols);
  }, [symbols]);

  const data = [
    {
      lastPrice: "0.2523",
      symbol: "BTCUSDT",
      bidPrice: "0.2523",
      askPrice: "0.2523",
      priceChange: "0.2523",
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
        {data.map((item) => {
          return <ListLine data={item} />;
        })}
      </List>
    </S.Main>
  );
}

export default App;
