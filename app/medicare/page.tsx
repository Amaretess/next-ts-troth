// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
    return (
        <>
            <h1>MEDICARE</h1>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                GO BACK HOME
            </Link>

        </>
    )
}