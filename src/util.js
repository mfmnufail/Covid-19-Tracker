import React from 'react'
import numeral from 'numeral'

export const sortData = (data) =>{

    const sortedData = [...data];

    return sortedData.sort((a,b) => a.cases>b.cases ? -1 : 1 );

}