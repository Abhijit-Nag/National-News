import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { Accessibility, Business, BusinessCenter, Facebook, Group, Instagram, LinkedIn, Twitter, Widgets } from '@material-ui/icons';
import * as React from 'react';
import { Link } from 'react-router-dom';
import "./menu.css"
import axios from 'axios';


export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const callPayment = async () => {
    let amount = 199;
    const { data: { payload } } = await axios.post(`${url}/api/checkout`,
      {
        amount
      });
    console.log(payload);


    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY, // Enter the Key ID generated from the Dashboard
      amount: payload.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "National News",
      description: "Test Transaction",
      image: "",
      order_id: payload.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${url}/api/paymentverification`,
      prefill: {
        name: name,
        email: localStorage.getItem("email"),
        contact: 54849445854
      },
      notes: {
        address: "National News limited."
      },
      theme: {
        color: "#3399cc"
      }
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }


  const url = process.env.REACT_APP_SERVER_API_KEY;
  const name = window.localStorage.getItem("name");
  const handleClick = async () => {
    callPayment();
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['JMedia World', 'JMedia Exclusives', 'About Us', 'More', 'Our Partners'].map((text, index) => (
          <>
            {(index === 4) ? (
              <Link className='link' to={`/partners`}>
                <ListItem style={{ cursor: "pointer" }} key={text} disablePadding>

                  <ListItemIcon>
                    {index % 2 === 0 ? <Business htmlColor='blue' /> : <BusinessCenter htmlColor='green' />}
                  </ListItemIcon>
                  <ListItemText primary={text} />

                </ListItem>
              </Link>
            ) : (
              <>
                <ListItem style={{ cursor: "pointer" }} key={text} disablePadding>

                  <ListItemIcon>
                    {index % 2 === 0 ? <Business htmlColor='blue' /> : <BusinessCenter htmlColor='green' />}
                  </ListItemIcon>
                  <ListItemText primary={text} />

                </ListItem>
                <Divider />
              </>
            )}
          </>

        ))}
      </List>
      <Divider />
      <List>
        {['Connect Us', 'Contribute'].map((text, index) => (
          <ListItem key={text} disablePadding>

            <div className='contact' style={{ display: "flex", flexDirection: "column", cursor: 'pointer' }} onClick={index % 2 === 1 ? () => handleClick() : () => ({})}>
              <div className="topContainer">

                <ListItemIcon>
                  {index % 2 === 0 ? <Group htmlColor='green' style={{ fontSize: "40px" }} /> : <Accessibility style={{ fontSize: "40px" }} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </div>
              {index % 2 === 0 && (
                <div className="icons">

                  <span className='connectIcon'><Facebook htmlColor='blue' style={{ fontSize: "30px" }} /> </span>
                  <span className='connectIcon'><LinkedIn htmlColor='darkviolet' style={{ fontSize: "30px" }} /> </span>
                  <span className='connectIcon'><Twitter htmlColor='blue' style={{ fontSize: "30px" }} /> </span>
                  <span className='connectIcon'><Instagram htmlColor='green' style={{ fontSize: "30px" }} /> </span>
                </div>
              )}
            </div>


          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

      <React.Fragment key={`left`}>
        <Button onClick={toggleDrawer(`left`, true)}><Widgets htmlColor='white' /> </Button>
        <SwipeableDrawer
          anchor={`left`}
          open={state[`left`]}
          onClose={toggleDrawer(`left`, false)}
          onOpen={toggleDrawer(`left`, true)}
        >
          {list(`left`)}
        </SwipeableDrawer>
      </React.Fragment>

    </div>
  );
}