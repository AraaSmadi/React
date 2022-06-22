function Mapping(){

    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    return (
        <div>
        <h5>Mapping</h5>
        <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">color</th>
    </tr>
  </thead>
  <tbody>
  {Fruits.map(f => (
     <tr>
     <th scope="row">{f.id}</th>
     <td>{f.name}</td>
     <td>{f.color}</td>
   </tr>
  ))}
    </tbody>
</table>
       
        </div>
        );
}
export default Mapping ;