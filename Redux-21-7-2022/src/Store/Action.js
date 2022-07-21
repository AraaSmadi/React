import { type } from "@testing-library/user-event/dist/type";

export const deposite = (number) =>{
return { type:"deposite" , payload: number }
}
export const withdraow = (number) =>{
 return { type:"withdraow" , payload: number }
}