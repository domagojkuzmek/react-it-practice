function App() {
  let date = new Date();
  let currentTime: number = date.getHours();
  console.log(currentTime);

  return (
    <div
      className={`w-dvw h-dvh ${currentTime > 12 ? "bg-black" : "bg-red-400"}`}
    >
      <h1 className="text-white">React</h1>
    </div>
  );
}

export default App;
