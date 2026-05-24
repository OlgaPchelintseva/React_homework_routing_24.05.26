import {useParams, useNavigate } from 'react-router-dom';
import './ArticlePage.css';


function ArticlePage(){
    const {serviceid} = useParams();
    const navigate = useNavigate();
    const handleGoBack = () => {navigate(-1);};
    const handleGoHome = () => {navigate('/services');};

    return (
        <>
            <div>
                <h1 className='titleArticlePage'>Вы на странице товара: {serviceid}</h1>
            </div>
            <div className='btnBox'>
                <button onClick={handleGoBack} className='btn'>Назад к товарам</button>
                <button onClick={handleGoHome} className='btn'>На главную страницу</button>
            </div>
        </>
    );
};

export default ArticlePage;