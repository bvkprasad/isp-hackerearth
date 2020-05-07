import React from 'react'
import ListISP from './ListISP';
import Details from './Details';

export default ({list, fetchDetails, item})  => {

    return (
        <div className="hide-on-small-only">
            <div className="col s6">
                <ListISP list={list} fetchDetails={fetchDetails}/>
            </div>
            <div className="col s6">
                <Details item={item}/>
            </div>
        </div>
    )
}
