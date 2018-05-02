import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export const ListItem = (props) => (
    <div>
        <div className="panel panel-default">
            <div className="panel-heading">{props.description}</div>
            <div className="panel-body">
                <small>
                    <h4>{props.comments}</h4>
                </small>
                <p>Amount&nbsp;<span className="label label-primary">{props.amount}</span>
                </p>
                <p>Created&nbsp;<span className="label label-success">{new Date(props.createdAt).toLocaleString()}</span>
                </p>
            </div>
            <div className="panel-footer">
                <div className="btn-group">
                    <NavLink to={"/edit^"+props.id} className="btn btn-primary">Edit</NavLink>
                    <button type="button" className="btn btn-danger" onClick={props.deleteExpense}>Delete</button>
                </div>
            </div>
        </div>
    </div>
);