import React, {useContext} from 'react'
import { Context } from '../context'
import Loading from './Loading'
import ContactItemList from './ContactItemList'

export default function ContactContainer() {
    const { loading, cItems } = useContext(Context)
    return loading ? (
        <Loading />
    ) : (
        <ContactItemList items={cItems} />
    )
}