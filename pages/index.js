import React from 'react'
import Features from '@/components/Index/Features'
import Testimonials from '@/components/Index/Testimonials'
import Instance from '@/components/Index/Instance'
import Partner from '@/components/Index/Partner'
import Ad from '@/components/Index/Ad'
import Funfacts from '@/components/Index/Funfacts'

const Index = () => {
    return (
        <React.Fragment>
            <Features />
            <Testimonials />
            <Instance />
            <Partner />
            <Ad />
            <Funfacts />
        </React.Fragment>
    )
}

export default Index