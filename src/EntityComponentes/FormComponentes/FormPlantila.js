import React, { useEffect, useState } from 'react'
import Footer from '../../UniversalCompontes/Footer'
import './FormPlantilla.css'
import HeaderCliente from '../Cliente/HeaderCliente'
import { useParams } from 'react-router-dom'

const CustomForm = ({ localhost }) => {
    const { id } = useParams()

    const [formData, setFormData] = useState()
    const [name, setName] = useState()

    const handleFormTypeChange = (e) => {
        setFormData({ ...formData, formType: e.target.value })
    }

    const handlePriceTypeChange = (e) => {
        setFormData({ ...formData, priceType: e.target.value, customPrice: '' })
    }

    const handleCustomPriceChange = (e) => {
        setFormData({ ...formData, customPrice: e.target.value })
    }

    const handleIncludeExpirationChange = (e) => {
        const value = e.target.value
        const expirationDateTime =
            value === 'No' ? '' : formData.expirationDateTime
        setFormData({ ...formData, includeExpiration: value, expirationDateTime })
    }

    const handleExpirationDateTimeChange = (e) => {
        setFormData({ ...formData, expirationDateTime: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Realiza acciones basadas en el tipo de formulario y el precio aquí.
        // Puedes generar un QR para el pago con la información recopilada.

        // Ejemplo: Generar un QR con la información seleccionada.
        const qrData = {
            clientName: formData.clientName,
            clientCuenta: formData.cuenta,
            accountBalance: formData.accountBalance,
            formType: formData.formType,
            priceType: formData.priceType,
            customPrice:
                formData.priceType === 'fixed' ? formData.customPrice : 'Indefinido',
        }

        console.log('QR Data:', qrData)
    }
    useEffect(() => {
        fetch(localhost + '/api/forms/' + id)
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
    }, [])
    const SetFormData = (data) => {
        setFormData(data)
    }
    return (
        <div>
            <HeaderCliente/>

            <div className="container-fluid form-container">
                <div className="row">
                    <div className="col-lg">
                        <form onSubmit={handleSubmit} className="form-wrapper">
                            <h2 className="form-title">Formulario {name}</h2>
                            {formData && formData.map((field, index) => (
                                <div>
                                    <label className="form-label">
                                        <b>{field.name}:</b>
                                    </label>
                                </div>
                            ))}

                            <div>
                                <label className="form-label">
                                    <b>Nombre del Cliente:</b>
                                </label>
                            </div>
                            <div>
                                <label className="form-label">
                                    <b>Tipo de Cuenta:</b>
                                </label>
                            </div>

                            <div>
                                <label className="form-label">
                                    <b>Nombre Del Qr:</b>
                                </label>
                                <input type="text" name="" className="form-input"></input>
                            </div>
                            <div>
                                <label className="form-label">
                                    <b>Direccion:</b>
                                </label>
                                <input type="text" name="" className="form-input"></input>
                            </div>
                            <div>
                                <label for="imagen" className="form-label">
                                    <b>Si desea puede cargar una imagen:</b>
                                </label>
                                <input
                                    type="file"
                                    id="imagen"
                                    name="imagen"
                                    accept="image/*"
                                    className="form-input"
                                ></input>
                            </div>
                            <div>
                                <label className="form-label">
                                    <b>Tipo de Precio:</b>
                                </label>
                                <select

                                    onChange={handlePriceTypeChange}
                                    required
                                    className="form-input center-select"
                                >
                                    <option value="fixed">Fijo</option>
                                    <option value="indefinite">Indefinido</option>
                                </select>
                            </div>
                            {'fixed' === 'fixed' && (
                                <div>
                                    <label className="form-label">
                                        <b>Precio Fijo:</b>
                                    </label>
                                    <input
                                        type="number"

                                        onChange={handleCustomPriceChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            )}
                            <div className="center-button mt-3">
                                <div type="submit" className="button" data-tooltip="Size: 20Mb">
                                    <div className="button-wrapper">
                                        <div className="text">Generar QR</div>
                                        <span className="icon">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                      >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                        ></path>
                      </svg>
                    </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CustomForm
