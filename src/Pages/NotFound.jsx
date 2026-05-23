import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigate = useNavigate();
    const handleGoHome = () => {navigate('/shop');};
    return (
        <>
            <h1>Ошибка 404</h1>
            <p>Этот поворот оказался тупиковым. Включаем задний ход и ищем новый путь!</p>
            <button onClick={handleGoHome}>Вернуться на главную</button>
        </>
    )
};

export default NotFound;