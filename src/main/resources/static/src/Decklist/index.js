import React from 'react'
import { Route } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Decklist, DeckInfo } from './decklist'
import './index.css'
import pokemonCard from '../assets/data/PokemonCard.json'
import trainerCard from '../assets/data/TrainerCard.json'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            listGroupItem: [
                {
                    title: '最受歡迎',
                    link: 'link1'
                },
                {
                    title: '最新發表',
                    link: 'link2'
                },
                {
                    title: '比賽牌表',
                    link: 'link3'
                },
                {
                    title: '熱度討論',
                    link: 'link4'
                },
                {
                    title: '我的最愛',
                    link: 'link5'
                },
                {
                    title: '我的牌組',
                    link: 'link6'
                },
            ],
            decklists: [
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
                <Route path='/decklist/popular' component={() => <Decklist listGroupItem={this.state.listGroupItem} />} />
                <Route path='/decklist/info' component={() => <DeckInfo handleMouseEnter={this.handleMouseEnter} hoverCard={this.state.hoverCard} cards={this.state.decklists} />} />
            </div>
        )
    }
}
