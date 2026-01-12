
import './App.css'
import Card from './components/card';
import Form from './components/form';
import Layout from './components/Layout';
import StatusMessage from './components/StatusMessage';

function App() {

  return (
    <Layout>
      <Form/>
     <h2>Welcome to the Dashboard</h2>
      <StatusMessage status="success" />
      <Card name="User Profile" age={25} email="user@example.com" />
    </Layout>
  )
}

export default App
