'use client'

import { Link } from '@chakra-ui/next-js'
import React from 'react'
import { List, ListItem } from '../styles/basic-styles'

const NavBar = () => {
    return (
        <List>
            <ListItem>
                <Link href="/">logo</Link>
            </ListItem>
            <ListItem>
                <Link href="/medicare">medicare</Link>
            </ListItem>
            <ListItem>
                <Link href="/group">group</Link>
            </ListItem>
            <ListItem>
                <Link href="/faq">faq</Link>
            </ListItem>
            <ListItem>
                <Link href="/testimonials">testimonials</Link>
            </ListItem>
            <ListItem>
                <Link href="/blog">blog</Link>
            </ListItem>
        </List>
    )
}

export default NavBar