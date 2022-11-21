import axios from "axios";
import { useEffect, useState } from "react";
import { useEventStream } from "react-event-stream";
import { LineModel } from "../../models/Model";
import Line from "../Line/Line";
import "./Lines.css";


function Lines(): JSX.Element {
    const [lines, setLines] = useState<LineModel[]>([]);
    const url = "http://localhost:8080/api/read/delay?val=1000";

    // const headers = { "Content-Type": "application/stream+json" };
    // const options = { headers, responseType: "stream" }
    //@ts-ignore
    const value = useEventStream(url, 1000);
    useEffect(() => {
        //@ts-ignore



        // axios({url: url,method: "get",responseType:"stream"})
        // .then(res=>console.log(res.data))
        // .catch(err=>console.log(err));

        // axios.get<LineModel[]>(url, options)
        //     .then((res) => console.log(res.data))
        //     .catch(err => console.error(err));
        if(!value){
            return;
        }
        setLines(prev=>[...prev,value]);
    },


        [value]);

    return (
        <div className="Lines">
            <h1>Radware</h1>

            <>
                {/* {JSON.stringify(value)}; */}
                
            </>


            {lines.map((line,idx) => <Line key={idx} idx={line.idx} content={line.content} />)}
        </div>
    );
}

export default Lines;
