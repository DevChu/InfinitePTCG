import React from 'react'
import { Route } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Decklist, DeckInfo } from './decklist'
import './index.css'
import pokemonCard from '../assets/data/PokemonCard.json'
import trainerCard from '../assets/data/TrainerCard.json'
import decklist from '../assets/data/decklists.json'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            listGroupItem: [
                {
                    title: '最受歡迎',
                    link: '/popular'
                },
                {
                    title: '最新發表',
                    link: '/latest'
                },
                {
                    title: '比賽牌表',
                    link: '/tournament'
                },
                {
                    title: '熱度討論',
                    link: '/hottopics'
                },
                {
                    title: '我的最愛',
                    link: '/favorites'
                },
                {
                    title: '我的牌組',
                    link: '/mine'
                },
            ],
            decklists: decklist,
            deckCards: [
                pokemonCard, trainerCard
            ],
            hoverCard: {}
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
    }
    handleMouseEnter(e) {
        console.log(e.currentTarget.innerText)
        console.log(this.state.decklists[1].name)
        // const prevState = this.state.decklists
        this.state.decklists.map((card, index) => {
            if (card.name === e.currentTarget.innerText) {
                this.setState({ hoverCard: card })
            }
        })
    }

    render() {
        return (
            <div>
                <Route path='/decklist' component={() => <Decklist listGroupItem={this.state.listGroupItem} decklists={this.state.decklists} />} />
                <Route path='/decklist/info' component={() => <DeckInfo handleMouseEnter={this.handleMouseEnter} hoverCard={this.state.hoverCard} cards={this.state.deckCards} />} />
            </div>
        )
    }
}
