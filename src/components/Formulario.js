import React from 'react'
import styles from './Formulario.module.css'
import PropTypes from 'prop-types'
import useSelect from '../hooks/useSelect'


const Formulario = ({guardarCategoria}) => {
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},

    ]

    //utilizar custom hook
    const [categoria , SelectNoticias] = useSelect('general', OPCIONES);

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

  return (
    <div className={`${styles.buscador} row`}>
        <div className='col s12 m8 offset-m2 '>
            <form
                onSubmit={buscarNoticias}
            >
                <h2 className={styles.heading}>Encuentra Noticias por Categorias</h2>

                <SelectNoticias />


                <div className='input-field col s12'>
                    <input
                        type="submit"
                        // podremos mantener el caracter "-"  del css usando ['']
                        className={`${styles['btn-block']} btn-large amber darken-2`}
                        value='Buscar'
                       />
                    

                </div>
                
            </form>
        </div>
    
    </div>
  )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
  }
export default Formulario