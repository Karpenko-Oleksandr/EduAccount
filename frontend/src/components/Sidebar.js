import { Link } from 'react-router-dom';

function Sidebar() {

    return (

        <div className="sidebar">

            <div className="sidebar-title">
                EduAccount
            </div>

            <ul className="sidebar-menu">

                <li>
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/employees">
                        Працівники
                    </Link>
                </li>

                <li>
                    <Link to="/students">
                        Студенти
                    </Link>
                </li>

                <li>
                    <Link to="/payments">
                        Платежі
                    </Link>
                </li>

                <li>
                    <Link to="/operations">
                        Операції
                    </Link>
                </li>

            </ul>

        </div>

    );
}

export default Sidebar;