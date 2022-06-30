import React, { useContext } from 'react'
import Cell from './Cell'
import { Col, Form, Row, Button } from 'antd'
import { WorsheetContext } from './../../context'
import { baseWork, checkAnswers} from './helper'

const Worksheet = props => {
    const { operation } = props
    const Worsheet = useContext(WorsheetContext)
    const worksheetBase = baseWork(Worsheet, operation)

    const onSubmit = values => {
        console.log('values', values)
        checkAnswers(values, worksheetBase)
    }

    return (
        <div className='Worksheet'>
            <Form
                onFinish={onSubmit}
            >
                {
                    worksheetBase.map((row, index) =>{
                        const index1 = index
                        return(
                            <Row>
                                {
                                    row.map((cell, index)=>{
                                        return (
                                            <Col span={2}>
                                                <Cell 
                                                    value={cell} 
                                                    index={index}
                                                    index1={index1}
                                                />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                }
                <Form.Item
                    wrapperCol={{
                    offset: 21,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Worksheet