
export default function MeTextField({name,value,placeholder,onChangeHandler}) {
    return (
        <input placeholder={placeholder} name={name} value={value} onChange={onChangeHandler}/>
    )
}
