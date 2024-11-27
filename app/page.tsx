import Card, { CardProos } from "./components/card/Card";    

const listaTarjetas: CardProos[] = [    
  { title: "Titulo de la tarjeta", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta dos", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta tres", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta cuatro", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta cinco", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta seis", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta siete", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta ocho", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta nueve", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta diez", description: "Descripción de la tarjeta", likes: 399 },    
  { title: "Titulo de la tarjeta once", description: "Descripción de la tarjeta", likes: 399 },  
];

export default function Home() {
  return (    
    <div>
      <h2 className="text-blue-800 text-4xl animate-bounce font-Anaheim font-bold mt-2 ml-4">Proyecto Cabrales Cruz Raciel Julian</h2>
      <div className="flex flex-grow gap-2 p-4">
        {listaTarjetas.map((tarjeta, index) => (
          <div key={index}>
            <Card
              title={tarjeta.title}
              description={tarjeta.description}
              likes={tarjeta.likes}
            />
          </div>
        ))}
      </div>
    </div>    
  );
}
