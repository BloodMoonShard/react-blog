import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { filterTable } from '../../actions';
import {Button, Form, FormGroup, Col, FormControl, ControlLabel} from 'react-bootstrap'

export class Formblog extends React.Component {

    onSubmit () {
        console.log(123123)
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Form horizontal onSubmit={this.onSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <FormControl type="text" placeholder="Title"/>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Description"/>
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

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Formblog);
