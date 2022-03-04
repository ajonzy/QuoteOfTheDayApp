import React, { Component } from "react"

export default class Quote extends Component {
    constructor() {
        super()

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const getQuote = async () => {
            const now = new Date()
            let dateData = {}

            await fetch("https://qotd-aoj.herokuapp.com/date/get")
            .then(response => response.json())
            .then(data => dateData = data)
            .catch(error => console.log("Error getting date: ", error))

            if (dateData.day !== now.getUTCDate()) {
                console.log("Updating date")
                await fetch("https://qotd-aoj.herokuapp.com/date/update", {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        day: now.getUTCDate()
                    })
                })
                .then(response => response.json())
                .then(data => dateData = data)
                .catch(error => console.log("Error updating date: ", error))
            }

            fetch(`https://qotd-aoj.herokuapp.com/quote/get/${dateData.quote}`)
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.log("Error getting quote: ", error))
        }

        getQuote()
    }

    render() {
        return (
            <div className="content-wrapper">
                <p className="quote">{this.state.data.text}</p>
                <p className="author">- {this.state.data.author}</p>
            </div>
        )
    }
}