import React from 'react'
import PropTypes from 'prop-types'

// 'noopener' indica que el documento enlazado no debe tener acceso al documento que lo abrió, lo que ayuda a prevenir ataques de seguridad.
// 'noreferrer' indica que no se debe enviar el Referer HTTP (la URL de la página actual) al documento enlazado, lo que ayuda a proteger la privacidad del usuario.


function Noticia({noticia}) {
    // extrear los datos 
    const {urlToImage, url, title, description, source} = noticia;

    //si hay imagen los muestras y no los hay no 
    const imagen = (urlToImage) ? 
    <div className='card-image'>
                <img src={urlToImage}  alt={title} />
                <span className='card-title'> {source.name}</span>
            </div>  
    :null;

  return (
    <div className='col s12 m6 l4'>
        <div className='card'>
            {imagen}
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <a 
                href={url}
                target='_blank'
                rel='nooperner noreferrer'
                className='waves-efffect waves-light btn'
                >Ver Noticia Completa</a>
                
            </div>
        </div>

    </div>
  )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
  }

export default Noticia