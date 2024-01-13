
import './App.css';
import Card, {Header} from "./components/Card";
import Item from "./components/Item";
import contacts from "./components/contact";
import emojipedia from './components/emojipedia';
import Detail from "./components/map/Detail";
import map from "./components/map/map";

// using map function 
// you need to pass a function in to the map function 
// for example 
function createCard(contact){
  // contact will be single because it each element that will be send one by one 
  return (
    <Card key={contact.id} name={contact.name} img="https://picsum.photos/200" tel={contact.phone} email={contact.email} id={contact.id} />
  )
}

function showEmoji(emoji){
  return (
    <Detail key={emoji.id} name={emoji.name} meaning={emoji.meaning} emoji={emoji.emoji} />
  )
}


function App() {
  return (
    <div className="App">
      <Header title="Pratical App" />

      {/* the map call can replace these three card call and pass the function name too to it like this  */}
      {/* using map to access json or array  */}
      {contacts.map(createCard)}

{/* replace these  */}
      {/* <Card name={contacts[0].name} img="https://picsum.photos/200" tel={contacts[0].phone} email={contacts[0].email} />
      <Card name={contacts[1].name} img="https://picsum.photos/200" tel={contacts[1].phone} email={contacts[1].email} />

      <Card name={contacts[2].name} img="https://picsum.photos/200" tel={contacts[2].phone} email={contacts[2].email} /> */}

      <Item itemone="Hello" itemtwo="say something" itemthree="Mad o" link="https://google.com" />

      {emojipedia.map(showEmoji)}
      {map()}
    </div>
  );
}

export default App;
