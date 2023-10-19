import React, { useEffect, useState } from 'react'
import Footer from '../../UniversalCompontes/Footer'
import './FormPlantilla.css'
import HeaderCliente from '../Cliente/HeaderCliente'
import { useParams } from 'react-router-dom'
import Formcontenplantilla from './Formcontenplantilla'

const CustomForm = ({ localhost }) => {
    const { id } = useParams()
    const [formData, setFormData] = useState()
    const [name, setName] = useState()

    useEffect(() => {
        fetch(localhost + '/api/type/forms/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                SetFormData(data.FormsFields)
                setName(data.name)

            })
    }, [id])
    const SetFormData = (data) => {
        setFormData(data)
    }
    return (
        <div>
           
            {formData && <Formcontenplantilla FormData={formData} Name={name} localhost={localhost} id={id}/>}

            <Footer/>
        </div>
    )
}

export default CustomForm
