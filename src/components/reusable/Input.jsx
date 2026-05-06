function Input({ name, value, type = "text", placeholder, onChange }) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-control shadow-sm border-2"
        />
    );
}

export default Input;