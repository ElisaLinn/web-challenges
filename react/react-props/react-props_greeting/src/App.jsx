// Greeting Komponente - akzeptiert eine 'name' prop
function Greeting({ name }) {
  // Liste der Coach-Namen (du kannst hier echte Coach-Namen einfügen)
  const coaches = ["Alex", "Maria", "Jonas", "Sarah"];
  
  // Conditional Rendering: Prüfen ob der Name ein Coach ist
  const isCoach = coaches.includes(name);
  
  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}

export default function App() {
  return <Greeting name="Elisa" />;
}
