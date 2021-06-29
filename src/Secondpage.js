import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"
import 'moment-timezone';
import {useState,useEffect} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Popup from 'reactjs-popup';

import Treasury from './Treasury';
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";
import bdooracle from "./bdooracle";
import boardroom from "./Boardroom";
import Homepage from "./Moa";
import bdo from "./bdo";
import Black from "./black";
import Staking from "./black";
import share from "./share";
import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";

function MyVerticallyCenteredModal1(props) {
  var [staked,setstaked] = useState("");
  const [geta,setgeta] = useState("");
  var [rate,setrate] = useState("");
  var [twap,settwap] = useState("");
  var [staked,setstaked] = useState("");
  var [locked,setlock] = useState("");
  var [app,setapprove] = useState("");
  var [stake,setstake] = useState("");
  var [amount,setamount]= useState("");
  var [d,setd] = useState("");
  var [d,setd] = useState("");
  var [d3,setd] = useState("");
  var [d4,setd] = useState("");
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
  const [d1,setd1] = useState("");
  const [Seigniorage,setSeigniorage] = useState("");
  var [withdraw,setwithdraw] = useState("");
  var [bal,setbal] = useState("");
  var [claim,setclaim] = useState("");
  var[ear,setear] = useState("");
  

  const Staked = async (event) =>{
    event.preventDefault();
  var x=document.getElementById("mymodal").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te=document.getElementById("tid").value;
   
     var te1=te*1000000000;
     alert(te1)
     //var te2=te1+"000000000000";
    setstake(await boardroom.methods.deposit(te1).
    send({
      from: accounts[0]
     
    }));
   // setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
    
  } 



  return (


    
    <Modal
      {...props}
      style={{width:"500px" , marginLeft:"400px"}}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Stake your amount...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
        <h4 style={{textAlign: "center"}}></h4>
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Staked}>Stake</Button>
      </Modal.Footer>
    </Modal>
  );
}
    
function MyVerticallyCenteredModal2(props) {
  
  var [withdraw,setwithdraw] = useState("");
  
  const Withdraw = async (event) =>{
    event.preventDefault();
    var x1=document.getElementById("mymodal1").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te2=document.getElementById("tid1").value;
   
    var te3=te2*1000000000;
    //te1=te1+"000000000000";
    alert(te3);
    setwithdraw(await boardroom.methods.withdraw(te3).
    send({
      from: accounts[0]
     
    }));
  }



  return (


    
    <Modal
      {...props}
      style={{width:"500px" , marginLeft:"400px"}}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal1"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        withdraw your staked coin !!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
        <h4 style={{textAlign: "center"}}></h4>
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid1" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Withdraw}>Withdraw</Button>
      </Modal.Footer>
    </Modal>
  );
}
    


