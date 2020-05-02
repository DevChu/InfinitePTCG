import React from 'react'
// import icons
import heart from '../assets/icon/heart.png'
import msg from '../assets/icon/msg.png'
import star from '../assets/icon/star.png'
import calendar from '../assets/icon/calendar.png'
import version from '../assets/icon/version.png'
import author from '../assets/icon/author.png'
import './decklist.css'

import { Row, Col, Pagination } from 'react-bootstrap'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { fontSize } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    MuiListItemTextPrimary: {
        color: `blue`,
        fontSize: `24px`,
    }
}));

const ListItemM = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText className={classes.MuiListItemTextPrimary} primary="沙奈朵" />
            </ListItem>
            <Divider component="li" />
            <li>
                <Typography
                    className={classes.dividerFullWidth}
                    color="textSecondary"
                    display="block"
                    variant="caption"
                >
                    Divider
                </Typography>
            </li>
            <ListItem>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider component="li" />
        </List>
    );
}

const InfoItem = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={heart} alt="heart" className="icon-item-info" /><span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
            <img src={star} alt="star" className="icon-item-info" /><span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
            <img src={msg} alt="msg" className="icon-item-info" /><span style={{ margin: '2px', paddingTop: '3px', color: `grey` }}>23</span>
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
            <img src={calendar} alt="calendar" className="icon-item-info" />
            <span className="publishdate">2019 Oct 09</span>
        </div>
    )
}
const AuthorAndDeckVersion = () => {
    return (
        <div>
            <img src={author} alt="author" className="icon-item-info" />
            <small className="authorname">James Chu</small>
            <img src={version} alt="version" className="icon-item-info" />
            <strong className="deckversion">SM1 - SM4</strong>
        </div>
    )
}

const DecklistItem = () => {
    let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <div className="decklist-item-container">
            {array.map((item, i) => {
                return (
                    <div key={i} style={{ width: '100%' }}>
                        <hr />
                        <Row>
                            <Col sm={9} className="td-decklistname"><DecklistName /></Col>
                            <Col sm={3} className="td-info-item"><InfoItem /></Col>
                        </Row>
                        <Row>
                            <Col sm={9} className="td-author-deckversion"><AuthorAndDeckVersion /></Col>
                            <Col sm={3} className="td-publishdate"><DeckPublishDate /></Col>
                        </Row>
                    </div>
                )
            })}
        </div>
    )
}

const PageIndex = () => {
    return (
        <div className="pageindex-container">
            <Col md={{ span: 4, offset: 4 }}>
            <Pagination className="pagination">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination></Col>
        </div>
    )
}

export { DecklistItem, ListItemM, PageIndex }