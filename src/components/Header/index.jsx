import React from 'react'
import { Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.css'


const Header = props =>{
    const { rows, cols, diffLvl, changeRows, changeCols, changeDiffLvl } = props
    return (
        <div className='header'>
            <Menu mode="horizontal">
                <Menu.Item key='addition'>
                    <Link to='/addition'>Addition</Link>
                </Menu.Item>
                <Menu.Item key='subtraction'>
                    <Link to='/subtraction'>Subtraction</Link>
                </Menu.Item>
                <Menu.Item key='multiplication'>
                    <Link to='/multiplication'>Multiplication</Link>
                </Menu.Item>
                <Menu.Item key='division'>
                    <Link to='/division'>Division</Link>
                </Menu.Item>
                <Menu.Item key='percentage'>
                    <Link to='/percentage'>Percentage</Link>
                </Menu.Item>
            </Menu>
            <div className='worksheetInputsDiv'>
                    Difficulty Level &nbsp;
                    <Input 
                        className='worksheetInputs' 
                        defaultValue={diffLvl}
                        type={'number'}
                        onChange={event => {changeDiffLvl(parseInt(event.target.value))}}
                    />
                    &nbsp; WorkSheet Table Size &nbsp;
                    <Input 
                        className='worksheetInputs' 
                        name='rows'
                        defaultValue={rows}
                        type={'number'}
                        onChange={event => {changeRows(parseInt(event.target.value))
                        }}
                    />
                    &nbsp; X &nbsp;
                    <Input 
                        className='worksheetInputs' 
                        defaultValue={cols}
                        type={'number'}
                        onChange={event => {changeCols(parseInt(event.target.value))}}
                    />
            </div>
        </div>
    )
}

export default Header
