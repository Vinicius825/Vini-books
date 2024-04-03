import './Opcao.css'

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']
const Opcao = () => {
    return(
        <><p><strong>Vini</strong>Books</p><section className='secoes'>
            {textoOpcoes.map((texto) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className='escolha'>{texto}</a>
            ))}
        </section></>
    )
}

export default Opcao