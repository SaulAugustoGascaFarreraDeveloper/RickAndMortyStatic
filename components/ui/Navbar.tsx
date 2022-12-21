import {Text,Spacer,useTheme} from '@nextui-org/react'
import Link from 'next/link'

export const Navbar = () => {

  const {theme} = useTheme()


  return (
    <>


    <div style={{
      display:'flex',
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'start',
      padding:'0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>

   
          <Link href='/'>
            
            <Text h2 color='white'>Rick & Morty</Text>
            
          </Link>


          <Spacer css={{flex:1}} />
      

          <Link href='/favorites'>
            
            <Text h2 color='white'>Favorites</Text>
            
          </Link>

    </div>
    
     

    
    </>
  )
}
