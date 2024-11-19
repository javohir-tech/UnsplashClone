import React from 'react'
import { Form } from 'react-router-dom'
import FormInput from './FormInput'

export default function Search() {
    return (
        <>
            <Form method="POST" className='max-w-96 mx-auto my-5 flex gap-3 '>
                <FormInput type={"search"} placeholder={"Search"} name={"Search"}/>
                <button className='btn btn-primary md:hidden btn-sm'>Search</button>
            </Form>
        </>
    )
}
