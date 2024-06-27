import User from "./User";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-black w-1/2 m-auto rounded-2xl shadow-lg shadow-red-700 items-center  text-center">
          <h1 className="text-white text-2xl">Greeting</h1>
          <User name="hello" color="orange" backgroundcolor="red"/>
          <User name="no" color="pink" backgroundcolor/>
          <User name="hello" color="green" />
          <User name="hello" color="red" />
          <User/>
        </div>
      </div>
    </>
  );
}

export default App;
