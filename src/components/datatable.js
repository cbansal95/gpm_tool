import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { tsParenthesizedType } from '@babel/types';

class DataTableComp extends Component{

    render(){
        console.log(this.props.data)
        const columns=[
            {
                name:this.props.title.split(' ')[0],
                selector:'dat',
                sortable: true
            },
            {
                name:'Listens',
                selector:'num',
                sortable:'true'
            }
        ]
        var data=[]
        for(let i=0;i<this.props.data[0].length;i++)
        {
            data.push({'id':this.props.val+i,num:this.props.data[1][i],dat:this.props.data[0][i]})
        }
        return(
            <DataTable
            title={this.props.title}
            columns={columns}
            data={data}
            pagination={true}
            defaultSortField={'num'}
            defaultSortAsc={false}/>
        )
    }
}

export default DataTableComp;