import { createClient } from 'contentful'

export default createClient({
    space: `${process.env.REACT_APP_APISPACE}`,
    accessToken: process.env.REACT_APP_ACCESSTOKEN
})