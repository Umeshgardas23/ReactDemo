function App() {
  const Heading = "This is heading";
  const arr = [{ name: "Rahul" }, { name: "Kapil" }, { name: "Prathm" }];

  return (
    <div className="App">
      <h1>{Heading}</h1>
      {arr.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
