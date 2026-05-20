import { useEffect, useState } from 'react';
import axios from 'axios';

function FinancialOperations() {

    const [operations, setOperations] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        operation_type: 'income',
        amount: '',
        operation_date: ''
    });

    const [balance, setBalance] = useState(0);

    useEffect(() => {

        fetchOperations();

    }, []);

    const fetchOperations = () => {

        axios.get('http://127.0.0.1:8000/api/operations/')
            .then(response => {

                setOperations(response.data);

                calculateBalance(response.data);

            })
            .catch(error => {
                console.log(error);
            });

    };

    const calculateBalance = (data) => {

        let total = 0;

        data.forEach(operation => {

            if (operation.operation_type === 'income') {
                total += parseFloat(operation.amount);
            } else {
                total -= parseFloat(operation.amount);
            }

        });

        setBalance(total);

    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/operations/', formData)
            .then(() => {

                fetchOperations();

                setFormData({
                    title: '',
                    operation_type: 'income',
                    amount: '',
                    operation_date: ''
                });

            })
            .catch(error => {
                console.log(error);
            });

    };

    const handleDelete = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/operations/${id}/`)
            .then(() => {
                fetchOperations();
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (

        <div className="container mt-5">

            <h1>Фінансові операції</h1>

            <div className="card p-4 mt-4">

                <h3>Додати операцію</h3>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <input
                                type="text"
                                name="title"
                                placeholder="Назва операції"
                                className="form-control"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <select
                                name="operation_type"
                                className="form-control"
                                value={formData.operation_type}
                                onChange={handleChange}
                            >

                                <option value="income">
                                    Дохід
                                </option>

                                <option value="expense">
                                    Витрата
                                </option>

                            </select>

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                type="number"
                                name="amount"
                                placeholder="Сума"
                                className="form-control"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                type="date"
                                name="operation_date"
                                className="form-control"
                                value={formData.operation_date}
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

            <div className="card p-4 mt-4">

                <h3>
                    Баланс: {balance} ₴
                </h3>

            </div>

            <table className="table table-striped mt-5">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Назва</th>
                        <th>Тип</th>
                        <th>Сума</th>
                        <th>Дата</th>
                        <th>Дії</th>

                    </tr>

                </thead>

                <tbody>

                    {operations.map(operation => (

                        <tr key={operation.id}>

                            <td>{operation.id}</td>

                            <td>{operation.title}</td>

                            <td>

                                {operation.operation_type === 'income' ? (

                                    <span className="badge bg-success">
                                        Дохід
                                    </span>

                                ) : (

                                    <span className="badge bg-danger">
                                        Витрата
                                    </span>

                                )}

                            </td>

                            <td>{operation.amount} ₴</td>

                            <td>{operation.operation_date}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(operation.id)}
                                >
                                    Видалити
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default FinancialOperations;