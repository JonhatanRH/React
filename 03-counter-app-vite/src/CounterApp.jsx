import { useState } from 'react';
import PropsType from 'prop-types';

export const CounterApp = ( { value } ) => {

    console.log( 'render' );

    const [ counter, setCounter ] = useState( value );

    const handleAdd = (  ) => { 
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    const handleMinus = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );
    
    /*
    const handleMinus = (  ) => {
        setCounter( (c) => c - 1 );
    }

    const handleReset = (  ) => {
        setCounter( value );
    }
    */

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>
                +1
            </button>

            <button onClick={ handleMinus }>
                -1
            </button>

            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropsType.number.isRequired
}


