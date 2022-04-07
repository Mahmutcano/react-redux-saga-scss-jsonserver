import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../redux/actions';
import Table from 'react-bootstrap/Table';
import './style/UnitList.scss';
import RangeSlider from 'rsuite/RangeSlider';
import Checkbox from 'rsuite/Checkbox';








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
            <h2 className="text-center">Ages</h2><hr/>
            <div className="unıt-tab d-flex justify-content-around">
                
                <button className="btn btn-dark px-5" >All</button>
                <button className="btn btn-dark px-5">Dark</button>
                <button className="btn btn-dark px-5" >Feudal</button>
                <button className="btn btn-dark px-5">Castle</button>
                <button className="btn btn-dark px-5">Imperial</button>
            </div>
        </div><hr/>
        <div className="unıt-items container-fluid mb-5">
            <div className="row">
                <div className="col-11 mx-auto ">
                    <div className="row my-5 justify-content-around">
                        <div className="item1 col-12 col-md-6 col-lg-12 col-xl-6">
                            
                            <Table striped bordered hover>
                                        <thead className="dark">
                                        <tr>
                                            <th>İD</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Movement Rate</th>
                                        </tr>
                                        </thead>
                                     <tbody>
                                        {units.map((unit) => {
                                            return <>
                                            <tr key={unit.id}>
                                                <td >{unit.id}</td>
                                                <td><a href="/UnitDetail=key">{unit.name}</a></td>
                                                <td>{unit.age}</td>
                                                <td>{unit.movement_rate}</td>
                                            </tr>
                                            </>
                                        })}                 
                                    </tbody>
                            </Table>
                        </div>
                        
                        <div className="item1 col-1 col-md-1 col-lg-1 col-xl-3 mx-5">
                                <h2 className="text-center">Cost</h2><hr/>
                                <div>
                                <Checkbox> Wood </Checkbox>
                                <RangeSlider
                                max={200}
                                defaultValue={[10, 40]}
                                constraint={([start, end]) => start <= 50 && end >= 35}
                                />
                                </div>
                                <hr/>

                                <div>
                                <Checkbox> Food </Checkbox>
                                <RangeSlider
                                max={200}
                                defaultValue={[10, 200]}
                                constraint={([start, end]) => start <= 25 && end >= 35}
                                />
                                </div>
                                <hr/>

                                <div>
                                <Checkbox> Gold </Checkbox>
                                <RangeSlider
                                max={100}
                                defaultValue={[10, 40]}
                                constraint={([start, end]) => start <= 50 && end >= 35}
                                />
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};