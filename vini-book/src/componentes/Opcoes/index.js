
import styled from 'style-componentes'
const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

const SecaoHeader = styled.section `
    position: absolute;
    right: 5px;
`
const OpcaoHeader = styled.a`
font-size: 20px;
    padding: 5px;
    text-decoration: none;
    color: black;
    border-bottom: orange solid ;
    margin: 10px;
`

const Opcao = () => {
    return(
        <div><p><strong>Vini</strong>Books</p><SecaoHeader>
            {textoOpcoes.map((texto) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <OpcaoHeader>{texto}</OpcaoHeader>
            ))}
        </SecaoHeader></div>
    )
}

export default Opcao