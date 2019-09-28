import React from 'react';
import styled from 'styled-components';
import DndTest from '../DndTest/index';




const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

const Container = styled.div`
`;


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checked: false
        }
    }

    render(){
        return(
            <AppWrapper>
                <Container>
                    <DndTest />
                </Container>
            </AppWrapper>
        );
    }
}

export default App ;