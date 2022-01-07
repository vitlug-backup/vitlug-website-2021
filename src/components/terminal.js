import React from "react"
import { ReactTerminal } from "react-terminal";
import styled from "styled-components"

const UserTerminal = styled.section`
  border-radius: 10px;
  max-width: 800px;
`

const commands = {
    board: () => {
        return (
            <span>
                Board for the year 2022:
                <br />
                <br />
                <span >
                    <strong>&emsp;Chairperson&emsp;</strong>
                    <span >&emsp;&emsp;&emsp;Nishal Kulkarni</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Vice Chair&emsp;</strong>
                    <span >&emsp;&emsp;&emsp;&ensp;Dhruv Chawla</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Secretary&emsp;</strong>
                    <span >&emsp;&emsp;&emsp;&emsp;Ayush Dwivedi</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Co-Secretary&emsp;</strong>
                    <span >&emsp;&emsp; Paarth Agrawal</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Technical Head&emsp;</strong>
                    <span >&emsp;Nishit Pandit</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Design Head&emsp;</strong>
                    <span >&emsp;&emsp;&ensp;&nbsp;Shivang Kher</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Events Head&emsp;</strong>
                    <span >&emsp;&emsp;&ensp;&nbsp;Chirag Madaan</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Publicity Head&emsp;</strong>
                    <span >&emsp;&ensp;Kartik Gupta</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Editorial Head&emsp;</strong>
                    <span >&emsp;&ensp;Hariharan T</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;Management Head&emsp;</strong>
                    <span >&emsp;Pulkit Chahar</span>
                </span>
                <br />
            </span>
        );
    },
    help: () => {
        return (
            <span>
                VIT-LUG vlsh, version 4.2.0(1)-release (x86_64-arcadia-linux-gnu)
                <br />
                These shell commands are defined nowhere. Use at your own risk.
                <br />
                <br />
                <span >
                    <strong>&emsp;about&emsp;</strong>
                    <span >&emsp;&emsp;&emsp;About VIT-LUG</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;board&emsp;</strong>
                    <span >&emsp;&emsp;&emsp;Get to know our board members</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;social&emsp;</strong>
                    <span >&emsp;&emsp;&ensp;All ways you can reach us!</span>
                </span>
                <br />
                <span >
                    <strong>&emsp;events&emsp;</strong>
                    <span >&emsp;&emsp;&ensp;Get details about the next event</span>
                </span>
                <br />
                <br />
                <span>
                    ...or just send us an email at{" "}
                    <span>
                        <b>linux@vit.ac.in</b>
                    </span>
                </span>
                <br />
            </span >
        );
    },
    cd: (directory) => `changed path to ${directory}`
};

const Terminal = () => {
    return (
        <UserTerminal id="terminal">
            <ReactTerminal
                prompt="[user@vitlug]$"
                commands={commands}
                theme="material-ocean"
                errorMessage="Command not found, try typing 'help'"
            />
        </UserTerminal>
    )
}

export default Terminal