import React from 'react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testemonials.css'
import CLI1 from '../../assets/mg2.png'
import CLI2 from '../../assets/image3.jpg'


const data = [
  {
    avatar : CLI1,
    name: 'Jhon Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptates quisquam perferendis laborum, veritatis magnam optio ipsum placeat quam?',
  },
  {
    avatar : CLI2,
    name: 'Jhon Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptates quisquam perferendis laborum, veritatis magnam optio ipsum placeat quam?',
  },
  {
    avatar : CLI1,
    name: 'Jhon Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptates quisquam perferendis laborum, veritatis magnam optio ipsum placeat quam?',
  },
  {
    avatar : CLI2,
    name: 'Jhon Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem voluptates quisquam perferendis laborum, veritatis magnam optio ipsum placeat quam?',
  },
  
]
function Testemonials() {
  return (
    <section id='testimonial'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination,Autoplay, Navigation]}
      spaceBetween={40}
      navigation
      slidesPerView={1}
      pagination={{clickable:true}}
      autoplay={{delay:3000, disableOnInteraction:false}}>
        
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="client1" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}</small>

        </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Testemonials
