import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../redux/actions';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const UnitList = () => {
    const units = useSelector((state) => state.units);
    const dispatch =useDispatch();

    useEffect(() => {
        dispatch(Actions.unitActions.getUnits());
    }, [dispatch]);

    return (
        <Card className="text-center">
        <Card.Header>Table</Card.Header>
        <Card.Body>
            <>
            <Form.Label >Range</Form.Label >
            <Form.Range />
            </>
        <Table striped bordered hover style={{ width: '25%' }} >
        <thead>
                      <tr>
                        <th>İD</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>

                {units.map((unit) => {
                    return <>
                    <tr key={unit.id}>
                        <td >{unit.id}</td>
                        <td>{unit.name}</td>
                        <td>{unit.age}</td>
                        <td>{unit.age}</td>
                    </tr>
                    </>
                })}                 
                    </tbody>
           </Table>     
    </Card.Body>
    </Card>
    );
};