import React from 'react'

export default function Error({children, style, ...props}){
    const styles={
        error:{
            color:"#f1e0c5"
        }
    }
    
return(
    <div style={{...styles.error, ...style}} {...props}>{children}</div>
    )
}