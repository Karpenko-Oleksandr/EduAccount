import { useEffect, useState } from 'react';
import axios from 'axios';

function Students() {

    const [students, setStudents] = useState([]);

    const [formData, setFormData] = useState({
        full_name: '',
        faculty: '',
        course: '',
        group_name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchStudents();
    }, []);

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

        axios.post('http://127.0.0.1:8000/api/students/', formData)
            .then(() => {

                fetchStudents();

                setFormData({
                    full_name: '',
                    faculty: '',
                    course: '',
                    group_name: '',
                    email: '',
                    phone: ''
                });

            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/students/${id}/`)
            .then(() => {
                fetchStudents();
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <div className="container mt-5">

            <h1>Студенти</h1>

            <div className="card p-4 mt-4">

                <h3>Додати студента</h3>

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
                                name="faculty"
                                placeholder="Факультет"
                                className="form-control"
                                value={formData.faculty}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <input
                                type="number"
                                name="course"
                                placeholder="Курс"
                                className="form-control"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <input
                                type="text"
                                name="group_name"
                                placeholder="Група"
                                className="form-control"
                                value={formData.group_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4 mb-3">
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
                        <th>Факультет</th>
                        <th>Курс</th>
                        <th>Група</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Дії</th>
                    </tr>

                </thead>

                <tbody>

                    {students.map(student => (

                        <tr key={student.id}>

                            <td>{student.id}</td>
                            <td>{student.full_name}</td>
                            <td>{student.faculty}</td>
                            <td>{student.course}</td>
                            <td>{student.group_name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(student.id)}
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

export default Students;