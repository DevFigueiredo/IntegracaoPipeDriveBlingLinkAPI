/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'
require('dotenv').config()

export const blingAPI = axios.create({
  baseURL: process.env.API_BLING,
  params: {
    apikey: process.env.API_TOKEN_BLING
  }
})

export const pipeDriveAPI = axios.create({
  baseURL: process.env.API_PIPE_DRIVE,
  params: {
    api_token: process.env.API_TOKEN_PIPE_DRIVE
  }
})
