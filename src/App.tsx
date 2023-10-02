import { useEffect, useMemo, useState } from "react";

import useWebSocket, { ReadyState } from "react-use-websocket";

import axios from "axios";

import { useId } from "react";

import * as S from "./styles";

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

  return (
    <>
      <span>ETC: {"lastJsonMessage?.p"}</span>

      <span>BTC: {"lastJsonMessage?.p"}</span>

      <span onClick={handleAddCripto}>Adicionar Cripto</span>

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
    </>
  );
}

export default App;
