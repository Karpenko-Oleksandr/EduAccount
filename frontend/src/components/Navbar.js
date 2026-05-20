import { Link } from 'react-router-dom';

function Navbar() {

    return (

        <div className="sidebar">

            <div className="sidebar-logo">
                EduAccount
            </div>

            <nav className="sidebar-menu">

                <Link className="sidebar-link" to="/">
                    Dashboard
                </Link>

                <Link className="sidebar-link" to="/employees">
                    Працівники
                </Link>

                <Link className="sidebar-link" to="/students">
                    Студенти
                </Link>

                <Link className="sidebar-link" to="/payments">
                    Платежі
                </Link>

                <Link className="sidebar-link" to="/operations">
                    Операції
                </Link>

            </nav>

        </div>

    );
}

export default Navbar;