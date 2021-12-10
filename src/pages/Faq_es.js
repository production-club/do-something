import React from 'react'
import styles from "../Faq.module.css"
import faqpres from '../images/FAQ-presentgraphic.svg'
import Helmet from 'react-helmet'
export default function Faq(){
  return (
    <div className= {styles.FaqWrapper}>
        <Helmet>
        <title>FAQ! </title>
          <meta name="description" content="About Section of Do Something LA" />
          <meta name="keywords" content="About, Do Something" />
        </Helmet>
      <div className={styles.introFlex}>
        <div className={styles.introCopyFlex}>
        <h3> ¿Tiene una pregunta? 
 <br/>Estamos aquí para ayudarle.</h3>
        <p>Si no ve su pregunta contestada en la lista de abajo, por favor contáctenos usando la página “Contact” o escribanos por instagram o por email a toys@dosomething.club </p>
        </div>
        <img src = {faqpres} alt= "faq present" />
      </div>
      <div className={styles.faqCopy}>
        <h3>¿Para quién es el Toy Giveaway? </h3>
        <p>Padres que no pueden permitirse comprar regalos para sus hijos. ¡Padres e hijos pueden venir al evento!</p> 
        <h3>¿Cuándo y dónde es el Toy Giveaway?</h3>
        <p>El 18 de Diciembre de 2021 de 1PM a 9PM en 1756 Naud st, 90012</p>
        <h3>¿Qué puedo esperar del Toy Giveaway?</h3>
        <p>Ambiente festivo y voluntarios que hablan Español, Mandarin, Cantonés e Inglés. Deberán llevar mascarilla en todo momento. Habrá largas colas de personas. No hay baños, comida o bebidas en el Toy Giveaway.</p>
        <h3>¿Tienen regalos solo para niños pequeños?</h3>
        <p>No, tenemos regalos para niños de edades entre 3 meses a 16 años.</p>
        <h3>¿Para cuántos niños tienen regalos?</h3>
        <p>Tenemos regalos para 2,300 niños y los entregaremos conforme al orden de llegada hasta que se agoten.</p>
        <h3>¿Hay parking?</h3>
        <p>Hay parking muy limitado en el evento. Hay parking en las calles cercanas.</p>
        <h3>Entonces… ¿Cómo puedo ayudar?</h3>
        <p>Comparte el flyer y la información del evento con gente que tenga hijos y no pueda comprarles regalos y con organizaciones que trabajen con gente de ese perfil. También puede postear el flyer del evento en su instagram</p>
        <h3>¿Puedo donar juguetes?</h3>
        <p>No en este evento. Pueden hacer donaciones monetarias en www.dosomething.club</p>
        <h3>¿Puedo tomar fotos y videos </h3>
        <p>Si que puede si es para su uso personal, pero respete la privacidad de los demás participantes.</p>
        <h3>¿Cómo puedo mantenerme al tanto de las novedades del evento?</h3>
        <p>Sigue <i>@toy.giveaway</i> en Instagram</p>
        <h3>¿Alguna otra pregunta?
        Escriba un email a<i> toys@dosomething.club </i> o DM <i>@toy.giveaway</i> en Instagram.
    </h3>
      </div>
    </div>
  )
}
