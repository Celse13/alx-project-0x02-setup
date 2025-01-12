import React from 'react';

import { CardProps } from '@/interfaces';

export default function Card ({title, content}: CardProps) {
    return (
        <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-bold mb-2'>{title}</h2>\
            <p className='text-gray-600'>{content}</p>
        </div>
    )
}