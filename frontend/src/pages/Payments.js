import { useEffect, useState } from 'react';
import axios from 'axios';

function Payments() {

    const [payments, setPayments] = useState([]);
    const [students, setStudents] = useState([]);

    const [formData, setFormData] = useState({
        student: '',
        amount: '',
        payment_date: '',
        description: ''
    });

    useEffect(() => {

        fetchPayments();
        fetchStudents();

    }, []);

    const fetchPayments = () => {

        axios.get('http://127.0.0.1:8000/api/payments/')
            .then(response => {
                setPayments(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    };

    const fetchStudents = () => {

        axios.get('http://127.0.0.1:8000/api/students/')
            .then(response => {
                setStudents(response.data);
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

        axios.post('http://127.0.0.1:8000/api/payments/', formData)
            .then(() => {

                fetchPayments();

                setFormData({
                    student: '',
                    amount: '',
                    payment_date: '',
                    description: ''
                });

            })
            .catch(error => {
                console.log(error);
            });

    };

    const handleDelete = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/payments/${id}/`)
            .then(() => {
                fetchPayments();
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (

        <div className="container mt-5">

            <h1>Платежі</h1>

            <div className="card p-4 mt-4">

                <h3>Додати платіж</h3>

                <form onSubmit={handleSubmit}>

                    <div className="row">

                        <div className="col-md-6 mb-3">

                            <select
                                name="student"
                                className="form-control"
                                value={formData.student}
                                onChange={handleChange}
                                required
                            >

                                <option value="">
                                    Оберіть студента
                                </option>

                                {students.map(student => (

                                    <option
                                        key={student.id}
                                        value={student.id}
                                    >
                                        {student.full_name}
                                    </option>

                                ))}

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
                                name="payment_date"
                                className="form-control"
                                value={formData.payment_date}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <input
                                type="text"
                                name="description"
                                placeholder="Опис"
                                className="form-control"
                                value={formData.description}
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
                        <th>Студент</th>
                        <th>Сума</th>
                        <th>Дата</th>
                        <th>Опис</th>
                        <th>Дії</th>

                    </tr>

                </thead>

                <tbody>

                    {payments.map(payment => (

                        <tr key={payment.id}>

                            <td>{payment.id}</td>
                            <td>{payment.student}</td>
                            <td>{payment.amount} ₴</td>
                            <td>{payment.payment_date}</td>
                            <td>{payment.description}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(payment.id)}
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

export default Payments;