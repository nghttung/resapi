import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
    constructor() {
        super()
        this.state = {
            zone: {
                name: '',
                zipCodes: '',
                timestamp: ''
            },
            list: []
        }
    }

    componentDidMount() {

        superagent
            .get('/api/zone')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, response) => {
                
                if (err) {
                    alert('ERR : ' + err)
                    return
                }

                //console.log(JSON.stringify(response.body.results))

                let results = response.body.results
                this.setState({
                    list: results
                })
            })
        
    }

    updateZone(event) {
     //    console.log('updateZone : ' + event.target.id + ' == ' + event.target.value)
        
         let updatedZone = Object.assign({}, this.state.zone)
         updatedZone[event.target.id] = event.target.value

         this.setState({
             zone : updatedZone
         })                
    }

     AddZone(event) {
        console.log('AddZone: ' + JSON.stringify(this.state.zone))
        
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)

        this.setState({
            list: updatedList
        })
    }

   
    render() {        
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}><Zone currentzone={zone} /></li>
            )
        })
        
        return (
            
            <div>
                <ol>
                    {listItems}
                </ol>

                <input onChange={this.updateZone.bind(this)} className="form-control" type="text" id="name" placeholder="Name" /><br/>
                <input onChange={this.updateZone.bind(this)} className="form-control" type="text" id="zipCodes" placeholder="zipCodes" /><br />
                <input onChange={this.updateZone.bind(this)} className="form-control" type="text" id="timestamp" placeholder="timestamp" /><br/>
                <button onClick={this.AddZone.bind(this)} className="btn btn-info" > Create Zones</button>
                                       
            </div>    
        )
    }
}

export default Zones