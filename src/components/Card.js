import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardTextColor: null
        }
    }

    componentDidMount() {
        this.setState({
            cardTextColor: getComputedStyle(document.documentElement).getPropertyValue("--card-text-color"),

        })
    }

    render() {
        const { title, description, timeStamp, authorName, slug } = this.props
        const cardLinkStyle = { color: this.state.cardTextColor, textDecoration: "none" }
        const Author = ({ children, to }) => (
            <AniLink style={authorLinkStyle} to={to} className="font-weight-bold" fade>
                {children}
            </AniLink>
        )

        const titleStyle = {
            fontWeight: "700",
        }

        const authorLinkStyle = {
            color: "#00BCD4"
        }

        return (
            <AniLink
                style={cardLinkStyle}
                to={slug}
                cover
                bg="#00BCD4"

            >
                <div class="card my-4">
                    <div class="card-body">
                        <h5 class="card-title" style={titleStyle}>{title}</h5>
                        <p class="card-text">{description}</p>
                        <h6 class="card-subtitle text-muted">
                            <Author to="/about">{authorName}</Author> on {timeStamp}
                        </h6>
                    </div>
                </div>
            </AniLink>
        )
    }
}
