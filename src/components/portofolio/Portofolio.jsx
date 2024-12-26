import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/AI.png'
import IMG2 from '../../assets/AR.png'
import IMG3 from '../../assets/image-1.jpg'
import IMG4 from '../../assets/TOOGEDA.png'
import IMG5 from '../../assets/pro.png'
import IMG6 from '../../assets/image2.jpg'



const data = [
  {
    id:1,
    image:IMG1,
    title: 'AI Chat with book',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
  {
    id:2,
    image:IMG2,
    title: 'AR communication trainer',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
  {
    id:3,
    image:IMG3,
    title: 'Hardware default checking system',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
  {
    id:4,
    image:IMG4,
    title: 'Meet, communicate and train together',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
  {
    id:5,
    image:IMG5,
    title: 'Social welfare system',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
  {
    id:6,
    image:IMG6,
    title: 'Photo editing App',
    github:'https://github.com',
    demo: 'https://dribbble.com'

  },
]
function Portofolio() {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portofolio__item'>
          <div className="portofolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portofolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio
