import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {

    const [employeesCount, setEmployeesCount] = useState(0);
    const [studentsCount, setStudentsCount] = useState(0);
    const [totalSalary, setTotalSalary] = useState(0);
    const [totalPayments, setTotalPayments] = useState(0);

    useEffect(() => {

        fetchEmployees();
        fetchStudents();
        fetchPayments();

    }, []);

    const fetchEmployees = () => {

        axios.get('http://127.0.0.1:8000/api/employees/')
            .then(response => {

                setEmployeesCount(response.data.length);

                let salarySum = 0;

                response.data.forEach(employee => {
                    salarySum += parseFloat(employee.salary);
                });

                setTotalSalary(salarySum);

            })
            .catch(error => {
                console.log(error);
            });

    };

    const fetchStudents = () => {

        axios.get('http://127.0.0.1:8000/api/students/')
            .then(response => {
                setStudentsCount(response.data.length);
            })
            .catch(error => {
                console.log(error);
            });

    };

    const fetchPayments = () => {

        axios.get('http://127.0.0.1:8000/api/payments/')
            .then(response => {

                let paymentsSum = 0;

                response.data.forEach(payment => {
                    paymentsSum += parseFloat(payment.amount);
                });

                setTotalPayments(paymentsSum);

            })
            .catch(error => {
                console.log(error);
            });

    };

    return (

        <div className="container mt-5">

            <h1>EduAccount</h1>

            <div className="card p-4 mt-4">

                <h3>Система бухгалтерії закладу вищої освіти</h3>

                <p className="mt-3">
                    Dashboard системи бухгалтерського обліку.
                </p>

            </div>

            <div className="row mt-4">

                <div className="col-md-3">

                    <div className="card p-4 text-center">

                        <h5>Працівники</h5>

                        <h2>{employeesCount}</h2>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card p-4 text-center">

                        <h5>Студенти</h5>

                        <h2>{studentsCount}</h2>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card p-4 text-center">

                        <h5>Зарплати</h5>

                        <h2>{totalSalary} ₴</h2>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card p-4 text-center">

                        <h5>Платежі</h5>

                        <h2>{totalPayments} ₴</h2>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;