import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    EduAccount
                </Link>

                <div>

                    <ul className="navbar-nav d-flex flex-row gap-3">

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/employees">
                                Працівники
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;