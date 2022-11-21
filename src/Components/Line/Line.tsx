import { FC } from "react";
import "./Line.css";
interface LineProps {
    idx: number;
    content: string;

}
const Line: FC<LineProps> = ({ idx, content }) => {
    return (
        <div className="Line">
            <span>Line : #{idx} , Content: {content}</span>
        </div>
    );
}

export default Line;
