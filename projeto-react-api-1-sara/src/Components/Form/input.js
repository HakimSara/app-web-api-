    import Styles from"./input.module.css";

    function Input(type, text, name, placeholder, handlerOnchange, value){
        return(
            <div className={Styles.form_control}>
                <label htmlFor={name}>{text} </label>
                <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handlerOnchange}
                value={value}
                />
            </div>
        )
    }
    export default Input;



    