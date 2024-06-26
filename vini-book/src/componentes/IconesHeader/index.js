
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icone = styled.li`
     margin-right: 40px;
        width: 20px;
`

const Icones = styled.ul `
        display: flex;
    align-items: center;

`
function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader