function Sorting(){

    const numbers = ['Z' , 'A' , 'Q ','B', 'C', 'Y' ,'S' ,'W '];
    const sort = numbers.sort();
    console.log(sort);
    
    return (
        <div>
        <h5>Sorting</h5>
         {sort.join(' , ')}
       
        </div>
        );
}
export default Sorting ;