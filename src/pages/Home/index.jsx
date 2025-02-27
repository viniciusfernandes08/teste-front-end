import Header from '../../components/Header';
import './styles.css';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import Card from '../../components/Card';
import Circle from '../../assets/Circle.png';

function Home() {  
    const [employees, setEmployees] = useState() //Armazena todos os funcionários
    const [filteredEmployees, setFilteredEmployees] = useState() //Armazena os funcionários filtrados

    useEffect(() => {

        {/* Função para carregar os dados que vem da API */}
        async function loadData() {
             const {data} = await api.get('employees')

             setEmployees(data)
             setFilteredEmployees(data)
        }

        loadData()

    }, [])
    

    return (
        <div>
            <Header employees={employees} setFilteredEmployees={setFilteredEmployees} />
            <table>
                <thead>
                    <tr>
                        <th>FOTO</th>
                        <th>NOME</th>
                        <th className='job'>CARGO</th>
                        <th className='admission-date'>DATA DE ADMISSÃO</th>
                        <th className='phone'>TELEFONE</th>
                        <th className='circle'>
                                <img src={Circle} alt="" />
                        </th>
                    </tr>
                </thead>
                {/* Guardo os funcionários filtrados em uma variável e faço um map, criando um card para cada funcionário,
                     passando a propriedade employeesData com um objeto employee*/}
                { filteredEmployees && filteredEmployees.map((employee) => {
                    return <Card employeesData={employee} key={employee.id} />
                })}
            </table>
        </div>
    )
}

export default Home