import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../redux/actions';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Slider, { Range } from 'rc-slider';
import './style/UnitList.scss';


export const UnitList = () => {
    const units = useSelector((state) => state.units);
    const dispatch =useDispatch();

    useEffect(() => {
        dispatch(Actions.unitActions.getUnits());
    }, [dispatch]);

    

    return (
        <>
        <h1 className="mt-5 text-center main-heading">Age Of Empire Table</h1>
        <hr/>

        <div className="unıt-tabs container">
            <div className="unıt-tab d-flex justify-content-inherit my-5">
                <button className="btn btn-dark px-5">All</button>
                <button className="btn btn-dark px-5">Dark</button>
                <button className="btn btn-dark px-5">Feudal</button>
                <button className="btn btn-dark px-5">Castle</button>
                <button className="btn btn-dark px-5">Imperial</button>
            </div>
        </div>
        <div className="unıt-items container-fluid mb-5">
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5">
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                            <Table striped bordered hover>
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
                        </div>
                        
                        <div className="item1 col-12 col-md-12 col-lg-12 col-xl-3 mx-5">
                            <>
                            <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Wood"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Food"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Gold"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                </div>
                            ))}
                            </Form>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};