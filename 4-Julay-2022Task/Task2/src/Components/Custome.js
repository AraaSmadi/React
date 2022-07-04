import {useState } from 'react';
function Custome(em, pa){
const [email , setEmail] = useState("araa2@gmail.com");
const [pass , setpass] = useState("araa12345");
const [Flag , setflag] = useState(false);
const Handlechange = () =>{
    if(em ==email && pa ==pass)
   {
    return  window.alert('Login is success');
    Flag = true ;
   }else{
    window.alert('Login is danger');
   }
}
return(
   [email ,pass , Flag , Handlechange]
   )
}
export default Custome ;