import React , {useState} from 'react';
import Button from './button';
import Show from './show';

export default function App(){
    const [count, setCount] = useState(0);

    const handleClick = (test) =>{
        console.log('im getting called from button', test);
        setCount(count+1);
    }
    return(
        <div>
            <Show count={count}/>
            <Button submit={handleClick}/>
        </div>
    )
}