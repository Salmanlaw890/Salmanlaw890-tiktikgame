import Game from "./components/Game";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-bold">Tik Tik Game</h1>
      <div>
        <Game/>
      </div>
    </main>
  );
}
