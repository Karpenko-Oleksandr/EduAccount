import { useEffect, useState } from 'react';
import axios from 'axios';

function Employees() {

    const [employees, setEmployees] = useState([]);

    const [formData, setFormData] = useState({
        full_name: '',
        position: '',
        salary: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        axios.get('http://127.0.0.1:8000/api/employees/')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/employees/', formData)
            .then(() => {

                fetchEmployees();

                setFormData({
                    full_name: '',
                    position: '',
                    salary: '',
                    email: '',
                    phone: ''
                });

            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">

            <h1>Працівники</h1>

            <div className="card p-4 mt-4">

                <h3>Додати працівника</h3>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                name="full_name"
                                placeholder="ПІБ"
                                className="form-control"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                name="position"
                                placeholder="Посада"
                                className="form-control"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="number"
                                name="salary"
                                placeholder="Зарплата"
                                className="form-control"
                                value={formData.salary}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <button className="btn btn-dark">
                        Додати
                    </button>

                </form>

            </div>

            <table className="table table-striped mt-5">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>ПІБ</th>
                        <th>Посада</th>
                        <th>Зарплата</th>
                        <th>Email</th>
                        <th>Телефон</th>
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
                            <td>{employee.phone}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Employees;