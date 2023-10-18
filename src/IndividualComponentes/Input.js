import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;
