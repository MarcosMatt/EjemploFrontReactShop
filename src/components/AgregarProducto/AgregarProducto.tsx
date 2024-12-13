import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PropTypes, { element } from 'prop-types';

interface FormData {
  nombre: string,
  descripcion: string,
  precio: number,
  cantidad: number,
  imagen: FileList;
}

const AgregarProducto: React.FC = () => {

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormData>();

  const [ responseMessage, setResponseMessage ] = useState('');
  const [ showAlert, setShowAlert ] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    let base64Photo: String = '';
    const file = data.imagen[0];
    if (file) {
      base64Photo = await toBase64(file);
    }

    const dataToSend = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: data.precio,
      cantidad: data.cantidad,
      imagen: {
        base64: base64Photo,
        name: file.name,
        type: file.type,
        size: file.size
      }
    };

    fetch('http://localhost:8000/api/productos', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setShowAlert(true);
      setResponseMessage(data.message);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    })
    .catch((err) => {
      setResponseMessage('Hubo un Error al realizar el Registro');
    });
  }

  const toBase64 = (file: File) => new Promise<String>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  const messages = {
    precio: "Ingrese el Precio correcto",
    cantidad: "Ingrese la Cantidad correcta"
  };

  const patterns = {
    precio: /^[0-5]+$/i,
    cantidad: /^[0-5]+$/i
  };

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgegarProductos">
        Launch static
      </button>

      <div className="modal" aria-hidden="true" id="modalAgegarProductos">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className='modal-content'>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalAgegarProductos">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={ handleSubmit(onSubmit) } method='POST'>
                <h2>Datos de Acceso</h2>
                <div>
                  <label>Nombre del Producto:</label>
                  <input 
                    { ...register("nombre", { 
                      required: true,
                    }) }
                    type="text" 
                    name="nombre" 
                    required 
                  />
                </div>
                <div>
                  <label>Precio:</label>
                  <input 
                    { ...register("precio", { 
                      required: true,
                      maxLength: {
                        value: 5,
                        message: messages.precio
                      },
                      pattern: {
                        value: patterns.precio,
                        message: messages.precio
                      }
                    }) }
                    type="number" 
                    name="precio" 
                    required 
                  />
                  { errors.precio && <p> { errors.precio.message } </p>  }
                </div>
                <div>
                  <label>Descripción del Producto:</label>
                  <input 
                    { ...register("descripcion", { required: true }) }
                    type="text" 
                    name="descripcion" 
                    required 
                  />
                </div>
                <div>
                  <label>Cantidad:</label>
                  <input 
                    { ...register("cantidad", { 
                      required: true,
                      maxLength: {
                        value: 5,
                        message: messages.cantidad
                      },
                      pattern: {
                        value: patterns.cantidad,
                        message: messages.cantidad
                      }
                    }) }
                    type="number" 
                    name="cantidad" 
                    required 
                  />
                  { errors.cantidad && <p> { errors.cantidad.message } </p>  }
                </div>
                <div>
                  <label>Imagen:</label>
                  <input 
                    { ...register("imagen", { required: true }) }
                    type="file" 
                    name="imagen" 
                    accept="image/*" 
                    required 
                  />
                </div>
                <button type="submit">Enviar</button>
              </form>
              { showAlert && ( 
                <p>{ responseMessage }</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default AgregarProducto;
