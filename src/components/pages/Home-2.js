import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { plus } from 'react-icons-kit/fa/plus'
import Icon from 'react-icons-kit';
import { addToCart } from './../../actions/cartAction';
import history from './../../history';

class Home2 extends Component{

    handleClick = (id) => {
        console.log('blah...');
        this.props.addToCart(id);
        history.push("/cart");
    }

    render(){
        let itemList = this.props.items.map(item=> {
            return(
                <div className="wrapper">
                    <Row>
                        <Col>
                            <Card body key={item.id}>
                                <div className="card-image">
                                    <img src={item.img} alt={item.title}/>
                                </div>
                                <CardTitle tag="h5">{item.title}</CardTitle>
                                <Button to="/" className="btn-floating"
                                      onClick={()=>{this.handleClick(item.id)}}>
                                    <Icon icon={plus} />
                                </Button>
                                <CardText>{item.desc}</CardText>
                                <p><b>Price: {item.price}$</b></p>
                            </Card>
                        </Col>
                    </Row>
                </div>
        )
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
        }
        }

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home2);
