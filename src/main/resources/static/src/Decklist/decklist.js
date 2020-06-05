import React from 'react'
// import icons
import version from '../assets/icon/version.png'
import author from '../assets/icon/author.png'
import './decklist.css'
// bootstrap
import { Row, Col, Pagination, ListGroup, Nav, NavDropdown, Tab, Container, Table, OverlayTrigger, Popover } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

/*

Decklist

*/

const InfoItem = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <Icon.HeartFill color='red' size={20} />&nbsp;<span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
            <Icon.StarFill color='yellow' size={20} />&nbsp;<span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
            <Icon.ChatSquareFill color='green' size={20} />&nbsp;<span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
        </div>
    )
}
const DecklistName = () => {
    return (
        <div>
            <a href='/decks/tournaments'><span className='decklistName'>沙奈仙子牌組</span></a>
        </div>
    )
}
const DeckPublishDate = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            {/* <img src={calendar} alt='calendar' className='icon-item-info' /> */}
            <Icon.CalendarFill color='grey' size={20} />&nbsp;
            <span className='publishdate'>2019 Oct 09</span>
        </div>
    )
}
const AuthorAndDeckVersion = () => {
    return (
        <div>
            <img src={author} alt='author' className='icon-item-info' />
            <small className='authorname'>James Chu</small>
            <img src={version} alt='version' className='icon-item-info' />
            <strong className='deckversion'>SM1 - SM4</strong>
        </div>
    )
}

const DecklistItem = () => {
    let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <div className='decklist-item-container'>
            {array.map((item, i) => {
                return (
                    <div key={i} style={{ width: '100%' }}>
                        <hr />
                        <Row>
                            <Col sm={9} className='td-decklistname'><DecklistName /></Col>
                            <Col sm={3} className='td-info-item'><InfoItem /></Col>
                        </Row>
                        <Row>
                            <Col sm={9} className='td-author-deckversion'><AuthorAndDeckVersion /></Col>
                            <Col sm={3} className='td-publishdate'><DeckPublishDate /></Col>
                        </Row>
                    </div>
                )
            })}
        </div>
    )
}

const PageIndex = () => {
    return (
        <div className='pageindex-container'>
            <Col md={{ span: 4, offset: 4 }}>
                <Pagination className='pagination'>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
        </div>
    )
}

