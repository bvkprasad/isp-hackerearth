import React from 'react';
import {useState} from 'react';

const styles = {
    width: "35%", 
    borderRadius: "5px", 
    border: "0px", 
    background: "white", 
    margin: "5px", 
    padding: "8px 20px", 
    height: "5%"
};
export default ({list, fetchDetails}) => {
    const [items, setItems] = useState(list);

    const filterList = (e) => {
        setItems(list.filter(st => st.name.includes(e.target.value)));
    }
    
    const ispList = items.map(item => {
        return (
            <tr onClick={(e) => fetchDetails(item.id)} key={item.id}>
                <td>{item.name}</td>
                <td>{item.rating}</td>
                <td>{item.price}</td>
            </tr>
        )
    });
    return (
        <div>
            <div className="light-blue card center">
                <input type="text" placeholder="Name of ISP Provider" style={styles} onChange={(e)=>filterList(e)}/>
            </div>
            <table className="responsive-table highlight">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {ispList}
                </tbody>
            </table>
        </div>
    )
}
