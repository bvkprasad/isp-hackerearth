import React from 'react'

export default ({item}) => {
    const detail = () => {
        if(Object.keys(item).length === 0 && item.constructor === Object){
            return (
                <div className="container center">
                    nothing to show
                </div>
            );
        } else {
            console.log(item);
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name: </td><td>{item.name}</td>
                            </tr>
                            <tr>
                                <td>Price: </td><td>{item.price}</td>
                            </tr>
                            <tr>
                                <td>Rating: </td><td>{item.rating}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <span>
                                        {item.name}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <span className="waves-effect waves-light btn"><i className="material-icons center">download</i></span>
                </div>
            );
        }
    };
    return (
        <div>
            <div className="light-blue card center">
                <h3 style={{margin: "0px", color: "white"}}>Details</h3>
            </div>
            {detail()}
        </div>
    )
}
