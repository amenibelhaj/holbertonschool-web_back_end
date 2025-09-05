#!/usr/bin/env python3
"""Provides statistics about Nginx logs in MongoDB."""


from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient("mongodb://127.0.0.1:27017")
    collection = client.logs.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    query = {
        "method": "GET",
        "path": "/status"
    }
    status = collection.count_documents(query)
    print(f"{status} status check")
    