const Decklist = (props) => {
    return (
        <div className='container mwidth' style={{ marginTop: '100px', }}>
            <Row>
                <Col sm={3}>
                    <ListGroup style={{ paddingTop: '20px' }}>
                        {
                            props.listGroupItem.map((item, index) => {
                                return (
                                    <ListGroup.Item key={index} style={{ height: '60px', padding: 'auto', fontSize: '20px' }} action href={`#${item.link}`}>
                                        <strong>{item.title}</strong>
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

/*

Deck info

*/

const DeckInfo = (props) => {
    return (
        <div className='container mwidth' style={{ marginTop: '100px', }}>
            <Row>
                <Col xs={12}>
                    <h1 className='decklist-name'>
                        Grudge Match CtM
                    </h1>
                    <div style={{ marginBottom: '20px' }}>
                        <Icon.CalendarFill color='grey' size={20} />&nbsp;
                        <span style={{ fontSize: '20px', margin: '2px', paddingTop: '3px', color: `grey` }}>2019 Oct 09</span>
                        &nbsp;&nbsp;<span style={{ fontSize: '20px', color: `grey` }}>|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Icon.HeartFill color='red' size={20} />&nbsp;<span style={{ fontSize: '20px', margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>&nbsp;&nbsp;
                        <Icon.StarFill color='yellow' size={20} />&nbsp;<span style={{ fontSize: '20px', margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>&nbsp;&nbsp;
                        <Icon.ChatSquareFill color='green' size={20} />&nbsp;<span style={{ fontSize: '20px', margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>&nbsp;&nbsp;
                        &nbsp;&nbsp;<span style={{ fontSize: '20px', color: `grey` }}>|</span>&nbsp;&nbsp;
                    </div>
                </Col>
            </Row>
            <Row>
                <Tab.Container id='left-tabs-example' defaultActiveKey='decklist'>
                    <Col md={6}>
                        <Nav className='deckinfo-nav' variant='pills' role='tablist' justify>
                            <Nav.Item className='nav-item-size'>
                                <Nav.Link eventKey='decklist'>Decklist</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item-size'>
                                <Nav.Link eventKey='packs'>Packs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item-size'>
                                <Nav.Link eventKey='info'>Info</Nav.Link>
                            </Nav.Item>
                            <NavDropdown className='nav-item-size' title='Actions'>
                                <NavDropdown.Item eventKey='4.1'>Copy into my decks</NavDropdown.Item>
                                <NavDropdown.Item eventKey='4.2'>Compare with another decklist</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey='4.3'>Export</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='decklist'>
                                <Container>
                                    <Row>
                                        <div style={{ marginTop: '20px' }}>
                                            <img src={require('../assets/images/伊絲塔.png')} alt='deck' style={{ width: '100%' }} />
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col sm={6} style={{ marginTop: '20px' }}>
                                            <h4>Pokemon(<span>10</span>)</h4>
                                            <div className='deck-pokemon'>
                                                {
                                                    props.cards.map((card, index) => {
                                                        return (
                                                            <div key={index}>4x <CardOverlay hoverCard={props.hoverCard} handleMouseEnter={props.handleMouseEnter} card={card} /> </div>
                                                        )
                                                    })
                                                }
                                                {/* <div>4x <CardOverlay /></div> */}
                                                <div>3x <a href='/decklist/info'>百變怪</a></div>
                                                <div>3x <a href='/decklist/info'>百變怪</a></div>
                                                <div>3x <a href='/decklist/info'>百變怪</a></div>
                                                <div>3x <a href='/decklist/info'>百變怪</a></div>
                                                <div>3x <a href='/decklist/info'>百變怪</a></div>
                                            </div>
                                            <h4>Energy(<span>12</span>)</h4>
                                            <div className='deck-pokemon'>
                                                <div>12x <a href='/decklist/info'>基本惡能量</a></div>
                                            </div>
                                        </Col>
                                        <Col sm={6} style={{ marginTop: '20px' }}>
                                            <h4>Trainer(<span>30</span>)</h4>
                                            <div className='deck-pokemon'>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                                <div>3x <a href='/decklist/info'>古茲馬</a></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey='packs'>
                            </Tab.Pane>
                            <Tab.Pane eventKey='info'>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col md={6}>
                        <Container>
                            <Row>
                                {/* <div style={{ marginTop: '20px' }}>
                                    <img src={require('../assets/images/伊絲塔.png')} alt='deck' style={{ width: '100%' }} />
                                </div> */}
                                <Col sm={12}>
                                    <h3 style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        <a href='/decklist/info'>James Chu</a>
                                        <small>105</small>
                                    </h3>
                                    <div className='deck-description'>
                                        Quill編輯器
                                    </div>
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <Icon.ChatSquareFill color='green' size={20} />&nbsp;
                                                    4 Comments
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <span className='comment-date'>23 May 2020</span>
                                                        <h4><a href='/decklist/info' className=''>James Chu</a></h4>
                                                        <div className='comment-text'><p>請喜歡我的牌組，謝謝!</p></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <span className='comment-date'>23 May 2020</span>
                                                        <h4><a href='/decklist/info' className=''>Leo Chow</a></h4>
                                                        <div className='comment-text'><p>安安你好</p></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}
const CardOverlay = (props) => (
    <OverlayTrigger trigger={['hover', 'hover']} placement='right' overlay={
        <Popover id='popover-basic' style={{maxWidth: '450px'}}>
            {/* <Popover.Title as='h3'>{props.hoverCard.name}</Popover.Title> */}
            <Popover.Content>
                {/* <img src={require(`${props.hoverCard.image_link}`)} alt='1' /> */}
                <img src={props.hoverCard.image_link === undefined ? `../assets/images/26841123_736038116586568_5935735292493329942_o.jpg` : require(`../assets/images${props.hoverCard.image_link}`)} width={'100%'} alt="Background"/>
            </Popover.Content>
        </Popover>}
    >
        <a href='/decklist/info' onMouseEnter={props.handleMouseEnter}>{props.card.name}</a>
    </OverlayTrigger>
)

const popover = (
    <Popover id='popover-basic'>
        <Popover.Title as='h3'>百變怪</Popover.Title>
        <Popover.Content>
            這是一張 <strong>令人驚艷ㄉ</strong> 百變怪哦哦哦哦哦
      </Popover.Content>
    </Popover>
)

export { Decklist, DeckInfo }