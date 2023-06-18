"use client"
import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '@/app/components/Navbar';
import { Client, Databases, ID, Query } from "appwrite";


const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("648dbe20627434788e58");

const BlogPage = ({params}) => {
  const [blogPost, setBlogPost] = useState()
  const {slug} = params;

  useEffect(() => {
    document.title = "Home : By the Quil"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "648dc1c265c3e760fc06",
      "648dc1cbb2afb5a1bc14",
      [
        Query.equal('slug', slug)
      ]
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlogPost(response.documents[0])
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        <img src={blogPost?.image} alt={blogPost?.title} className="object-cover w-full h-64 rounded-t-lg" />
        <div className="p-6">
          <p className="text-gray-600" dangerouslySetInnerHTML={{__html: blogPost?.content}}></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
