import PropTypes from 'prop-types';

export const FirtsApp = ( { title, subtitle, name } ) => {

    //console.log( props );


    return (
        <>
            <h1> { title } </h1>
            {/* { JSON.stringify( newMessage ) } */}
            <p> { subtitle }</p>
            <p> { name }</p>
        </>
    )
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
  

FirtsApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'Jon',
}