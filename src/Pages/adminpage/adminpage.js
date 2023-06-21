import React, {useState,useEffect} from "react";
import Defaultpage from "../../Components/Defaultpage";
import './admin.css';
import {useSelector, useDispatch } from "react-redux";
import {fetchAllTickets} from "../../Redux/Tickets/ticketsAction";

export default function AdminPanel(){
  const {tickets,isLoading,error}=useSelector((state) => state.tickets);
 const user='mentor';
 const [form, setForm] = useState({});
 const [filteredvalue, setfilteredvalue] = useState("");
 const [filteredstatus, setfilteredstatus] = useState("");
 const [displaycards, setDisplaycards] = useState();
 const [filteredcards, setfilteredcards] = useState();
 const dispatch=useDispatch();

 useEffect(()=>{
  if (tickets.length === 0 ) {
    dispatch(fetchAllTickets());
  } else {
    setDisplaycards(tickets);
    setfilteredcards(tickets);
  }  
 },[filteredvalue,displaycards,tickets]);


  function handleInput(e) {
    const {value}=e.target;
    console.log(value)
     setfilteredvalue(value);
    //  serchcontent(filteredvalue);
 }
  function handleInputstatus(e) {
    const {value}=e.target;
    // console.log(value)
    setfilteredstatus(value);
    //  console.log(filteredstatus);
    //  serchcontent(filteredvalue);
 }

 function searchtickets(){
   serchcontent(filteredvalue);
 }
 
 function searchstatus(){
    searchstatuscontent(filteredstatus);
  }
 function serchcontent(sttr){
     const displaytickets = displaycards.filter(row=>row.category.toLowerCase().includes(sttr.toLowerCase()));
     setfilteredcards(displaytickets);
 }

 function searchstatuscontent(sttr){
    const displaytickets = displaycards.filter((row)=>{
          if(sttr=='CLOSED'){
                  return row.status=='CLOSED';
          }
          if(sttr=='ASSIGNED'){
            return row.status=='ASSIGNED';
          }
          if(sttr=='UNASSIGNED'){
            return row.status=='UNASSIGNED';
          }
          else{
            return displaycards;
          }
    });
    setfilteredcards(displaytickets);
}

    return(
        (user =='mentor' ? <Defaultpage>
        <p style={{fontSize:"25px", color:"red"}}>Admin Page</p>
    <div style={{display:"flex",justifyContent:"center"}}>
        <div>
 <div className="labelnames" style={{color:"blue",fontSize:"18px",marginBottom:"7px"}}>Select by Category :</div>
 <div className="labelnames" style={{color:"blue",fontSize:"18px"}}>Select by status :</div> 
 </div>
 <div>
 <select  name="category" className="categoryselect text-center" style={{marginBottom:"7px"}}
                 onChange={handleInput}
                 >
    <option value="a">All</option>              
    <option value="Zen-Class Doubt">Zen-Class Doubt</option>
    <option value="Placement Related">Placement Related</option>
    <option value="Coordination Related">Coordination Related</option>
    <option value="Pre-bootcamp Related">Pre-bootcamp Related</option>
  </select>
  
  <select  name="category" className="categoryselect text-center"
                 onChange={handleInputstatus}
                 >
    <option value="all">All</option>     
    <option value="ASSIGNED">Assigned</option>         
    <option value="CLOSED">closed</option>
    <option value="UNASSIGNED">UnAssigned</option>
  </select>
  
  </div>  
  <div>
    <div><button 
  onClick={searchtickets} style={{background:"blueviolet", border:"2px solid violet", color:"white", fontSize:"18px", borderRadius:"10px", fontWeight:"500",marginBottom:"7px"
}}
  >Category</button></div>
  <div><button 
  onClick={searchstatus} style={{background:"blueviolet", border:"2px solid violet", color:"white", fontSize:"18px", borderRadius:"10px", fontWeight:"500"
}}
  >Status</button></div>  
  </div> 
        </div>    
    <div style={{display:"flex",justifyContent:"center"}}>
    <div className="jumbotron6">
        <div style={{margin:"2%"}}>
        {error ? <h3>{error}</h3>: 
    <table class="table" style={{border:"1px solid black"}}>
  <thead className="bg-dark" >
    <tr>
      <th scope="col">Query No</th>
      <th scope="col">Category</th>
      <th scope="col">SubCategory</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Language</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {/* Loop here */}
    {displaycards&& filteredcards.map((val)=>{
        return( <tr>
            <th scope="row">{val.rasiedBy}</th>
            <td>{val.category}</td>
            <td>{val.subCategory}</td>
            <td>{val.title}</td>
            <td>{val.description}</td>
            <td>{val.preferredLanguage}</td>
            <td>{val.status=="UNASSIGNED"?<><div style={{color:"red"}}>{val.status}</div><div><button style={{background:"blue", border:"1px solid violet", color:"white", fontSize:"13px", borderRadius:"10px", fontWeight:"300"
}}>Take Query</button></div> </>:val.status=="ASSIGNED"?  <><div style={{background:"rgb(0, 195, 255)", border:"1px solid violet", color:"white", borderRadius:"10px",
}}>{val.status}</div></>:<><div style={{background:" rgb(55, 241, 70)", border:"1px solid violet", color:"white", borderRadius:"10px",
}}>{val.status}</div>  </>
            
            }</td>
          </tr>)        
        })}
  </tbody>
</table>}
</div>
</div>
    </div>    
    </Defaultpage>

    :<div style={{width:"100vw",height:"100vh", border:"2px solid black", backgroundColor:"rgb(255,255,255)", display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div style={{}}><div style={{color:"red",fontSize:"30px"}}>Only Admin/Mentor Can access This Page !</div><img style={{width:"75%",height:"75%"}} src="https://img.freepik.com/premium-vector/page-found-concept-with-people-scene-flat-cartoon-design-woman-working-online-laptop-getting-websites-crash-with-404-access-errors-screen-vector-illufilteredvalueation-visual-story-web_9209-9453.jpg"></img></div>
    </div>)
    
    );}