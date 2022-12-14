import React from "react";


type RatingPropsType = {
    value: number
}

function Raiting(props: RatingPropsType) {
    if (props.value === 1){
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }
    else if (props.value === 2){
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }
    else if (props.value === 3){
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }
    else if (props.value === 4){
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {false}/>
            </div>
        )
    }
    else if (props.value === 5){
        return (
            <div>
                <Star selected = {true} />
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
                <Star selected = {true}/>
            </div>
        )
    } else {
        return (
            <div>
                <Star selected = {false} />
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
                <Star selected = {false}/>
            </div>
        )
    }


}

type StarPropsOfStar = {
    selected: boolean
}

function Star (props: StarPropsOfStar) {
     if(props.selected === true){
        return <span><b>star</b></span>
    }
    return <span>star</span>
}


export default Raiting