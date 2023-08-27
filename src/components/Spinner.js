import "./Spinner.css"

function Spinner(){


    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <div className="custom-loader"></div>
            <p>Loading...</p>
        </div>
    );




}

export default Spinner;