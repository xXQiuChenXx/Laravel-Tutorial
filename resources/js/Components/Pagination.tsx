"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";
import { Table } from "@tanstack/react-table";

interface Props {
  paginations: {
    current_page: number;
    last_page: number;
    next_page_url: string;
    prev_page_url: string;
    page_urls: string[];
  };
  table: Table<any>;
}

export default function PaginationBar({
  paginations: {
    current_page,
    next_page_url,
    prev_page_url,
    last_page,
    page_urls,
  },
  table,
}: Props) {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (last_page <= maxVisiblePages) {
      for (let i = 1; i <= last_page; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (current_page <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(last_page);
      } else if (current_page >= last_page - 2) {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = last_page - 2; i <= last_page; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = current_page - 1; i <= current_page + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(last_page);
      }
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prev_page_url} />
        </PaginationItem>
        {generatePageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={page_urls[pageNumber as number]}
                isActive={pageNumber === current_page}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={next_page_url} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
