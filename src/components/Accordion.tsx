import React from "react";

type AccordionProps = {
    title: string
    collapse: boolean
}

function Accordion(props: AccordionProps) {

    if (props.collapse === true) {
        return (
            <div>
                <AccordinTitle title={props.title} collapse={true}/>
                <AccordionBody/>
            </div>
        )
    }
        return (
            <div>
                <AccordinTitle title={props.title} collapse={false}/>
            </div>
        )
}


function AccordinTitle(props: AccordionProps) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}


export default Accordion
