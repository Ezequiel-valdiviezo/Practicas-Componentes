import React from "react";
import '../estilos/Login.css'

function Login() {

    return(
        <div>
            <h2>Hola</h2>

            <div className="contenedor">
                <div>
                    <h2>Inicia sesion aquí</h2>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <p>¿Olvidaste la  contraseña?</p>

                    <button>Iniciar Sesión</button>
                </div>
                <div>
                    <h2>Comenza tu viaje ahora</h2>
                    <p>Si todavia no tenes cuenta, únete a nosotros</p>
                    <button>Registrate</button>
                </div>

                <div>
                    <h2>Hola amigos</h2>
                    <p>Si tienes una cuenta, inicia sesión aquí y comienza</p>
                    <button>Iniciar Sesión</button>
                </div>
                <div>
                    <h2>Comenza tu viaje ahora</h2>
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                    <button>Registrar</button>
                </div>
            </div>
            
        </div>
    );
}

export default Login;