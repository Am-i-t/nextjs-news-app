'use client';
export default function FilterError({error}){
    return(
        <div id="error">
            <h2>An Error Occurred!</h2>
            <p>Invalid Path.</p>
            <h3>{error.message}</h3>
        </div>
    )
}