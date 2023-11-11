import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import $ from 'jquery';
import {GiHamburgerMenu} from 'react-icons/gi'

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  $("#btn_quemsou").on('click',function(){
    $('#quemsou')[0].scrollIntoView();
  })    
  $("#btn_portfolio").on('click',function(){
      $('#portfolio')[0].scrollIntoView();
  })    
  $("#btn_contato").on('click',function(){
      $('#contato')[0].scrollIntoView();
  })   

  return (
    <>
     <Button variant="dark" onClick={handleShow}>
        <GiHamburgerMenu size={30}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant='secondary' className='w-100' id='btn_quemsou'>Quem Sou</Button>
        </Offcanvas.Body>
      </Offcanvas>
  </>
  );
}

export default SideBar;