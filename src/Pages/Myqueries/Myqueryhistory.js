import React, {useState,useEffect} from "react";
import Defaultpage from "../../Components/Defaultpage";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import {BiSearchAlt2} from 'react-icons/bi';
import './Myqueryhistory.css';
import data from './dummy.json';
import {useSelector, useDispatch } from "react-redux";
import {filterSerachTicket,fetchusersAllTickets} from "../../Redux/Tickets/ticketsAction";

export default function Myqueryhistory() {
    let status='CLOSED';
    let file=true;
    const [form, setForm] = useState({});
  const [str, setStr] = useState("");
  const [displaycards, setDisplaycards] = useState({});
  const [latestquery,setLatestquery]=useState({});
  const [filteredcards,setfilteredcards]=useState({});
  const dispatch=useDispatch();
  const {tickets,isLoading,error}=useSelector((state) => state.tickets);

  useEffect(()=>{
    if (tickets.length === 0 ) {
      dispatch(fetchusersAllTickets());
    }
    else {
      setDisplaycards(tickets);
      setfilteredcards(tickets);
      setLatestquery(tickets[tickets.length-1]);
    }  
  },[tickets, str, displaycards]);
  function handleInput(e) {
     const {value}=e.target;
      setStr(value);
      if(value==''){
        setfilteredcards(displaycards);
      }
  }
  function searchtickets(){
    serchcontent(str);
  }
  function serchcontent(sttr){
      const displaytickets = displaycards.filter(row=>row.title.toLowerCase().includes(sttr.toLowerCase()));
      setfilteredcards(displaytickets);
  }
return(<> <Defaultpage>

<div className="topcontent d-flex justify-content-between">
        <div className="div1dashboard text-start">
        <Link to='/query'> <button className="querybuttondashboard">+ Create Query</button></Link>
          </div>
<div class="input-group rounded  searchbardashboard">
  <input id="searchbar" type="search" class="form-control rounded searchbarinput" placeholder="Search . . ." aria-label="Search" aria-describedby="search-addon" 
                  onChange={handleInput} />
  <span class="input-group-text border-0" id="search-addon">
  <button type="button" class=" searchbuttondashboard" onClick={searchtickets}><BiSearchAlt2 className="searchbuttonsize"/>
  </button>
  </span>
</div>
      </div>  

<div className="sectioncontent">   
<Grid
          container
          spacing={1.5}
          item={true}
          sx={{justify: "Center",mt:0.5 }}
        className='text-center'>
                        
            <Grid item={true} xs={12} sm={12} md={4} lg={4} className="Recentquerygrid" sx={{borderRadius: '5px'}}>
                <div className="Recentqueriestab">
                      <h6 className="mb-5 pt-2">Recent query</h6>
                      <div className="m-3 d-flex justify-content-between">
                         <h5>QN37261 - API post by request.</h5>
                         <p>{displaycards && latestquery.status=='CLOSED'? <button className="querycheckingbutton">Closed</button>:<button className="querycheckingprocess">Process</button> }</p>
                      </div>
                      <hr className="linebreaking"></hr>

                      <div className="recentquerydetail d-flex justify-content-between">
                        <div className="createdattimedate recenttabtopicnames p-2"><h5>Created at:</h5>
                        <span>{latestquery.createdAt && latestquery.createdAt.split('T')[0]}</span>
                        <span style={{marginLeft:"10px"}}>{latestquery.createdAt && latestquery.createdAt.split('T')[1].split('.')[0]}</span>
                        
                        </div>
            <div className="createdattimedate p-2"><h5>Assigned to:</h5><span>{latestquery.assignedTo}</span></div>
                        </div>
                        <div className="recenttabtopicnames text-start"><h5>Description:</h5></div>
                        <p className="recenttabtopicnames text-start">{latestquery.description}</p>

                        <div className="recenttabtopicnames text-start"><h5>Attachments:</h5></div>
                       {latestquery.file ? <div className="text-start"><img src={latestquery.file} className="attentmentfile"></img></div> : <p className="recenttabtopicnames text-start"><span className="text-primary">No Attachments</span></p>}
                       <div className="recenttablowerbutton"><Link style={{textDecoration:"none"}} to={`/querydetails/${latestquery._id}`}> <button className="gotoquerybutton">Go to Query</button></Link></div>
                </div>
                    </Grid>

                    <Grid item={true} xs={12} sm={12} md={8} lg={8} className="" sx={{ borderRadius: '5px' }}>  
                    <div className="historygridtab">
                      
{/* Need to loop here */}

{filteredcards.length>0  ? filteredcards.slice(0).reverse().map((val)=>{
  return( <Link to={`/querydetails/${val._id}`} className="cardslinktab" > <div class="card cradslistsforhistory">
  <div className="d-flex justify-content-between">
<div class="card-body text-start">
<h5 class="card-title">{val.rasiedBy}-{val._id} - {val.title}</h5>
<button type="button" class="cradslistinsidebutton1">{val.category}</button>
</div>
<div class="card-body text-end">
<h5 class="card-title">  
   {/* <button type="button" class="cradslistinsidebutton2">{val.check}</button> */}
   {displaycards && val.status=="UNASSIGNED"?<><button type="button"style={{padding: "4px",
    border: "none",backgroundColor:"rgb(249, 159, 247)",
    color: "black",
   borderRadius: "10px",
    cursor: "context-menu"}}>{displaycards && val.status}</button></>: displaycards&& val.status=="ASSIGNED" ?  <><button type="button" style={{padding: "4px",
    border: "none",background:"rgb(0, 195, 255)",
    color: "blue",
   borderRadius: "10px",
    cursor: "context-menu"}}>{displaycards && val.status}</button></>:<><button type="button" class="cradslistinsidebutton2" style={{ cursor: "context-menu"}}>{displaycards && val.status}</button>  </>
            }
   </h5>
<p class="card-text">{val.time}</p>
</div>
</div>
</div>
</Link>);
}):
<div className="historygridtab" style={{display:"flex", alignItems:"center",justifyContent:"center", backgroundColor:'rgb(248,249,251)'}}>
  <div><div style={{fontSize:"2rem", color:"red", fontWeight:"500"}}>NO Queries Found !</div>
   <img src="https://cdn.dribbble.com/users/1785628/screenshots/5605512/media/097297f8e21d501ba45d7ce437ed77bd.gif" style={{width:"50%",height:"50%"}}></img>
   
   </div>
</div>}
             {/* <Link className="cardslinktab"> <div class="card cradslistsforhistory">
                        <div className="d-flex justify-content-between">
  <div class="card-body text-start">
    <h5 class="card-title">QN37261 - API post by request.</h5>
    <button type="button" class="cradslistinsidebutton1">Zenclass Doubt</button>
  </div>
  <div class="card-body text-end">
    <h5 class="card-title"> <button type="button" class="cradslistinsidebutton2">Button</button></h5>
    <p class="card-text">Created Time</p>
  </div>
  </div>
</div>
</Link> */}
                    </div>
                    </Grid>
                    </Grid>
                    </div>
</Defaultpage>

</>);

}