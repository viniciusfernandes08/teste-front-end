/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Logo from '../../assets/Logo.png';
import Search from '../../assets/Search.png';
import './styles.css'
      
//Função que recebe as propriedas desestruturadas, e permite acessar as propriedades dos objetos e dos funcionários filtrados
function Header({employees, setFilteredEmployees}) {
    const input = useRef() //Faz referência ao input

    //Função para pesquisar e filtrar os funcionário pelo nome, cargo e telefone, colocando na tela
    function searchChange() {
        const newEmployees = employees.filter( employee => 
            employee.name.toLowerCase().includes(input.current.value.toLowerCase()) 
            || employee.job.toLowerCase().includes(input.current.value.toLowerCase())
            || employee.phone.includes(input.current.value)
        )
        
        setFilteredEmployees(newEmployees)
    }

    return (
        <div>
            <div className="header-logo">
                <img src={Logo} alt='logo-betalent'/>
            </div>
            <div className="employees-input">
                <h1>Funcionários</h1>
                <div className="input">
                   <input placeholder='Pesquisar' type="text" ref={input} />
                   <img src={Search} alt="icon-search" onClick={searchChange} />
                </div>
            </div>
        </div>
    )
}

export default Header