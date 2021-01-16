import React, { Component, useState } from 'react';
import SideBar from './../sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Shopping() {
    return (
        <Router>
            <div className="wrapper">
                <Row>
                    <Col>
                        <Card body>
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <CardTitle tag="h5">Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Router>
    )
}

export default Shopping;
