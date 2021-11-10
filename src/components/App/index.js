import React, { useState,  useEffect } from 'react'
// import zafClient from '../../zafClient'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import axios from "axios"
import {ORDERS_MOCK} from "../../mock"
import './style.scss'

const App = () => {
  useEffect(async () => {
    const response = await axios.get('https://api.bigcommerce.com/stores/be72yuzniz/v3/orders', {
      headers: {
        "X-Auth-Token": 'bmabnfgcbndbwsx6nzhe3v21ftdv25u',
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })

    console.log('Response:', response)
  }, [])

  return (
    <div>
      <div className="App">
        <p className="Requester-name">Host name is David.</p>
        <button className="button-center" onClick={() => setIsShow(!isShow)}>Toggle!</button>
      </div>
      <Grid debug>
        { ORDERS_MOCK.map(item => (
          <Row justifyContent="center">
            <Col size={4}>
              <h3>Cart Id:</h3>
              <div>{item.cart_id}</div>
            </Col>
            <Col size={4}>
              <h3><b>Billing Address</b></h3>
              <div>Email: {item.billing_address.email} </div>
              <div>Full name: {`${item.billing_address.first_name} ${item.billing_address.last_name}`}</div>
              <div>City: {item.billing_address.city}</div>
              { item.billing_address.phone && <div>Phone: {item.billing_address.phone}</div> }
            </Col>
          </Row>
        ))}
      </Grid>
    </div>
  )
}

export default App
