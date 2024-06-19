import Label from "../label/Label";

export default function Input(props) {
    return (
        <div className={props.class}>
            <Label htmlFor={props.id} title={props.title} />
            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.id}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <p>{props.error}</p>
        </div>
    );
}
