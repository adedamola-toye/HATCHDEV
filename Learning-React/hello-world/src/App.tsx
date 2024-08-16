import ListGroup from "./components/ListGroup"

function App(){
  const items = ["Lagos", "Tokyo", "Seoul", "Medina", "London"];
  return <div><ListGroup items = {items} heading = "Cities"/></div>
}

export default App