import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./Login.css";
import { Table } from 'react-bootstrap';


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios({
            method: "GET",
            url: "https://developers.zomato.com/api/v2.1/search",
            headers: {
                "user-key": "19a4a92dfe090929241d10990360f00b",
                "content-type": "application/json"
            }
        })
            .then(res => {
                console.log(res);
                const data = res.data.restaurants;
                console.log(data);
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                console.log(slice);
                const postData = slice.map(pd =>
                    <React.Fragment>
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Cuisines</th>
                                    </tr>
                                </thead>
                                <tbody key={pd.restaurant.id}>
                                    <tr>
                                        <td>{pd.restaurant.id}</td>
                                        <td>{pd.restaurant.name}</td>
                                        <td>{pd.restaurant.cuisines}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}
Pagination.propTypes = {};

export default Pagination;
