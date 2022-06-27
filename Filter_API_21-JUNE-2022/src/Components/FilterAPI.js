// import React from "react";
// class FilterAPI extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state({
//             employees: [],
//             Fl: '',
//         })
//     }

   
//     handlechange = (event) => {
//         this.setState({ Fl:event.target.value })
//     }
//     componentDidMount() {
//        fetch('https://www.breakingbadapi.com/api/characters')
//             .then((response) => response.json())
//             .then(employeesli => {
//                 this.setState({ employees: employeesli });
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" placeholder="Search......" onChange={this.handlechange}/>
//                 <table class="table">
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>{
//                         this.state.employees.filter((name) => name.name.toLowerCase().includes(this.state.Fl)).map((employee) => (
//                             <tr>
//                                 <th scope="row">{employee.id}</th>
//                                 <td>{employee.name}</td>
//                             </tr>
//                         ))
//                     }


//                     </tbody>
//                 </table>

//             </div>
//         )
//     }


// }
// export default FilterAPI;



import React from "react";

class FilterAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: [],
            search: '',
        }

    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then((response) => response.json())
            .then(employeeList => {
                this.setState({ employee: employeeList });
            });
    }
    handlechange = (e) => {
        this.setState({ search: e.target.value })
    }

    render() {
        return (

            <>
                <br /><br /><br />
                <input type="text" id="search" placeholder='Search...' onChange={this.handlechange}></input>
                <br /><br />
                <table class="table">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employee.filter((name) => name.name.toLowerCase().includes(this.state.search)).map((user) => (
                                <tr>
                                    <th scope="row">{user.char_id}</th>
                                    <td>{user.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default FilterAPI;