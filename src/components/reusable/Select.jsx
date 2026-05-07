function Select({ name, id, label, value, placeholder, onChange, options }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-select"
            >
                <option value="">Tutti i generi</option>

                {options.map((item, index) => {
                    return (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    )
                })}
            </select>
        </>
    )
}
export default Select