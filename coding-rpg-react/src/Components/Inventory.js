import '../App.css';
function Inventory(props) {
  return (
    <div>
        <h2>Inventory</h2>
        <h4>Name: {props.Hero.Name}</h4>
        <button onClick={props.Back}><h3>Back</h3></button>
    </div>
  );
}

export default Inventory;