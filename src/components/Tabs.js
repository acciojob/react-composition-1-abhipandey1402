import React, { useState } from "react"

const Tabs = ({tabs}) =>{
    
    const [content, setContent] = useState('');

    return (
        <div>
            <ul>
            {tabs.map((tab, index) => 
                (
                   <li key={index} onClick={() => setContent(tab.content)}>{tab.title}</li>
                )
            )}
            </ul>
            <p>{content}</p>
            
        </div>
    )
}

export default Tabs;

