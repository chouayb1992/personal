// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import{Card,Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(){

  this.state = {
  person: {
  fullName : "Chouayb Attia",
  bio : "My goal is to discover the world!", 
  imgSrc : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", 
  profession : "Software Engineer",
 },
 shows : false
}
  }
  toggleButton = () => {
    this.setState({shows : !this.state.shows})
}

 render() {
   
const fullName = this.state.person.fullName;
const bio = this.state.person.bio;
const imgSrc = this.state.person.imgSrc;
const profession = this.state.person.profession;
const shows = this.state.shows;

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
                {shows} && (
            <div>
                <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={imgSrc} alt={fullName} />
                 <Card.Body>
                   <Card.Title>{fullName}</Card.Title>        
                      <p>{bio}</p>
                      <p>{profession}</p>
                 </Card.Body>
                </Card>
            </div>
                )
                 <Button variant="primary" onClick={this.toggelButton} >Show/ Hide Profile</Button>
        </div>
           )}
      
 }

export default App;