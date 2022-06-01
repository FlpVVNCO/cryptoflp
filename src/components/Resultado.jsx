import styled from '@emotion/styled';

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
`
const Imagen = styled.img`
    display: block;
    width: 150px;
    align-items: center;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
        text-shadow: black 0.1em 0.1em 0.2em
    }
`
const Texto2 = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
        text-shadow: black 0.1em 0.1em 0.2em;
        color: #e65757;
    }
`

const Precio = styled.p`
    font-size: 23px;
    font-style: bold;
    span{
        font-weight: 700;
        color: #c99525;
        text-shadow: black 0.1em 0.1em 0.2em
    }
`



const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return(
        <Contenedor>
        <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen Cripto" 
        />
        <div>
            <Precio>Precio Actual: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo: <span>{LOWDAY}</span></Texto>
            <Texto>Variación del día: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto2>Última modificación: <span>{LASTUPDATE}</span></Texto2>
        </div>
        </Contenedor>
    )
};

export default Resultado;
