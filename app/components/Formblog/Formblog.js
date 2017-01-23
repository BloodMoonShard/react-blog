import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import {Button, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'
import _ from 'lodash'
import { update } from '../../actions'

export class FormblogView extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        id: React.PropTypes.string,
        _onSubmit: React.PropTypes.func
    }

    onSubmit = () => {
       const id = _.isUndefined(this.props.location.query.id) ? null : this.props.location.query.id
       return this.props._onSubmit({
           'id': id,
           'title': ReactDOM.findDOMNode(this.refs.title).value,
           'description': ReactDOM.findDOMNode(this.refs.description).value
       })
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Form horizontal onSubmit={this.onSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <FormControl ref="title" type="text" placeholder="Title"/>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl ref="description" componentClass="textarea" placeholder="Description"/>
                    </FormGroup>
                    <Link className="pull-left btn btn-default" to="/">Cancel</Link>
                    <Button className="pull-right" onClick={this.onSubmit}>
                        Send
                    </Button>
                </Form>
            </Col>
        )
    }
}

export const Formblog = connect(
    function mapStateToProps(state) {
        return {

        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            _onSubmit: data => dispatch(update(data))
        }
    }
)(FormblogView);

