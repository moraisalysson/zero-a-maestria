import './App.css';
import UserDetails from './secao3/UserDetails';
import CarDetails from './secao4/Cars';

const people = [
  {nome: 'Alice', profissao: 'Engineer', idade: 18},
  {nome: 'Bob', profissao: 'Student', idade: 17},
  {nome: 'Charlie', profissao: 'Artist', idade: 25}
];

let cars = [
  { model: "Toyota Corolla", kilometers: 50000, year: 2018, brand: "Toyota" },
  { model: "Honda Civic", kilometers: 70000, year: 2017, brand: "Honda" },
  { model: "Ford Mustang", kilometers: 30000, year: 2019, brand: "Ford" },
  { model: "Chevrolet Camaro", kilometers: 40000, year: 2020, brand: "Chevrolet" },
];

function App() {
  return (
    <>
      <h1>Título do desafio do CSS</h1>
      <UserDetails pessoas={people} />
      <CarDetails cars={cars} />
    </>
  );
}

export default App;
