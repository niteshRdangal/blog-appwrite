"use client";
import { Client, Databases, ID } from "appwrite";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648dbe20627434788e58");

export default function Home() {
  const [blogPosts, setblogPosts] = useState([]);

  useEffect(() => {
    document.title = "Home : By the Quil"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648dc1c265c3e760fc06",
      "648dc1cbb2afb5a1bc14"
    );

    promise.then(
      function (response) {
        console.log(response);
        setblogPosts(response.documents)
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.metadesc}...</p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
