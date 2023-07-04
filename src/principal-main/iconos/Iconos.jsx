import './icono.css'
import { Icon } from '@iconify/react';



const Iconos = () => {
    return (
        <div className='iconos'>
            <section>
                <Icon className='icono1' icon="mdi:people-group" color="#7c5585" width="90" />
                <Icon className='icono2' icon="mingcute:code-fill" color="#00bb92" width="90" />
                <Icon className='icono3' icon="material-symbols:settings" color="#ff0080" width="90" />
                <Icon className='icono4' icon="ic:round-question-answer" color="#FFFF00" width="90" />
                <Icon className='icono5' icon="ion:rocket-sharp" color="#4fb9e8" width="90" />
            </section>
        </div>
)
}

export default Iconos
