import { NavLink, Link, Outlet} from 'react-router-dom';
import logo from './logo.png';
import './ShopLayout.css';

function ShopLayout(){
    const setActiveClass = ({isActive}) => isActive ? 'nav-link active' : 'nav-link';

    return(
        <>
            <header>
                <div>
                    <Link to={{pathname: '/shop'}}>
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <nav>
                    <NavLink to='/shop' className={setActiveClass}>Главная страница</NavLink>
                    <NavLink to='/services' className={setActiveClass}>Список товаров</NavLink>
                    <NavLink to='/about' className={setActiveClass}>О нас</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2026 Все права защищены</p>
            </footer>
        </>
    )
};

export default ShopLayout;