import React, {useEffect, useState} from 'react';
import './style..scss';
import {useSelector, useDispatch} from "react-redux";
import rootAction from '../../actions';

function Counter() {

    const dispatch = useDispatch();

    const count = useSelector(state => state.counterStore.counterNumber);

    const [test, setTest] = useState('test button');

    useEffect(() => {
        console.log('init');
        return () => {
            console.log('destroy');
        }
    }, []);
    useEffect(() => {
        console.log('something changed');
    });
    useEffect(() => {
        console.log('count changed');
    }, [count]);

    function upCount() {
        dispatch(rootAction.counterAction.upCount());
    }
    function downCount() {
        dispatch(rootAction.counterAction.downCount());
    }
    function testBtn() {
        console.log('count', count);
    }

    return (
        <div className={'container-Counter'}>
            <div className={'head'}>counter</div>
            <button className={'button'} onClick={testBtn}>{test}</button>
            <div className={'body'}>
                <button className={'button'} onClick={downCount}>-</button>
                <p>{count}</p>
                <button className={'button'} onClick={upCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;
