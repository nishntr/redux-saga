import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
// import '../css/products.css'

function Cat(props) {

    const [load, setLoad] = useState(true)

    Cat.propTypes = {
        cat: PropTypes.object.isRequired,
        getCat: PropTypes.func.isRequired
    }
    useEffect(() => {
        props.getCat("cat")
    }, [])

    return (
        <Container>
            <div className="img-div">

                <Card >
                    <Placeholder style={{ display: load ? "block" : "none" }}>
                        <Placeholder.Image rectangular />
                    </Placeholder>
                    <img className="catimg" style={{ display: load ? "none" : "flex" }} onLoad={() => setLoad(false)} src={props.cat.url} />
                </Card>


            </div>

        </Container>
    )
}

const mapStateToProps = state => ({
    cat: state.cat.cat
})

const mapDispatchToProps = dispatch => {
    return {
        getCat: (prop) => dispatch({ type: "Load", prop })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
