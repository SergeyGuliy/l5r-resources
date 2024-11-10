'use client'

import opportunity from '@/images/icons/opportunity.svg'
import {renderToString} from 'react-dom/server';

function MyIcon({name}) {
    const link = {
        opportunity: opportunity,
    }[name].src

    const title = {
        opportunity: 'Возможность',
    }[name]

    return (
        <img
            width={18}
            height={18}
            style={{display: 'inline'}}
            title={title}
            src={link}
            alt={title}/>
    )
}

export const iconOpportunity = renderToString(<MyIcon name="opportunity"/>)
