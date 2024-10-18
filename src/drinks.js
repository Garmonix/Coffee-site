import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './drinks.css';
import drinksData from './DataDrinks.js';
import arrowleft from './images/arrowleft.png'
import arrowright from './images/arrowright.png'
import whitearrow from './images/whitearrow.png'

function DrinksSection() {
    return (
        <section className="drinks-section">
            <div className="content">
            <div className="drinks-header">
                <h2>Get to know our drinks</h2>
            </div>
                <div className="slider-controls">
                    <button className="arrow-prev"><img src={arrowleft} alt=""/></button>
                    <button className="arrow-next"><img src={arrowright} alt=""/></button>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
                navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev',
                }}
                pagination={{clickable: true, dynamicBullets: true}}
                loop={true}
            >
                {drinksData.map((drink, index) => (
                    <SwiperSlide key={index}>
                        <div className="drink-card">
                            <img src={drink.img} alt={drink.title} className="drink-image"/>
                            <div className="drink-info">
                                <div className='drink-text'>
                                <h3 className="drink-title">{drink.title}</h3>
                                <p className="drink-volume">{drink.volume}</p>
                                </div>
                                <button className="card-button"><img src={whitearrow} alt="whitearrow"/></button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default DrinksSection;
