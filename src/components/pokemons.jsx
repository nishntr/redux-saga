import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button, Modal, Item, Grid, Placeholder, Loader } from 'semantic-ui-react'
import './style.css'

function Pokemon(props) {

    const [open, setOpen] = React.useState(false)


    Pokemon.propTypes = {
        urls: PropTypes.object.isRequired,
        pokemons: PropTypes.array.isRequired,
        getPoke: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }
    useEffect(() => {
        props.getPoke("poke")
    }, [])

    return (
        <Container>
            <div className="img-div">

                <Grid columns={4} stackable>
                    {props.loading ?
                        (
                            <Grid.Column>
                                <Loader active inline />
                            </Grid.Column>



                        ) :
                        (
                            <>
                                {props.pokemons.map((poke, i) => {
                                    return <Grid.Column key={i}>

                                        <div onClick={() => {
                                            setOpen(true);
                                            props.getPoke(poke.url)

                                        }}>
                                            <Item animated className="item">
                                                <Item.Content verticalAlign='middle'>
                                                    <Item.Header >{poke.name.toUpperCase()}</Item.Header>
                                                </Item.Content>
                                            </Item>
                                        </div>

                                    </Grid.Column>
                                })
                                }
                                <Modal
                                    closeIcon
                                    dimmer='blurring'
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    onUnmount={() => { props.clearDetail() }}
                                >
                                    <Modal.Header>Abilities</Modal.Header>
                                    {props.detailLoading ?


                                        <Modal.Content>

                                            <Placeholder>
                                                <Placeholder.Header >
                                                    <Placeholder.Line />
                                                    <Placeholder.Line />
                                                </Placeholder.Header>
                                            </Placeholder>
                                        </Modal.Content>
                                        :
                                        <Modal.Content>
                                            <ul>

                                                {props.abilities.map((abt, j) => (
                                                    <li key={j}>{abt.ability.name}</li>
                                                ))}
                                            </ul>

                                        </Modal.Content>
                                    }
                                </Modal>
                            </>
                        )
                    }
                </Grid>





            </div>

        </Container >
    )
}

const mapStateToProps = state => ({
    urls: state.pokemon.urls,
    pokemons: state.pokemon.pokemons,
    loading: state.pokemon.loading,
    abilities: state.pokedetail.abilities,
    detailLoading: state.pokedetail.loading
})

const mapDispatchToProps = dispatch => {
    return {
        getPoke: (prop) => dispatch({ type: "Load", prop }),
        clearDetail: () => dispatch({ type: "ClearDetail" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
