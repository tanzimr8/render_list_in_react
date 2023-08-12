import './App.css';
import Work from './Work'
const workHistory = [
  {
    id: 4,
    title: 'Software Engineer',
    description: 'Software Engineer in Verafin. Started in February 2024.',
    role: ['create a claim','assist inusred', 'adjust claim'],
  },
  {
    id: 3,
    title: 'CSR',
    description: 'Customer Service rep in the claims department. Started in November 2022.',
    role: ['create a claim','assist inusred', 'adjust claim'],
  },
  {
    id: 2,
    title: 'Cashier',
    description: 'Front-end cashier in Sobeys. Started in September 2022.',
    role: ['Serve customer','provide product knowledge', 'Front end clerk'],
  },
  {
    id: 1,
    title: 'Web dev',
    description: 'Web developer in HYPE Dhaka. Started in June 2018 till June 2022.',
    role: ['Develope website','Revamp website', 'Designining wireframe'],
  },
];

function App() {
  return (
    <div>
      <h1>Rendering list in React</h1>
      <h2>Work History</h2>
      <Work workHistory={workHistory} />
    </div>
  );
}

export default App;
