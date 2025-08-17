#!/usr/bin/env python3
"""Module for inserting a document into a MongoDB collection."""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document into a collection.

    Args:
        mongo_collection: The pymongo collection object.
        **kwargs: Arbitrary keyword arguments representing document fields.

    Returns:
        The _id of the inserted document.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
