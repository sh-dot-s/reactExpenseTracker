import React, {Component} from 'react';

export const ListItem = (props) => (
    <div className="container-fluid">
        <div className="panel panel-default">
            <div className="panel-heading">{props.description}</div>
            <div className="panel-body">
                <small><h4>{props.comments}</h4></small>
                <p>Amount&nbsp;<span className="label label-primary">{props.amount}</span></p>
                <p>Created&nbsp;<span className="label label-success">{new Date(props.createdAt).toLocaleString()}</span></p>
            </div>
            <div className="panel-footer">ID: &nbsp;{props.id}</div>
        </div>
    </div>
);