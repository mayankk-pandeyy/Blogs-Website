import { createContext, useEffect, useState } from "react"
import App from "../App"


// Step 1
export const AppContext = createContext();

function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // Data fill

    async function fetchData(page = 1){
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            setPageCount(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }catch(error){
            error.alert("Error in fetching Data");
            setPageCount(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPageCount(page);
        fetchData(page);
    }

    useEffect(()=>{
        fetchData();
    }, [])





    // Create an Object  value which has all the required data
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pageCount,
        setPageCount,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange
    };

    // Step 2

    return <AppContext.Provider value= {value}>
        {children}
    </AppContext.Provider>


}




export default AppContextProvider;