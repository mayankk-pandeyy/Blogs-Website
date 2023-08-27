import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Pagenation(){
    const {pageCount} = useContext(AppContext);
    const {totalPages} = useContext(AppContext);
    const {handlePageChange} = useContext(AppContext);


    return (
    <div className="w-full border-t-2 flex justify-center items-center fixed bottom-0 bg-white">
        <div className="w-11/12 max-w-[670px] flex items-center justify-between pb-2 pt-2">
            <div className="flex gap-4">
                {
                    pageCount > 1 && (<button
                    className="border border-slate-700 rounded-md px-4 py-2"
                    onClick={() => handlePageChange(pageCount-1)}>Previous</button>)
                }

                {
                    pageCount < totalPages && (<button
                    className="border border-slate-700 rounded-md px-4 py-2"
                    onClick={() => handlePageChange(pageCount+1)}>Next</button>)
                }
            </div>

            <div>
                <p className="font-semibold text-sm">
                    Page {pageCount} of {totalPages}
                </p>
            </div>
        </div>
    </div>
    );



}

export default Pagenation;