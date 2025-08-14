#!/usr/bin/env python3
"""
0-simple_helper_function module

This module contains a helper function `index_range` that calculates
the start and end index for a pagination system based on page number
and page size.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end index for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index (inclusive)
                         and the end index (exclusive) for the page.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
