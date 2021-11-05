import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="tlo_color">
                <footer className="footer">
                    <span className="text-muted">Autorem aplikacji jest Bartosz Miazga</span>
                </footer>

            </div>
        )
    }
}

export default FooterComponent