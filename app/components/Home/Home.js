import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import { remove } from '../../actions'
import {Button, Panel, Col} from 'react-bootstrap'
import _ from 'lodash'
import Confirm from 'react-confirm-bootstrap'

class HomeView extends React.Component {

    static propTypes = {
        users: React.PropTypes.array,
        _onRemove: React.PropTypes.func
    }
    //FIO
    //Data born
    //Address
    //City
    //Phone

    render() {
        return <div>
            {
                _.map(this.props.users, (article, key) => {
                    return (
                        <Panel key={key}>
                            <Col md={10}>
                                <h4>Title: {article.title}</h4>
                                Description: {article.description}
                            </Col>
                            <Col md={2}>
                                <Link className="btn btn-default"
                                      to={{
                                          pathname: '/edit',
                                          query: {id: article.id}
                                      }}
                                >Update
                                </Link>
                                <Confirm
                                    onConfirm={() => this.props._onRemove(article.id)}
                                    body="Are you sure you want to delete this?"
                                    confirmText="Confirm Delete"
                                    title="Deleting Stuff">
                                    <Button onClick={() => this.onRemove(article.id)}>
                                        Remove
                                    </Button>
                                </Confirm>
                            </Col>
                        </Panel>
                    )
                })
            }
        </div>
    }
}

export const Home = connect(
    (state) => {
        console.log(state)
        return {
            users: state.users || []
        }
    }
    ,
    (dispatch) => {
        return {
            _onRemove: id => dispatch(remove(id))
        }
    }
)
(HomeView)