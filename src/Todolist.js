import React, {useState} from 'react';
import Todotable from './components/Todotable';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function Todolist() {

    //const [desc, setDesc] = useState('');
    //const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    // käytetään oliota, jolloin ei tarvitse luoda state muuttujia erikseen
    const [todo, setTodo] = useState({
        desc: '',
        date: ''
    });

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const deleteTodo = (event) => {

        // Jos table-elementti olisi formin sisällä, aktiviteetin poistaminen laukaisisi onSubmit metodin
        // tämän voi kumota käskyllä event.preventDefault();

        setTodos(todos.filter((item, i) => parseInt(event.target.id) !== i));

    }

    const inputChanged = (event) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
          
                    
                    <Typography variant="h6">
                    Todolist
                    </Typography>
          
                </Toolbar>
            </AppBar>
            
                
                <TextField placeholder="Description" style={{marginRight: 20, marginBottom: 20, marginTop: 20}} type="text" name="desc" onChange={inputChanged} value={todo.desc}></TextField>
                <TextField placeholder="Date" style={{marginRight: 20, marginBottom: 20, marginTop: 20}} type="text" name="date" onChange={inputChanged} value={todo.date}></TextField>
                <Button size="small" style={{marginTop: 20}} variant="contained" color="primary" onClick={addTodo}>Add</Button>
            
            <Todotable todos={todos} deleteTodo={deleteTodo}/>
        </div>
        
    )

}

export default Todolist;