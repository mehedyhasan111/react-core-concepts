import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['shakib khan' , 'arfin shuvo','kaji maruf','jontu da']
  const products = [
    {name:'Photoshop',price:'$99.90'},
    {name:'Illustrator',price:'$100.00'},
    {name:'PDF Reader',price:'$10.00'},
    {name:'premiure el',price:'$234.00'}
];

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react  paragraph </p>
        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            nayoks.map(nayok=> <li>{nayok}</li>)
          }
          {
            products.map(pd=><li>{pd.name}</li>)
          }
        </ul>





        {/* <Person name={nayoks[0]} nayika="shabana"> </Person>
        <Person name="Bappraj" nayika="none"> </Person>

        <Person name="rubel" nayika="moushumi"> </Person>
        <Person name="salman shah" nayika="shabnur"> </Person> */}


        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {
          products.map(pd=><Product product={pd}></Product>)

        }



        
      </header>
    </div>
  );
}



function Counter(){
  const [count,setCount] = useState(0);
  // first way
  // const handleIncrease = () => setCount(count+1);
 

  return(
    <div>
      <h3>Count:{count}</h3>
      {/* first way */}
      {/* <button onClick={handleIncrease}>Increase</button> */}

      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>

    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=> setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    color:'black',
    float:'left'

  }
const {name,price}=props.product;
  return(
    <div style={productStyle}>
      {/* first way */}
      {/* <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy Now</button> */}

      {/* second way */}
      {/* <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Buy Now</button> */}

      {/* third way */}
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
      
    </div>
  );
}

// function Person(props){
//   const style = {
//     border : '2px solid red',
//     // backgroundColor : 'white',
//     color : 'cyan',
//     margin : '10px'
//   }
//   return (
//     <div style={style}>
//       <h1>{props.name}</h1>
//       <p>Hero of : {props.nayika}</p>
//     </div>
 
//   );

// }
export default App;
