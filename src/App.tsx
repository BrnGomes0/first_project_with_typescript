
// Variables or Attributes
let name: any; // Don't recommended
let age: number | string; // Number or String
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]

// let person: Object; // That form is not ideal

// type Person = {
//   name: string;
//   age?: number; // When put the ?, the atributte be the optional
// }

// let person: Person = {
//   name: 'Bruno Bosch Cotuca CACACADA',
//   age:21,
// };

// let lostOfPeople: Person[];

// Functions

// function printName(name:string){
//   console.log(name)
// }

// printName("BRUNO")

let printName: Function;
let printFirstName: (firstName: string) => string;
let printLastName: (lastName: string) => void;
let printAge: (age:number) => number;

function App () {
  return(
    <div className="font-bold">
      
    </div>
  );
}

export default App;