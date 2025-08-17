#!/usr/bin/env python3
"""Module for updating topics of a school document."""


def update_topics(mongo_collection, name, topics):
    """Updates topics of a school based on the school name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The name of the school.
        topics (list): List of topics to set.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
