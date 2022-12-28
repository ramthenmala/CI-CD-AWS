import React from 'react'
import { mount } from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp'

export default () => {
    // Main app
    return <div>
        <h1>Hello App</h1>
        <hr />

        <MarketingApp />
    </div>
}
