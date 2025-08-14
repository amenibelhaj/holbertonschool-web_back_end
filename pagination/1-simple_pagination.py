#!/usr/bin/env python3
"""
1-simple_pagination module

This module contains the Server class that paginates
the Popular_Baby_Names.csv dataset.
"""

import csv
from typing import List
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        Returns:
            List[List]: The dataset loaded from the CSV file
                        (without the header row).
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Remove header

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a page of the dataset.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of rows per page.

        Returns:
            List[List]: A list of rows for the requested page.
        """
        # Validate parameters
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Get pagination indexes
        start, end = index_range(page, page_size)

        # Get dataset and slice it
        dataset = self.dataset()
        return dataset[start:end] if start < len(dataset) else []