function Secondpage() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  var [getCurrentEpoch,setepoch] = useState("");

  var [nextseigniorage,setnextseigniorage] = useState("");
  var [getnextEpoch,setepoch1] = useState("");
  var [getrewardStart,setepoch2] = useState("");
  var [d,setd] = useState("");
  var [d3,setd] = useState("");
  var [d4,setd] = useState("");
  const [geta,setgeta] = useState("");
  var [rate,setrate] = useState("");
  var [twap,settwap] = useState("");
  var [staked,setstaked] = useState("");
  var [locked,setlock] = useState("");
  var [app,setapprove] = useState("");
  var [stake,setstake] = useState("");
  var [amount,setamount]= useState("");
  const [tid,setId] = useState("");
  const [d1,setd1] = useState("");
  const [Seigniorage,setSeigniorage] = useState("");
  var [withdraw,setwithdraw] = useState("");
  var [bal,setbal] = useState("");
  var [claim,setclaim] = useState("");
  var[ear,setear] = useState("");
  


      const approve = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        setapprove(await share.methods.approve("0x0c1b08e9394B26997Ac8aaDc332aC9891D8FF9b2","999999999900000000000000000000000000000").
        send({
          from: accounts[0]
         
        }));
      }
      // const Staked = async (event) =>{
      //   event.preventDefault();
      //   const accounts = await  web3.eth.getAccounts();
      //   var te=document.getElementById("tid").value;
      //   alert(te)
      //   setstake(await boardroom.methods.deposit(te).
      //   send({
      //     from: accounts[0]
         
      //   }));
      //   setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
        
      // }
      // const Withdraw = async (event) =>{
      //   event.preventDefault();
      //   const accounts = await  web3.eth.getAccounts();
      //   var te=document.getElementById("tid1").value;
      //   //var te1=tid1;
      //   //alert(te1)
      //   setwithdraw(await boardroom.methods.withdraw(te).
      //   send({
      //     from: accounts[0]
         
      //   }));
      // }
      const Claim = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        setclaim(await boardroom.methods.claimReward().send({
          from: accounts[0]
         
        }));
        alert("Rewards claimed");
      }
       
       
       var check=async()=>{
         alert("completed");  
         const accounts = await  web3.eth.getAccounts();
         setepoch1(await boardroom.methods.holderUnstakeRemainingTime(accounts[0]).call());
        
         d=new Date(getnextEpoch * 1000);
         var d1=(d.toLocaleTimeString('en-US'));

      // // var dateStringWithTime = moment(d).format('HH:MM:SS');

       
         alert(d1)
         //setd1(d1);
         document.getElementById("nextepo").innerHTML =d1;
       }


       useEffect(()=>{check()},[]);



       var check2=async()=>{
        alert("completed");  
        const accounts = await  web3.eth.getAccounts();
        setepoch2(await boardroom.methods.rewardStartDate().call());
       
        d3=new Date(getrewardStart * 1000);
        var d4=(d3.toLocaleTimeString('en-US'));

     // // var dateStringWithTime = moment(d).format('HH:MM:SS');

      
        alert(d1)
        //setd1(d1);
        document.getElementById("nextreward").innerHTML =d4;
      }
      useEffect(()=>{check2()},[]);
  const bal2 = async () => {
    
      const accounts = await  web3.eth.getAccounts();
      setear(await boardroom.methods.pendingBlack(accounts[0]).call()); 
      setnextseigniorage(await boardroom.methods.holderUnstakeRemainingTime(accounts[0]).call()); 
      setlock(await share.methods.balanceOf("0x0c1b08e9394B26997Ac8aaDc332aC9891D8FF9b2").call());
      setepoch(await boardroom.methods.rewardStartDate().call());  
     

   

      
  };
  useEffect(()=>{bal2()},[ear],[nextseigniorage]) 
  return (
    <div className="light">
      
<center>
<br></br>
<h2 class="dark1"><b>Stake your Seigniorage Share</b>
</h2>

  <br></br>

		<form onSubmit={bal2} id="create-course-form" >

   
</form>
<br/>

<div class="container">
  <div class="row">
  <div class="col align-self-start">
    <label class="epoch">rewardStartDate:<span  id="nextreward"></span></label>
  </div>
  </div>
  <br/>

  <div class="row">
    <div class="col">
      <label class="ll" width="100%">UnStackPoint<br/><span  id="nextepo"> </span></label>
    </div>
    {/* <div class="col">
      <label class="ll">eBNBmom Price(TWAP)<span><br/>{twap/1000000000000000000}</span></label>
    </div> */}
  </div><br/>
  <br/>
  <div class="row">
    {/* <div class="col">
      <label class="ll"> Black Staked<span><br/>{staked}</span></label>
    </div> */}
    
    <div class="col">
      <label class="ll">Black Staked<span><br/>{locked}</span></label>
    </div>
    <div class="row">
    {/* <div class="col">
      <label class="ll"  width="100%">nextEpochPoint<br/><span id="nextepo"><br/></span></label>
</div> */}
    </div>
  </div>
</div>
<br/>
<br/>
         <p>
         <b> First we need to approve then only we are able to call stake and Withdraw</b> <br /><br/>
           <button onClick={approve} class="btn btn-primary">Approve</button>
         </p> <br />
        <div class="container row">
          <div class="col">
            <div class="ll1">
              <br/><br/>
            <Button variant="primary" onClick={() => setModalShow1(true)}>
          Stake
        </Button>
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /><br/>
        <br/>
          <b>Your staked amount<br /> {bal}</b>
          <br/>
          <Button variant="primary" onClick={() => setModalShow2(true)}>
          Withdraw
        </Button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
        <br/>
            </div>
          </div>
          <div class="col ll2">
            <br/>
            <br/>
          <b>Your Earned amount  :{ear/1000000000}</b><br /><br/>
  <button  class="btn btn-primary" onClick={Claim}>ClaimRewards</button>
     <br/>
     <br/>
          </div>
        
         
         
         
        </div>
<br></br>
<br/>
     
      
<br></br>
<br></br>
</center>

<br></br>
<br></br>
 </div>      
  );
}

export default Secondpage;
