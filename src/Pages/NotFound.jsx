import { useNavigate } from 'react-router-dom';
import logo from '../Layout/logo.png';
import './NotFound.css';

function NotFound(){
    const navigate = useNavigate();
    const handleGoHome = () => {navigate('/shop');};
    return (
        <div className='errorBox'>
            <h1>Ошибка 404</h1>
            <p>Этот поворот оказался тупиковым. Включаем задний ход и ищем новый путь!</p>
            <button onClick={handleGoHome} className='btnError'>Вернуться на главную</button>
            <img src={logo}/>
        </div>
    )
};

export default NotFound;