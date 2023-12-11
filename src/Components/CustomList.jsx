export default function({type, list, buttons, remove, edit}) {

    switch(type) {
        case "ul":
            return (
                <ul>
                    {list.map((el, i) => {
                        return ( 
                            <li key={`${el}${i}`}>
                                <strong>{el}</strong>
                                {buttons.map((btn, j) => {
                                    switch(btn) {
                                    case 'Delete':
                                    return (
                                        <button 
                                        key={`${btn}${j}`}
                                        onClick={() => {remove(i)}}
                                        >{btn}</button>
                                    )
                                    case 'Edit':
                                    return (
                                        <button 
                                        key={`${btn}${j}`}
                                        onClick={() => {edit(i)}}
                                        >{btn}</button>
                                    )
                                    }
                                })}
                            </li> 
                        ) 
                    })}
                </ul>
            )
    
        case "ol":
            return (
                <ol>
                    {list.map((el, i) => {
                        return ( 
                            <li key={`${el}${i}`}>
                                <strong>{el}</strong>
                                {buttons.map((btn, j) => {
                                    switch(btn) {
                                    case 'Delete':
                                    return (
                                        <button 
                                        key={`${btn}${j}`}
                                        onClick={() => {remove(i)}}
                                        >{btn}</button>
                                    )
                                    case 'Edit':
                                    return (
                                        <button 
                                        key={`${btn}${j}`}
                                        onClick={() => {edit(i)}}
                                        >{btn}</button>
                                    )
                                    }
                                })}
                            </li> 
                        ) 
                    })}
                </ol>
            )
    }
}