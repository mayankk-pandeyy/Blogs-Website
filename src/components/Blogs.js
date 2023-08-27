import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blogs.css"




function Blogs(){

    // Consuming Data
    const {loading} = useContext(AppContext);
    const {posts} = useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[670px] mt-20 mb-16">
            {
                loading ? (<Spinner></Spinner>) :
                (posts.length === 0 ? (<div>
                    <p>No post FOUND!</p>
                </div>) : (posts.map((post) => {
                    return <div key={post.id} className="mt-6 mb-10">
                        <p className="font-bold text-lg">
                            {post.title}
                        </p>
                        <p className="text-sm mt-1">
                            By <span className="italic">{post.author}</span> on <span className="font-bold underline">{post.category}</span>
                        </p>
                        <p className="mt-1 text-sm">
                            Posted On <span>{post.date}</span>
                        </p>
                        <p className="mt-4">
                            {post.content}
                        </p>
                        <p className="mt-2 text-xs text-blue-600 font-semibold flex gap-2 underline">
                            {post.tags.map((tag, index) =>{
                                return <span className="" key={index}>#{tag} </span>
                            })}
                        </p>
                    </div>
                })))
            }
        </div>
    );




}


export default Blogs;