import React from "react"
import {
    fundo,
    start
} from '../../Assets'

import {Container, Button} from './style'
export const Landing = () => {
    return(
        <Container>
                <img src={fundo}/>
            <Button>
                <img src={start}/>
            </Button>
        </Container>
    )
}