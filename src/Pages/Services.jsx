import { Link } from 'react-router-dom';
import shirtStans from './shirt-stans.jpg';
import shirtBlind from './shirt-blind.jpg';
import cap from './cap.jpg';
import sweatshirt from './sweatshirt.png';

const ARTICLES_DATA = [
    {id: 'shirt-stans',
     title: 'Футболка "Stans"',
     photo: shirtStans,
     description: 'Чёрная футболка с принтом в стиле стенс: на передней стороне логотип автофестиваля "MIDDAY", на задней стороне — стильное изображение нескольких автомобилей с низкой посадкой, подчёркивающее любовь к автокультуре. Модель выполнена из мягкого хлопка, имеет прямой крой и круглый вырез. Идеальный выбор для тех, кто ценит автомобильный стиль и хочет выразить свою индивидуальность.'
    },
    {id: 'shirt-blind',
     title: 'Футболка "Blind"',
     photo: shirtBlind,
     description: 'Чёрная футболка с ярким принтом: несколько красных автомобилей с закрывающимися фарами в динамичных ракурсах. Модель из мягкого хлопка, прямого кроя с круглым вырезом — стильный выбор для поклонников ретро‑авто и автомобильного дизайна.'
    },
    {id: 'baseball-cap',
     title: 'Кепка "MIDDAY"',
     photo: cap,
     description: 'Стильная чёрная кепка с логотипом автофестиваля MIDDAY станет вашим верным спутником на мероприятиях и в повседневной жизни. Яркий элемент брендинга подчёркивает причастность к миру автокультуры и выделяет вас среди других.'
    },
    {id: 'sweatshirt',
     title: 'Худи "MIDDAY"',
     photo: sweatshirt,
     description: 'Чёрный худи с логотипом автофестиваля MIDDAY — стильный и комфортный аксессуар для поклонников автомобильных событий. Свободный крой, качественный материал и заметный фирменный знак. Идеальный выбор для посещения фестиваля или повседневного образа в стиле кэжуал.'
    }
]

function Services (){
    return (
        <>
            <h1>Товары в наличии</h1>
            <div>
                {ARTICLES_DATA.map((service) => (
                    <article key={service.id}>
                        <h2>{service.title}</h2>
                        <img src={service.photo} />
                        <p>{service.description}</p>
                        <Link to={`/services/${service.id}`}>Подробнее о товаре</Link>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Services;