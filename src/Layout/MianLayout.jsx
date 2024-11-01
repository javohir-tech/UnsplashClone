import React from 'react'
import { Navbar } from '../Components'
import { Outlet } from 'react-router-dom'

export default function MianLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>

        </>
    )
}
