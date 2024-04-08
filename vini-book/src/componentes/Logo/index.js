
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Logo = styled.div `
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img `
    margin-right: 10px;
`
function LogoHeader() {
    return (
        <Logo>
        <LogoImg
                src={logo}
                alt='logo' 
        />
            <p><strong>Vini</strong>Books</p>
       </Logo>
    )
}

export default LogoHeader