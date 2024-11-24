import { ReactNode } from 'react';

interface Card {
    children: ReactNode,
    color: string
}

const Card = ({ children, color }: Card) => {
    return (
        <div className={`w-full ${color} rounded-2xl mb-14 pt-[10px] card`}>
            {children}
        </div>
    )
}

export default Card