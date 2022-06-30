import { Form, Input } from 'antd'
import React from 'react'

const Cell = props => {
    const {value, index, index1} = props
    const key = index + ',' + index1
    return(
        <div className='Cell'>
            {
                ((index1 === 0) || (index === 0) ) && (
                    value
                ) || (((index1 === 0) && (index === 0)) 
                ) || 
                <Form.Item
                    name={key}
                >
                    <Input />
                </Form.Item>
            }
        </div>
    )
}

export default Cell