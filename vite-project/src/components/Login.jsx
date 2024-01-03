import React from "react";
import { useState } from "react";
import '../estilos/Login.css'

function Login() {

    const [mostrarSesion, setMostrarSesion] = useState(true);

    const mostrarRegistro = () => {
        setMostrarSesion(false);
    };

    const mostrarSesionFunc = () => {
        setMostrarSesion(true);
    };


    return(
        <div>
            <h2>Componente login/registro</h2>

            <div className={`contenedor ${mostrarSesion ? 'show' : 'hide'}`}>
                {mostrarSesion ? (
                <div className="sesion">
                    <div className="formSesion">
                        <h2>Inicia sesión aquí</h2>
                        <div>
                            <label htmlFor="A">Ingrese su correo electrónico</label>
                            <input type="text" name="A" id="A"/>
                        </div>
                        <div>
                            <label htmlFor="B">Ingrese su contraseña</label>
                            <input type="text" name="B" id="B"/>    
                        </div>                            
                        <a>¿Olvidaste la  contraseña?</a>
                        <button className="botonPrincipal">Iniciar Sesión</button>
                        <div className="irRegistro">
                            <h2>Comenzá tu viaje ahora</h2>
                            <p>Si todavia no tenes cuenta, únete a nosotros</p>
                            <button onClick={mostrarRegistro}>Registrate</button>
                        </div>
                    </div>
                </div>
                ) : (
                <div className="registro">
                    <div className="formRegistro">
                        <h2>Comenzá tu viaje ahora</h2> 
                        <div>
                            <label htmlFor="B">Ingrese su correo electrónico</label>
                            <input type="text" name="B" id="B"/>    
                        </div> 
                        <div>
                            <label htmlFor="C">Ingrese su contraseña</label>
                            <input type="text" name="C" id="C"/>    
                        </div> 
                        <button className="botonPrincipal">Registrar</button>
                        <div className="irLogin">
                            <h2>Hola amigos</h2>
                            <p>Si tienes una cuenta, inicia sesión aquí y comienza</p>
                            <button onClick={mostrarSesionFunc}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
                )}

            </div>

        </div>
    );
}

export default Login;