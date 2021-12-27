import React, { FunctionComponent } from 'react'
import { Cateogry } from '../type'


export const NavItem: FunctionComponent<{ value: Cateogry | "all" , handleFilter:Function, active:string}> = ({ value, handleFilter, active }) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if (active === value) className += " text-green";
    return (
        <li className={className} onClick={() => handleFilter(value)}>
            {value}
        </li>
    )
}


const ProjectNavbar:FunctionComponent<{handleFilter: Function; active: string}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value="all"{...props} />
            <NavItem value="React"{...props} />
            <NavItem value="GraphQL" {...props}/>
            <NavItem value="JavaScript"{...props} />
            <NavItem value="NodeJS"{...props} />
            <NavItem value="TypeScript" {...props}/>
            <NavItem value="Web3" {...props}/>
        </div>
    )
}

export default ProjectNavbar
