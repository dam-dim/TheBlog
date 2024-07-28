import Label from "../label/Label";

export default function Select(props) {
    return (
        <div className={props.class}>
            <Label htmlFor={props.id} title={props.title} />
            <select
                placeholder={props.placeholder}
                type={props.type}
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            >
                <option value=""></option>
                {props.values.map((value) => (
                    <option key={value._id} value={value.name}>
                        {value.name}
                    </option>
                ))}
            </select>
            <p>{props.error}</p>
        </div>
    );
}
