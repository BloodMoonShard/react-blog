import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Button, Panel, Col} from 'react-bootstrap'
import _ from 'lodash'

class HomeView extends React.Component {

    static propTypes = {
        articles: React.PropTypes.array
    }

    render() {
        return <div>
            {
                _.map(this.props.articles, (article, key)=> {
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
                                >
                                    Update
                                </Link>
                                <Button onClick={this._Remove}>
                                    Remove
                                </Button>
                            </Col>
                        </Panel>
                    )
                })
            }
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        articles: state.articles.toJS() || []
    }
}

export const Home = connect(
    mapStateToProps
)(HomeView)