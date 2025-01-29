import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testemonials.css'
import CLI1 from '../../assets/mg2.png'
import CLI2 from '../../assets/avatar.svg'
import { motion } from 'framer-motion';


const data = [
  {
    avatar : CLI2,
    name: 'Client 1',
    review: 'Unavailable right now',
  },
  {
    avatar : CLI2,
    name: 'Client 2',
    review: 'You may be him/her',
  },
  {
    avatar : CLI2,
    name: 'Client 3',
    review: 'No content available',
  },
  {
    avatar : CLI1,
    name: 'NSHIMIYIMANA Faustin',
    review: 'He invested in me to be where I am rght now. I am proud of skills I have already achieved. still in progress',
  },
  
]
function Testemonials() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}  // Ensures it only animates once
    className="p-6 bg-white shadow-lg rounded-xl"
  >
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
    </motion.div>
  )
}

export default Testemonials
