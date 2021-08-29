import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components'

import { getSuperHero } from '../api/index';

import InputField from './InputField';
import CollapsibleTable from './CollapsibleTable';

class SuperHeroData extends React.Component {
    state = {
        serachedHero: [],
        heroNameInput: '',
    }

    sendRequest = async () => {
        this.setState({ serachedHero: [] });
        this.setState({ serachedHero: await getSuperHero(this.state.heroNameInput) });
    }

    componentDidUpdate() {
        console.log("this state", this.state);
    }

    inputHandler = (newValue) => {
        this.setState({ heroNameInput: newValue })
    }

    render() {

        return (
            <AppDiv>
                <ColumnDiv>
                    <InputField input={this.state.heroNameInput} setInput={(data) => this.inputHandler(data)} />
                    <SendButton onClick={this.sendRequest} >Send</SendButton>
                </ColumnDiv>
                {this.state.serachedHero.length > 0 && <CollapsibleTable data={this.state.serachedHero} />}
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
                `