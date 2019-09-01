import React, { Component }  from 'react';
import {getAll} from '../../services/hero.services';
import {data} from '../../components/processServices';
import Table from '../mainTable/MainTable';
import './Principal.css';

class Principal extends Component{

    render() {
        return (
            <div className="index">
                <h2>Fellowship of the Ring</h2>
                <div className="container">
                    <div className="search-input">
                        <input type="text" placeholder="search hero"/>
                    </div>
                    <Table data={getAll}/>
                </div>
            </div>
        );
    }
}
export default Principal;