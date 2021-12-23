import {FunctionComponent} from 'react'
import { IService } from '../type'

const ServiceCard: FunctionComponent<{service:IService}> = ({service:{about,Icon,title}}) => {
    return (
        <div className='p-2 flex items-center space-x-4'>
            <Icon className='w-12 h-12 text-green'/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default ServiceCard
