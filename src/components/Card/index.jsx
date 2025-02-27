/* eslint-disable react/prop-types */
import './styles.css'
import VectorDown from '../../assets/Vector-down.png';
import VectorUp from '../../assets/Vector-up.png'
import { useState } from 'react';
import { formatDate, formatPhone} from '../../utils/formatters'

//Função que recebe a propriedade desestruturada, para poder acessar as propriedades do objeto employee
function Card({employeesData}) {
    const [height, setHeight] = useState(60); //Estado para controlar a altura do card-mobile
    const [vector, setVector] = useState(VectorDown); // Estado para controlar o vetor no card-mobile conforme a altura

    const toggleHeight = () => {
        setHeight(height === 60 ? 200 : 60)
        setVector(height === 60 ? VectorUp : VectorDown)
    }

    const formattedDate = formatDate(employeesData.admission_date);
    const formattedPhone = formatPhone(employeesData.phone);

    return (
        <>
           {/*Desenvolvi a lógica de dois cards, um para desktop e outro para mobile, utilizando display none*/}
           <tr className="card">
               <td><img src={employeesData.image} alt={employeesData.name} /></td>
               <td>{employeesData.name}</td>
               <td>{employeesData.job}</td>
               <td>{formattedDate}</td>
               <td>{formattedPhone}</td>
           </tr>

           <tbody className="card-mobile" style={{height: `${height}px`}}>
               <tr>
                   <div className='img-name-mobile'>
                      <td><img src={employeesData.image} alt={employeesData.name} /></td>
                      <td>{employeesData.name}</td>
                   </div>
                   <td className='vector'><img src={vector} alt="" onClick={toggleHeight} /></td>
               </tr>
               <tr>
                   <td>Cargo</td>
                   <td>{employeesData.job}</td>
               </tr>
               <tr>
                   <td>Data de admissão</td>
                   <td>{formattedDate}</td>
               </tr>
               <tr>
                   <td>Telefone</td>
                   <td>{formattedPhone}</td>
               </tr>
           </tbody>
        </>
    )
}

export default Card