import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props{
    title?:string
    children: any
}


export const Layout :  FC<Props> = ({title,children}) => {



  return (
    <>

        <Head>
            <title>{title || 'Rick and Morty App'}</title>
            <meta name='author' content='Saul Augusto Gasca Farrera' />
            <meta name='description' content='Data about Rick and Morty Cartoon' />
            <meta name='keywords' content='Rick,Morty,Characters,...' />
        </Head>


        <Navbar/>


        <main>
            {children}
        </main>
    
    </>
  )
}
