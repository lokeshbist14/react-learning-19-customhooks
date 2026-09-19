import useOnlineStatus from "../hooks/useOnlineStatus";

function OnlineStatusExample() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Example 9 - useOnlineStatus</h2>

      <h3>
        Status: {isOnline ? "Online " : "Offline "}
      </h3>
    </div>
  );
}

export default OnlineStatusExample;