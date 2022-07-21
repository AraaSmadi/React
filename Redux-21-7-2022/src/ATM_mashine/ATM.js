import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposite, withdraow } from "../Store/Action";

 function ATM() {
    const [number, setnumber] = useState({});
    const dispatch = useDispatch();
    const result = useSelector((state) => state.result);
    return (
        <div>
            <br />
            <label>deposit:</label><br />
            <input type="number" onChange={(e) => setnumber(e.target.value)} />

            <button   onClick={() => dispatch(deposite(+number))}>deposit</button>

            <button onClick={() => dispatch(withdraow(-number))}>Withdraw</button>
            <h3> {result}</h3>
        </div>




    );





}
export default ATM 