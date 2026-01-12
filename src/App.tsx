
import './App.css'
import Card from './components/card';
import Form from './components/form';

function App() {

  return (
    <>
    <Form/>
      <Card name="John Doe" age={30} email="john.doe@example.com" />
      <Card name="Jane Smith" age={25} email="jane.smith@example.com" />
      <Card name="Alice Johnson" age={28} email="alice.johnson@example.com" />
      <Card name="Bob Brown" age={35} email="bob.brown@example.com" ><h3>This is a child element</h3></Card>
      <Card name="Jane Smith" age={25} email="jane.smith@example.com" ><h3>This is a child element</h3></Card>
    </>
  )
}

export default App
