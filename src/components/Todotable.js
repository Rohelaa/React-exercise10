import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const Todotable = (props) => {

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Description',
            accessor: 'desc'
        },
        {
            width: 80,
            filterable: false,
            sortable: false,
            Cell: ({index}) => <button id={index} onClick={props.deleteTodo}>Delete</button>
        }
    ]

    return (
        <div>
            <ReactTable data={props.todos} columns={columns} filterable={true}/>
        </div>
    );
}

export default Todotable;