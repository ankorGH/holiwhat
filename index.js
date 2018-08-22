#!/usr/bin/env node

const dotenv = require("dotenv").config()
const request = require("request")
const holidayAPI = require("node-holidayapi")
const freedays = new holidayAPI(process.env.holidayAPIKEY).v1

const argv = require('yargs')
    .usage("Usage: $0 <command>\n eg. holiwhat today")
    .command(
        "now",
        "find what holiday is today",
        {
            country:{
                alias:"c",
                describe:"find holiday for a certain country"
            }
        })
    .command(
        "all",
        "find all holidays",
        {
            country:{
                alias:"c",
                describe:"find holiday for a certain country"
            }
        })
    .help()
    .alias("h","help")
    .argv

const date = new Date()
const params = {
    country:"NG",
    year:date.getFullYear() - 1,
}

if(argv._.includes("now")){
    params.month = date.getMonth()
    params.day = date.getDay()

    if(argv.hasOwnProperty("country")){
        params.country = argv.country
    }

    freedays.holidays(params, (err,data) => {
        if(!err){
            if(data.status === 200 && data.holidays.length > 0){
                console.log(`Today is ${data.holidays[0].name}`)
            }else{
                console.log("No holiday today, Have fun at work ):")
            }


        } else {
            console.log(err)
        }
    })    
}

if(argv._.includes("all")){
    if(argv.hasOwnProperty("country")){
        params.country = argv.country
    }

    freedays.holidays(params, (err,data) => {
        if(!err){
            if(data.status === 200){
                let holidaysStr = `Holidays for this year include\n`
                const keys = Object.keys(data.holidays)

                keys.forEach((val,index) => {
                    holidaysStr += `${++index} ${data.holidays[val][0].name}\t ${returnReadableDate(data.holidays[val][0].date)} \n`
                })

                holidaysStr += "\nNB: Eid celebrations is based on the previous year. Since Eid celebrations depend on the sighting of the moon."
                console.log(holidaysStr)
            }else{
                console.log("Your country doesnt celebrate holidays")
            }

        } else {
            console.log(err)
        }
    })    
}


function returnReadableDate(dateStr){
    const date = new Date(dateStr)
    days = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }

    month = {
        0:"January",
        1:"February",
        2:"March",
        3:"April",
        4:"May",
        5:"June",
        6:"July",
        7:"August",
        8:"September",
        9:"October",
        10:"November",
        11:"December"
    }

    return `${days[date.getDay()]}, ${date.getDay()+ 1} ${month[date.getMonth()]} ${date.getFullYear() + 1}`
}
returnReadableDate('2017-12-25')