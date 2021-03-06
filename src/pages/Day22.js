import React from "react"
import axios from "axios"
import Animals from "./Components2/day22/Animals"
export default class Day22 extends React.Component {
    constructor() {
        super() 
        this.state = {
            loaded: false, 
            animalData: null,
        } 
        this.animalCrossingUrl = "https://acnhapi.com/v1a/"
    }
    componentDidMount() {
        this.getAnimals() 
    }

    getAnimals = () => {
        const url = this.animalCrossingUrl + "villagers"
        axios.get(url)
        .then((res) => {
            const {data} = res 
            this.setState({animalData:data, loaded:true})
        })
        .catch((e) => console.log(e))
    }
 
    
    render() {
        const {loaded,animalData} = this.state
         return (
            <div>
                {loaded && <Animals data = {animalData}/>}
            </div>
        )
    }
}