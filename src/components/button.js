export default function Button(props){
    const onButtonClick = () => {
        console.log('im inside button click');
        props.submit('test');
    }
    return(
    <div>
        <button onClick={e => onButtonClick()}>Increment</button>
    </div>
    )
}