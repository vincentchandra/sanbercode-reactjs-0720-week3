import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import FoodTable from '../tugas11/FoodTable'
import Timer from '../tugas12/Timer'
import FoodTableNew from '../tugas13/FoodTableNew'
import FoodTableHook from '../tugas14/FoodTableHook'
import FoodTableApp from './FoodTableApp'

const Routes = () =>{
    return(
       <>
        <nav>
            <ul>
                <li>
                    <Link to="/tugas11">tugas11</Link>
                </li>
                <li>
                    <Link to="/tugas12">tugas12</Link>
                </li>
                <li>
                    <Link to="/tugas13">tugas13</Link>
                </li>
                <li>
                    <Link to="/tugas14">tugas14</Link>
                </li>
                <li>
                    <Link to="/">tugas15</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path='/tugas11' component={FoodTable}/>
            <Route path='/tugas12'>
                <Timer start={101}/>
            </Route>
            <Route path='/tugas13'>
                <FoodTableNew />
            </Route>
            <Route path='/tugas14'>
                <FoodTableHook />
            </Route>
            <Route path = '/'>
                <FoodTableApp/>
            </Route>
        </Switch>
        </>
    )

}
export default Routes