import React, { FC } from "react";

type paginationProps = {
  postsPerPage?: number;
  totalPosts?: number;
  paginate?: (data: any) => void;
};

/**
 * @description Pagination Component.
 * used for showing pagination in Table page.
 */
const Pagination: FC<paginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}: paginationProps) => {
  const pageNumbers = [];
  //@ts-ignore
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault();
                //@ts-ignore
                paginate(number);
              }}
              href="/"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
