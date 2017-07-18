import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import superagent from 'superagent'

import styles from './styles'

class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comment: {
                username: '',
                body: '',
                timestamp: ''
            },

            list: []
        }
    }

    componentDidMount() {

        superagent
            .get('/api/comment')
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

    submitComment() {
        console.log('submitComment: ' + JSON.stringify(this.state.comment))
        
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)

        this.setState({
            list: updatedList
        })
    }

    updateComment(event) {
      //  console.log('updateUsername : ' + event.target.value)
        
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[event.target.name] = event.target.value

        this.setState({
            comment:updatedComment
        })
    }

    

    render() {     
        const style = styles.comment

        const listItems = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentcomment={comment} /></li>
            )
        })
        
        return (
            <div>
                <h2> Comments: Zone 1</h2>     
                <div style={style.commentsBox}>
                
                    <ul style={style.commentsList }>
                        {listItems}
                    </ul>

                    <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="username" placeholder="Username" /><br/>
                    <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="body" placeholder="Body" /><br />
                     <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="timestamp" placeholder="timestamp" /><br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info" > Create Comment</button>
                    
                </div>  
            </div>
            
        )
    }
}

export default Comments