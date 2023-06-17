import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit } = useForm()

    const customSubmit = (data) => {
        console.log(data)
    }
  return (
    <>

    <h2>Formulario</h2>

    <form onSubmit={ handleSubmit(customSubmit) }  className='form-react' >
        <div className='form-control'>
        <label>Nombre</label>
        <input type="text" {...register('nombre')} />
        </div>
        <div className='form-control'>
        <label>Correo electronico</label>
        <input type="text" {...register('email')} />
        </div>
        <div className='form-control'>
        <label>Edad</label>
        <input type="number" {...register('edad')} />
        </div>
        <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default Form