import { ListGroup } from "react-bootstrap";
import "./style.css";

export default function MeListView({ todoList ,onSelectedList}) {
  return (
    <ListGroup>
      {todoList?.length > 0 ? (
        todoList?.map((list, i) => {
            console.log("list",list)
          let backgroundStyle =
            list.isSelected === 1
              ? {background:"green",color: "white"}
              : list.isSelected === 2
              ? {background: "black",color: "white"}
              : null;

          return (
            <ListGroup.Item onClick={()=>onSelectedList(list,i)} style={backgroundStyle!== null ? backgroundStyle : {}} key={i}>
              {list?.item}
            </ListGroup.Item>
          );
        })
      ) : (
        <p>Your list is empty!</p>
      )}
    </ListGroup>
  );
}
