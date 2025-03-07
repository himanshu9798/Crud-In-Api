import React, { useState } from 'react';
import Axios from 'axios';
import App from '../App';
import { useNavigate } from 'react-router-dom';

function Add() {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const navigate = useNavigate(); 

    const adddata = () => {
        var myformdata = new FormData();
        myformdata.append("todo_title", title);
        myformdata.append("todo_details", details);

        Axios.post("https://akashsir.in/myapi/crud/todo-add-api.php", myformdata)
            .then(res => {
                console.log(res, "sdsdjdhvb");
                if (res.data?.flag === "1") {
                    alert("Data Added Successfully");
                    navigate('/display'); 
                } else {
                    alert("Error");
                }
            })
            .catch(err => alert(err));
    }

    return (
        <>
 
        <div style={styles.container}>
           
            <div style={styles.card}>
                <h1 style={styles.heading}>Add Data</h1>
                <table style={styles.table}>
                    <tbody>
                        <tr>
                            <td style={styles.label}>Title:</td>
                            <td>
                                <input
                                    style={styles.input}
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter title"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={styles.label}>Details:</td>
                            <td style={{backgroundColor:"white"}}>
                                <input
                                    style={styles.input}
                                    type="text"
                                    onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Enter details"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button style={styles.button} onClick={adddata}>
                                    Add Data
                                    
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8', // Light background for the whole page
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        width: '400px', // Card width
        textAlign: 'center',
    },
    heading: {
        color: 'violet',
        textShadow: '2px 2px gray',
        marginBottom: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    label: {
        fontSize: '16px',
        color: '#333',
        padding: '8px 10px',
        textAlign: 'right',
        width: '30%',
        backgroundColor:"white"
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        marginBottom: '15px',
        fontSize: '14px',
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: 'orange',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    },
    
}

export default Add;
