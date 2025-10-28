import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
  id: 1337,
  name: '🍌 Banana',
  color: 'yellow',
},
{
  id:1223,
name:'strawberry',
color:'red',
},
{id:1263,
name:'orange',
color:'orange',
}, {
  id:5223,
name:'grape',
color:'green',
},
{
  id:3223,
name:'apple',
color:'red',
},
  ];
  const FruitLis = fruits.map((fruit)=> {
    return (
      <li key={fruit.id}>
        <Card
        id={fruit.id}
        name={fruit.name}
        color={fruit.color}
        />
        </li>
    );
  });

  return (
    <div className="app">
      <Card name="🍌 banana" />
      {FruitLis}
    </div>
  );
}
