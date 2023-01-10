import { useState } from "react"



const playerList:Player[] = [];



let teamRed = {
    teamColor: "red",
    score:0
}
let teamBlue = {
    teamColor: "blue",
    score:0
}
let teamYellow = {
    teamColor: "yellow",
    score:0
}



type Team = {
    teamColor: "red"|"blue"|"yellow",
    score:number 
}


type Player= {
    name: string,
    team: "red"|"blue"|"yellow"
}


type PlayerProps = {
    name: string,
    team: "red"|"blue"|"yellow"
}


export const PlayerGenerator = () => {

    const [playerProps, setPlayerProps] = useState<PlayerProps>({
        name: "",
        team: "red"
    });


    
    
    
    const handleChangeName = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPlayerProps({...playerProps,[event.target.name] : event.target.value});
    }
    const handleChangeTeam = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setPlayerProps({...playerProps,[event.target.name] : event.target.value});
    }


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(playerProps)
        const player = {
            name: playerProps.name,
            team: playerProps.team
        }
        playerList.push(player)
    }


    const deletePlayer = (playerName:string) => {
        playerList.forEach((player, index) => {
            if(player.name===playerName) playerList.splice(index,1)
        })
    }

   


    return (
        <div>
            <h2>Add a new player</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Player name: </label>
            <input id="playername" name="name" onChange={handleChangeName}></input>
            <label className="select-label">Player team</label>
            <select name="team" value={playerProps.team} onChange={handleChangeTeam}>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
            </select>
            <button type="submit" data-testid="myBtn" className="btn default-btn" disabled={false}>Add player</button>
            </form>

            <div>
             {playerList.map(player => {
                return (
                    <h2 key={player.name}>
                        Player: {player.name} |  Team: {player.team}
                        <button onClick={(event) => deletePlayer(player.name)}>Delete</button>
                    </h2>
                )
              })}
            </div>
        </div>
    )
}


