import {useParams, useNavigate } from 'react-router-dom';


function ArticlePage(){
    const {serviceid} = useParams();
    const navigate = useNavigate();
    const handleGoBack = () => {navigate(-1);};
    const handleGoHome = () => {navigate('/services');};

    return (
        <>
            <button onClick={handleGoBack}>Назад к товарам</button>
            <div>
                <h1>Вы на странице товара: {serviceid}</h1>
                <p>тут описание товара</p>
            </div>
            <button onClick={handleGoHome}>На главную страницу</button>
        </>
    );
};

export default ArticlePage;