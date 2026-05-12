"use strict";

const members_list_url = "https://raw.githubusercontent.com/Nystrata/breenternet/refs/heads/main/members.json";
const host_name = window.location.toString();

function set_hrefs(response)
{
    let left = document.getElementById("breen_left");
    let right = document.getElementById("breen_right");

    for (let i = 0; i < response.length; ++i)
    {
        if (response[i]["url"] == host_name)
        {
            let left_idx = i - 1 >= 0 ? i - 1 : response.length - 1;
            let right_idx = i + 1 < response.length ? i + 1 : 0;

            left.href = response[left_idx]["url"];
            right.href = response[right_idx]["url"];
        }
    }
}

fetch(members_list_url, { method: "GET" })
    .then(function(response) { return response.json(); })
    .then(function(json) { set_hrefs(json) });
