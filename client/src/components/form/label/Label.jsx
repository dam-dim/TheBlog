/**
 * Label Component for any form tag
 * @param props htmlFor, title
 * @returns
 */
export default function Label(props) {
    return <label htmlFor={props.htmlFor}>{props.title}</label>;
}
