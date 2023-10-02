import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";

function App() {
  const WS_URL = "wss://stream.binance.com:9443/ws/";
  const currency = "btcusdt@trade";

  const { lastJsonMessage } = useWebSocket<{ p: string }>(
    `${WS_URL}${currency}`,
    {
      onOpen: () => console.log("Conectado"),
      onError: () => console.log("Error"),
      shouldReconnect: () => true,
      reconnectInterval: 1000,
      onMessage: () => console.log(),
    }
  );

  useEffect(() => {
    console.log(lastJsonMessage);
  }, [lastJsonMessage]);

  return (
    <>
      <span>ETC: {lastJsonMessage?.p}</span>

      <span>BTC: {lastJsonMessage?.p}</span>
    </>
  );
}

export default App;
