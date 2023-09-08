/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Profile1 from '../../assets/testimonials/profile-1.jpg'
import Profile2 from '../../assets/testimonials/profile-2.jpg'
import Profile3 from '../../assets/testimonials/profile-3.jpg'
import Profile4 from '../../assets/testimonials/profile-4.jpg'
import ProfileCard from './props/ProfileCard'

function Testimonials() {
  const [ profile, setProfile ] = useState([
    {id:"1a",name:'Natali', src:`${Profile1}`, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, accusamus laborum molestias voluptatum sapiente ipsam. Magnam inventore eaque ducimus enim modi?',profession:'Designer'},
    {id:"2a",name:'Den', src:`${Profile2}`, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, accusamus laborum molestias voluptatum sapiente ipsam. Magnam inventore eaque ducimus enim modi?',profession:'Butcher'},
    {id:"3a",name:'Lucy', src:`${Profile3}`, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, accusamus laborum molestias voluptatum sapiente ipsam. Magnam inventore eaque ducimus enim modi?',profession:'Teacher'},
    {id:"4a",name:'Grigoriy', src:`${Profile4}`, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci, accusamus laborum molestias voluptatum sapiente ipsam. Magnam inventore eaque ducimus enim modi?',profession:'Doctor'}
  ])
  return (
    <section className='section-center grid-1 '>
      <article className='testimon_card_container'>
        <div className="profile_card">
          {/* single profile card*/}
          {profile.map(card => (
            <ProfileCard card={card} key={ card.id} />
         ))}
        </div>
      </article>
    </section>
  )
}

export default Testimonials
