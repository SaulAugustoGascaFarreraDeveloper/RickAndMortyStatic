import {Grid} from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import { CharacterListResponse, Characters } from '../interfaces'
import { FC } from 'react'
import characterApi from '../api/characterApi'
import { CharacterCard } from '../components/characters'


interface Props{
  characters: Characters[]
}



const Home : FC<Props> = ({characters}) => {
  return (
    <>
     <Layout title='Rick & Morty Static App'>
        
          <Grid.Container gap={2} justify='space-between'>
              {
                characters.map((cha) => (
                  <CharacterCard character={cha} key={cha.id} />
                ))
              }
          </Grid.Container>
        
     </Layout>
    </>
  )
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
  

  const response = await characterApi.get<CharacterListResponse>('/character')

  const charactersArray: Characters[] = response.data.results.map((cha,i) => ({
    ...cha,
   id: i+1,
   image: `https://rickandmortyapi.com/api/character/avatar/${i+1}.jpeg`

  }))
  return {
    props: {
      characters: charactersArray
    }
  }
}

export default Home