import './App.css';
import UserDetails from './secao3/UserDetails';

const pessoas = [
  {nome: 'Alice', profissao: 'Engineer', idade: 18},
  {nome: 'Bob', profissao: 'Student', idade: 17},
  {nome: 'Charlie', profissao: 'Artist', idade: 25}
];

function App() {
  return (
    <>
      <UserDetails pessoas={pessoas}/>
    </>
  );
}

export default App;
