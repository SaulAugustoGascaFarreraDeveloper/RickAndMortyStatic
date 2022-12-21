import {Grid,Card,Row,Text} from '@nextui-org/react'
import { FC } from "react"
import { Characters } from "../../interfaces"


interface Props{
    character: Characters
}

export const CharacterCard : FC<Props> = ({character}) => {
  return (
    <>
        <Grid xs={6} md={2} sm={3} xl={1} key={character.id}>
            <Card isHoverable isPressable>
                <Card.Body css={{p:1}}>
                    <Card.Image 
                    
                        src={character.image}
                        alt={character.name}
                        width='100%'
                        height='140px'
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{character.name}</Text>
                        <Text># {character.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    </>
  )
}
