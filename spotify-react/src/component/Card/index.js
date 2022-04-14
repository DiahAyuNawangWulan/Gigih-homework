import React,{useState} from "react";
import "./index.css";
import Button from "@mui/material/Button";

const Card=({title,artist,img,album,toggleSelect})=> {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect=()=>{
  setIsSelected(!isSelected)
  toggleSelect()
}
  return (
    <div className="Card">
       <img src={img} alt={title} className="card_img" />
      <div className="card-wrapper">

        <h3 className="card_album">{title}</h3>
        <h3 className="card_artist">{artist}</h3>
        <h3 className="card_name_album">{album}</h3>
      
        <div className="btn-wrapper">
          <Button type="submit" variant="contained" color="success" className="btn-select" onClick={handleToggleSelect}>
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
          
       </div>
      </div>
    </div>
        
  )
}
export default Card;