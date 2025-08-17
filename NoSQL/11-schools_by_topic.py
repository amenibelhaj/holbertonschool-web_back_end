#!/usr/bin/env python3
"""Module for finding schools by topic."""


def schools_by_topic(mongo_collection, topic):
    """Finds schools where a specific topic is covered.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for.

    Returns:
        A list of matching school documents.
    """
    return mongo_collection.find({ "topics": topic })
