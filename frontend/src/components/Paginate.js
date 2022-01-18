import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/*
 * Section Authored by:  Ekansh Sharma
 * Commit history absent due to repository issues
 */
const Paginate = ({ numpages, page, isAdmin = false, keyword = "" }) => {
  return (
    numpages > 1 && (
      <Pagination>
        {[...Array(numpages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
