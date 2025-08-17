#!/usr/bin/env python3
"""Module for listing all documents in a collection."""


def list_all(mongo_collection):
    """Lists all documents in a MongoDB collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        A list of documents, or an empty list if none found.
    """
    return list(mongo_collection.find())
