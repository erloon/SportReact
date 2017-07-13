import React, {PropTypes,Component} from "react";
import { Menu} from "semantic-ui-react";
import {_,range} from 'lodash';

class TablePagination extends Component{
    constructor(props,context){
        super(props,context);
        this.state = { pager: {} };
    }
componentWillMount() {
    debugger;
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }
componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }
setPage(page) {
    debugger;
        let items = this.props.items.fixtures;
        let pager = this.state.pager;
        let totalItems = this.props.items.count;
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(totalItems, page,10);
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        this.props.onChangePage(pageOfItems);
    }
getPager(totalItems, currentPage, pageSize) {
    debugger;
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        let totalPages = Math.ceil(totalItems / pageSize);
 
        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        let pages = range(startPage, endPage + 1);
 
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    render(){
        debugger;
        const pager = this.state.pager;
 
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        return (
            <Menu floated="right" pagination>
                <Menu.Item as="a" onClick={() => this.setPage(1)}>Pierwszy</Menu.Item>
                <Menu.Item as="a" onClick={() => this.setPage(pager.currentPage - 1)}>Poprzedni</Menu.Item>
                {pager.pages.map((page, index) =>
                    <Menu.Item key={index} onClick={() => this.setPage(page)} as="a">{page}</Menu.Item>
                )}
                
                <Menu.Item as="a" onClick={() => this.setPage(pager.currentPage + 1)}>Następny</Menu.Item>
                <Menu.Item as="a" onClick={() => this.setPage(pager.totalPages)}>Ostatni</Menu.Item>
          </Menu>
        );
    }
   
} 

TablePagination.propTypes = {
    // items: PropTypes.array.isRequired,
    // onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
};

TablePagination.defaultProps ={
    initialPage: 1
};

export default TablePagination;