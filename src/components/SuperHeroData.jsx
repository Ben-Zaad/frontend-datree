import React from 'react';
import styled from 'styled-components'

import { getSuperHero, getLastSearches } from '../api/index';

import InputField from './InputField';
import CollapsibleTable from './CollapsibleTable';

class SuperHeroData extends React.Component {
    state = {
        serachedHero: [],
        heroNameInput: '',
        lastSearches: []
    }

    sendRequest = async () => {
        this.setState({ serachedHero: [] });
        this.setState({ serachedHero: await getSuperHero(this.state.heroNameInput) });
    }

    inputHandler = (newValue) => {
        this.setState({ heroNameInput: newValue })
    }

    lastSearches = async () => {
        this.setState({ lastSearches: [] })
        this.setState({ lastSearches: await getLastSearches() })
    }

    render() {
        return (
            <AppDiv>
                <ColumnDiv>
                    <InputField input={this.state.heroNameInput} onSubmit={(data) => this.inputHandler(data)} setInput={(data) => this.inputHandler(data)} />
                    <SendButton onClick={this.sendRequest} >Send</SendButton>
                    <SendButton onClick={this.lastSearches} >Get Last Searched Heros</SendButton>
                </ColumnDiv>
                {this.state.lastSearches?.length > 0 && this.state.lastSearches.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
                {this.state.serachedHero?.length > 0 && <CollapsibleTable data={this.state.serachedHero} />}
            </AppDiv >
        );
    }

}

export default SuperHeroData;

const AppDiv = styled.div`
    background-image: url("paper.gif");
                `
const ColumnDiv = styled.div`
    display: flex;
    flex-align: column;
`

const SendButton = styled.div`
    cursor: pointer;
    margin: 10px;
    margin-top: 20px;
                `