import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {    

    render() {
        const style = styles.comment

        return (
            
            <div >
                <p style={{fontSize:20, fontWeight:400}}>{this.props.currentcomment.username}</p>
               
                <span style={{ fontWeight: 200 }}>
                    {this.props.currentcomment.body}
                </span>
                <span style={{fontWeight:200,marginLeft:12, marginRight:12}}> | </span>
                <span style={{ fontWeight: 200 }}>
                    {this.props.currentcomment.timestamp}
                </span> 
                <hr/>
            </div>
            
        )
    }
}

export default Comment