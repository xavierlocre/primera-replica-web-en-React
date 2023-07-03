import CirculoAzul from './circulo_azul/CirculoAzul'
import ImagenTelefono from './imagent-telefono/ImagenTelefono'
import Iconos from 'https://github.com/xavierlocre/primera-replica-web-en-React/blob/rama_xavi/src/principal-main/iconos/Iconos.jsx'
import './ContenidoMain.css'

const ContenidoMain = () => {

    return(
        <div>
            <CirculoAzul/>
            <ImagenTelefono/>
            <Iconos/>
        </div>
    )
}

export default ContenidoMain