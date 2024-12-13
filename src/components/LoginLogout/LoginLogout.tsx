import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import PropTypes from 'prop-types';

interface FormData {
  usuario: string,
  password: string,
}

const LoginLogout: React.FC = () => {

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<FormData>();

  const [ responseMessage, setResponseMessage ] = useState('');
  // const [ showAlert, setShowAlert ] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const dataToSend = {
      usuario: data.usuario,
      password: data.password,
    };

  }

  const messages = {
    precio: "Ingrese el Precio correcto",
    cantidad: "Ingrese la Cantidad correcta"
  };

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalLoginLogout">
        Launch static
      </button>

      <div className="modal fade" aria-hidden="true" id="modalLoginLogout">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className='modal-content'>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLoginLogout">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={ handleSubmit(onSubmit) } method='POST'>
                <h2>Datos de Acceso</h2>
                <div>
                  <label>Usuario:</label>
                  <input 
                    { ...register("usuario", { 
                      required: true
                    }) }
                    type="text" 
                    name="usuario" 
                    required 
                  />
                  { errors.usuario && <p> { errors.usuario.message } </p>  }
                </div>
                <div>
                  <label>Contraseña:</label>
                  <input 
                    { ...register("password", { 
                      required: true
                    }) }
                    type="password" 
                    name="password" 
                    required 
                  />
                  { errors.password && <p> { errors.password.message } </p>  }
                </div>
                <button type="submit">Enviar</button>
              </form>
              {/* {{ showAlert && ( 
                <p>{ responseMessage }</p>
              )} } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLogout;
