import moment from 'moment'
import { Message } from '../src/core';

export function formatMessage(username:string, text:string):Message { 
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}