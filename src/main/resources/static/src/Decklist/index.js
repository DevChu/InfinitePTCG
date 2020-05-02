import React from 'react'
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import { DecklistItem } from './decklist'
import './index.css'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            listGroupItem:[
                {
                    title:'最受歡迎',
                    link:'#link1'
                },
                {
                    title:'最新發表',
                    link:'#link2'
                },
                {
                    title:'比賽牌表',
                    link:'#link3'
                },
                {
                    title:'熱度討論',
                    link:'#link4'
                },
                {
                    title:'我的最愛',
                    link:'#link5'
                },
                {
                    title:'我的牌組',
                    link:'#link6'
                },
            ],
        }
    }

    render() {
        return (
            <div className='container mwidth' style={{ marginTop: '100px' }}>
                <Row>
                    <Col sm={3}>
                        <ListGroup style={{paddingTop:'20px'}}>
                            {
                                this.state.listGroupItem.map((item, index)=>{
                                    return(
                                        <ListGroup.Item key={index} style={{height:'60px',padding:'auto',fontSize:'20px'}} action href={`#${item.link}`}>
                                            {item.title}
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <DecklistItem />
                    </Col>
                </Row>
            </div>
        )
    }
}
