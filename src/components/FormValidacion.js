import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidacion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const customSubmit = (data) => {
        console.log(data)
    }
    
  return (
    <>

    <h2>Formulario</h2>

    <form onSubmit={ handleSubmit(customSubmit) }  className='form-react' >
    <div className='form-control'>
        <label>ID</label>
        <input type="text" {...register('id_contacto', {
            required:true,
            })} />
        { errors.id_contacto?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        </div>
        <div className='form-control'>
        <label>Nombre y Apellido</label>
        <input type="text" {...register('nombre_contacto', {
            required:true,
            maxLength:16,
            minLength:3})} />
        { errors.nombre_contacto?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        { errors.nombre_contacto?.type === 'minLength' && <small className='fail'>El campo no puede contener menos de 3 caracteres</small> }
        { errors.nombre_contacto?.type === 'maxLength' && <small className='fail'>El campo no puede contener mas de 16 caracteres</small> }
        </div>
        <div className='form-control'>
        <label>Direccion</label>
        <input type="text" {...register('direccion_contacto', {
            required:true,
            minLength:3})} />
        { errors.direccion_contacto?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        { errors.direccion_contacto?.type === 'minLength' && <small className='fail'>El campo no puede contener menos de 3 caracteres</small> }
        </div>
        <div className='form-control'>
        <label>Telefono</label>
        <input type="number" {...register('telefono_contacto', {
            required:true,
            })} />
        { errors.telefono_contacto?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        </div>
        <div className='form-control'>
        <label>Correo electronico</label>
        <input type="email" {...register('email', {
            required:true
        })} />
        { errors.email?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }        
        </div>
        <div className='form-control'>
        <label>Fecha de nacimiento</label>
        <input type="date" {...register('fecha_nacimiento_contacto', {
            required:true
        })} />
        { errors.fecha_nacimiento_contacto?.type === 'required' && <small className='fail'>El campo no puede estar vacio</small> }
        </div>
        <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default FormValidacion