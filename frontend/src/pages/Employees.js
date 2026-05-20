import { useEffect, useState } from 'react';
import axios from 'axios';

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/employees/')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container mt-5">

            <h1>Працівники</h1>

            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ПІБ</th>
                        <th>Посада</th>
                        <th>Зарплата</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.full_name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default Employees;