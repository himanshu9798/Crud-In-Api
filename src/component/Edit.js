import axios from 'axios'; 
import React from 'react'; 
import { useNavigate, useParams } from 'react-router-dom'; 

function Edit() { 
    const [title, setTitle] = React.useState("");  // Initialize with an empty string
    const [details, setDetails] = React.useState("");  // Initialize with an empty string
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    React.useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    const getData = () => { 
        axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`)
            .then(res => { 
                setTitle(res.data.todo_title || ""); // Make sure the title is always a string
                setDetails(res.data.todo_details || ""); // Make sure details is always a string
            }) 
            .catch(err => alert(err));
    };

    const updateData = () => { 
        const formData = new FormData(); 
        formData.append("todo_title", title); 
        formData.append("todo_details", details); 
        formData.append("todo_id", id); 

        axios.post("https://akashsir.in/myapi/crud/todo-update-api.php", formData) 
            .then(res => { 
                if (res.data.flag === "1") { 
                    navigate('/display'); 
                } else { 
                    alert("Technical Issue: " + res.data.message); 
                } 
            }) 
            .catch(err => console.log(err));
    };

    if (!id) {
        return <div style={styles.errorMessage}>Todo ID not found</div>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Edit Todo</h2>
            <div style={styles.todoInfo}>Todo ID: {id}</div>

            <div style={styles.inputGroup}>
                <label style={styles.label}>Title:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    style={styles.input}
                />
            </div>

            <div style={styles.inputGroup}>
                <label style={styles.label}>Details:</label>
                <input 
                    type="text" 
                    value={details} 
                    onChange={(e) => setDetails(e.target.value)} 
                    style={styles.input}
                />
            </div>

            <div>
                <button onClick={updateData} style={styles.button}>Update</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        margin: '0 auto',
        padding: '20px',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px',
    },
    todoInfo: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '15px',
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontSize: '1rem',
        color: '#333',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        fontSize: '1.2rem',
    },
};

export default Edit;
