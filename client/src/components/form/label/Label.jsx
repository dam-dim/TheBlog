export default function Label(props) {
    return <label htmlFor={props.htmlFor}>{props.title}</label>;
}
