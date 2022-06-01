import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMoneda from '../hooks/useSelectMoneda';
import {monedas} from '../data/monedas'



const InputSubmit = styled.input`
    background-color: #6e469c;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    margin-top: 30px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease-in;
    
    &:hover {
        background-color: #8556bb;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    
    const [ moneda, SelectMonedas] = useSelectMoneda('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCriptomonedas] = useSelectMoneda('Elige tu CriptoMoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json();

            // PROPIO ARREGLO PARA EXTRAER LA INFORMACIÓN NECESARIA Y NO EN EXCESO.
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, []);
    

    const handleSubmit = e =>{
        e.preventDefault()
        
        if ([moneda, criptomoneda].includes('')){
            setError(true)
            return
        } 
        
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
        
    }

    return (
        <>
            {error && <Error>TODOS LOS CAMPOS SON OBLIGATORIOS</Error>}
            <form 
                onSubmit={handleSubmit}
            >   
                <SelectMonedas />
                <SelectCriptomonedas />
                

                <InputSubmit 
                    type="submit" 
                    value="Cotizar"
                />
            </form>
        </>
    )
};


export default Formulario;
