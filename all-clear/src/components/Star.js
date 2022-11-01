import { FaStar } from "react-icons/fa";

const Star = ({ 
    selected = false,
    onSelect = f => f
    }) =>
    <FaStar color={selected ? "red" : "grey"} 
    onClick={onSelect}
    />
    
// export module
export default Star;