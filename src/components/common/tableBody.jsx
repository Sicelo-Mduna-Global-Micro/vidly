import React, { Component } from 'react'
import Like from './like';

class TableBody extends Component {
    
    render() {
        const { data, columns} = this.props;
        return (
          <>
            <tbody>
              {data.map((item) => (
                <tr>
                  {columns.map((column) => (
                    <td></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </>
        );
    }
}
 
export default TableBody;