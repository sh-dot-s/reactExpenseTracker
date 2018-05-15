import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import numeral from 'numeral';

export const ListItem = (props) => (
    <div>
        <div className="panel panel-primary">
            <div className="panel-heading"><h4><kbd>{props.description}</kbd></h4></div>
            <div className="panel-body">
                <small>
                    <h4>{props.comments}</h4>
                </small>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                Amount
                            </td>
                            <td>
                                <kbd>{" ₹ "+numeral(props.amount).format("0,0[.]00")}</kbd>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Created At
                            </td>
                            <td>
                                <kbd>{(props.createdAt.format("Do MMMM, YYYY")).toLocaleString()}</kbd>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="panel-footer">
                <div className="btn-group">
                    <NavLink to={"/edit^" + props.id} className="btn btn-warning">Edit</NavLink>
                    <button type="button" className="btn btn-danger" onClick={props.deleteExpense}>Delete</button>
                </div>
            </div>
        </div>
    </div>
);