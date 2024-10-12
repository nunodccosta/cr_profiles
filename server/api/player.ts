export default defineEventHandler((event) => {
  const apiKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM5MTg3ZGIzLTg5OGYtNDJkYi1iNzJiLTg3ZDk4YWMxNzJhOSIsImlhdCI6MTcyMTQ4MTg2MSwic3ViIjoiZGV2ZWxvcGVyLzAzZjQ2NDgwLTZiMzctNTY4Yy00NThmLWU1OGVhMmRiN2RmNCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4OS4xNTMuNjguOTEiXSwidHlwZSI6ImNsaWVudCJ9XX0.thrRZhViq3F_y8TGncyO-YwcgmIw7akEJRwyAhFJ5DHARPdC57Jk0gyfadK3Q6aFfl4o45i8B7EVo-pF17ZzpQ";
  let player;

  async function fetchPlayer(playerId: string) {
    try {
      const response = await fetch(
        `https://api.clashroyale.com/v1/players/%23${playerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${apiKey}`,
          },
        }
      );
      const result = await response.json();
      return result;
    } catch {
      console.error("Failed");
      return "Error";
    }
  }

  player = fetchPlayer("20YGY2LYJ");
  console.log(player);
  if (player) return player;
  else return "nothing";
});
